const SUPABASE_URL = "https://gzthuldvqufrvxeybvyo.supabase.co";
const SUPABASE_KEY = "sb_publishable_ueUr_kwat_KK1jQoixQ4ug_QC8ZXqzh";

export type Candidate = {
  id: string; full_name: string; headline: string; bio: string | null; location: string;
  timezone: string | null; available_from: string | null;
  availability_status: "available" | "soon" | "unavailable";
  core_skills: string[]; specialties: string[]; domains: string[]; certifications: string[];
  years_experience: number | null; remote_modes: string[]; resume_path: string | null;
  avatar_url: string | null; total_count: number;
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

export async function searchCandidates(filters: {
  search?: string; location?: string; skill?: string; domain?: string;
  availableBy?: string; remote?: string; page?: number; pageSize?: number;
}) {
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
  return (await response.json()) as Candidate[];
}

export async function submitHireRequest(payload: {
  candidate_id: string; hiring_manager_name: string; company_name: string;
  work_email: string; message?: string;
}) {
  await supabaseFetch("/rest/v1/assurance_hire_requests", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify(payload),
  });
}
