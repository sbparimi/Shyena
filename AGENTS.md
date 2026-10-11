<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Public site theme contract

- `src/warp-theme.css` is the single source of truth for public-site colours, typography, shared surfaces, controls, and responsive theme rules. It must load after `src/site-theme.css` in `src/routes/__root.tsx`.
- Keep `src/site-theme.css` limited to component-specific editorial and video-player rules. Do not add global body, heading, button, or navigation overrides there.
- Keep `src/enterprise-typography.css` as a compatibility stub; do not import it into the root style cascade.
- Use the `--warp-*` CSS tokens and semantic header/footer hooks instead of adding one-off colour and typography overrides.
- `scripts/validate-theme-contract.mjs` runs during lint and builds. Update its assertions deliberately if the theme architecture changes.
