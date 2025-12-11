# Repository Guidelines

## Project Structure & Module Organization
- `mkdocs.yml` holds site configuration, navigation, and plugins (blog, git metadata, RSS, tags).
- `docs/` stores all Markdown content and assets; key pages include `index.md`, `planting.md`, `breeding.md`, `winemaking.md`, `tag.md`, and `about/`.
- `docs/stylesheets/`, `docs/javascripts/`, and `docs/assets/` contain custom styling, scripts, and media referenced via `extra_css` and `extra_javascript`.
- `docs/overrides/` customizes Material for MkDocs: `partials/*.html` adjust layout, `assets/` stores bundled theme assets, and `hooks/*.py` expose macros/shortcodes.
- `requirements.txt` lists Python dependencies for MkDocs and plugins; keep it in sync with any additions.

## Build, Test, and Development Commands
- `pip install -r requirements.txt` — install dependencies (use a virtualenv).
- `mkdocs serve` — start the dev server at `http://127.0.0.1:8000/` with live reload.
- `mkdocs build --strict` — produce the static site in `site/` and fail on warnings; run before pushing.
- `mkdocs gh-deploy --clean` — publish to GitHub Pages when needed (deploys the latest build).

## Coding Style & Naming Conventions
- Begin Markdown files with YAML front matter (`title`, `date`, optional `hide`/`comments` flags); use ISO dates and keep headings in sentence case.
- Prefer Chinese body copy to match the existing tone; keep paragraphs concise and use lists where helpful.
- Link assets relatively inside `docs/` (e.g., `![img](assets/images/wjlee.png)`); avoid absolute URLs for local files.
- Keep custom CSS/JS scoped by feature (e.g., `stylesheets/customize.css`, `javascripts/extra.js`) instead of inline styles; place layout tweaks in `docs/overrides/`.

## Testing Guidelines
- Core check: `mkdocs build --strict` to catch broken links, missing metadata, and theme errors.
- For visual changes, browse multiple pages with `mkdocs serve` to verify overrides in `docs/overrides/` still render correctly.
- When adding blog content, include draft metadata as needed and ensure navigation still matches `nav` in `mkdocs.yml`.

## Commit & Pull Request Guidelines
- Follow the repository’s Conventional Commit pattern (`feat:`, `fix:`, `refine`, etc.); keep scopes short and descriptive.
- PRs should note affected pages/assets/overrides, list any new commands or dependencies, and include before/after screenshots for UI changes.
- Mention how you validated the change (commands run, pages reviewed) and link related issues when available.
