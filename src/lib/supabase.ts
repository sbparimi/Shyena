const SUPABASE_URL = "https://gzthuldvqufrvxeybvyo.supabase.co";
const SUPABASE_KEY = "sb_publishable_ueUr_kwat_KK1jQoixQ4ug_QC8ZXqzh";

export type Candidate = {
  id: string;
  full_name: string;
  headline: string;
  bio: string | null;
  location: string;
  timezone: string | null;
  available_from: string | null;
  availability_status: "available" | "soon" | "unavailable";
  core_skills: string[];
  specialties: string[];
  domains: string[];
  certifications: string[];
  years_experience: number | null;
  remote_modes: string[];
  resume_path: string | null;
  avatar_url: string | null;
  total_count: number;
};

async function supabaseFetch(path: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers);
  headers.set("apikey", SUPABASE_KEY);
  headers.set("Authorization", `Bearer ${SUPABASE_KEY}`);
  headers.set("Content-Type", "application/json");
  const response = await fetch(`${SUPABASE_URL}${path}`, { ...init, headers });
  if (!response.ok) throw new Error(await response.text());
  return response;
}

async function directCandidateSearch(filters: {
  search?: string;
  location?: string;
  skill?: string;
  domain?: string;
  availableBy?: string;
  remote?: string;
  page?: number;
  pageSize?: number;
}) {
  const response = await supabaseFetch(
    "/rest/v1/assurance_candidates?select=*&profile_status=eq.published&order=full_name.asc",
  );
  const rows = (await response.json()) as Candidate[];
  const term = (filters.search ?? "").trim().toLowerCase();
  const location = (filters.location ?? "").trim().toLowerCase();
  const skill = (filters.skill ?? "").trim().toLowerCase();
  const domain = (filters.domain ?? "").trim().toLowerCase();
  const remote = (filters.remote ?? "").trim().toLowerCase();
  const availableBy = filters.availableBy ?? "";

  const filtered = rows.filter((candidate) => {
    if (candidate.full_name.trim().toLowerCase() === "suresh parimi") return false;
    const searchable = [
      candidate.full_name,
      candidate.headline,
      candidate.bio ?? "",
      candidate.location,
      ...candidate.core_skills,
      ...candidate.specialties,
      ...candidate.domains,
    ]
      .join(" ")
      .toLowerCase();
    if (term && !searchable.includes(term)) return false;
    if (location && !candidate.location.toLowerCase().includes(location)) return false;
    if (
      skill &&
      ![...candidate.core_skills, ...candidate.specialties].some((x) =>
        x.toLowerCase().includes(skill),
      )
    )
      return false;
    if (domain && !candidate.domains.some((x) => x.toLowerCase().includes(domain))) return false;
    if (remote && !candidate.remote_modes.some((x) => x.toLowerCase() === remote)) return false;
    if (availableBy && candidate.available_from && candidate.available_from > availableBy)
      return false;
    return true;
  });

  const page = Math.max(filters.page ?? 1, 1);
  const pageSize = Math.min(Math.max(filters.pageSize ?? 24, 1), 48);
  const start = (page - 1) * pageSize;
  return filtered.slice(start, start + pageSize).map((candidate) => ({
    ...candidate,
    total_count: filtered.length,
  }));
}

export async function searchCandidates(filters: {
  search?: string;
  location?: string;
  skill?: string;
  domain?: string;
  availableBy?: string;
  remote?: string;
  page?: number;
  pageSize?: number;
}) {
  try {
    const response = await supabaseFetch("/rest/v1/rpc/search_assurance_candidates", {
      method: "POST",
      body: JSON.stringify({
        search_text: filters.search ?? "",
        location_filter: filters.location ?? "",
        skill_filter: filters.skill ?? "",
        domain_filter: filters.domain ?? "",
        availability_from_filter: filters.availableBy || null,
        remote_filter: filters.remote ?? "",
        page_number: filters.page ?? 1,
        page_size: filters.pageSize ?? 24,
      }),
    });
    const rows = (await response.json()) as Candidate[];
    if (rows.length > 0) {
      return rows.filter(
        (candidate) => candidate.full_name.trim().toLowerCase() !== "suresh parimi",
      );
    }
  } catch {
    // Fall through to the direct published-profile query.
  }
  return directCandidateSearch(filters);
}

export async function submitHireRequest(payload: {
  candidate_id: string;
  hiring_manager_name: string;
  company_name: string;
  work_email: string;
  message?: string;
}) {
  await supabaseFetch("/rest/v1/assurance_hire_requests", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify(payload),
  });
}
