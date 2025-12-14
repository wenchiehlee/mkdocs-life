# Wen-Chieh Lee的生活 (MkDocs Project)

## Project Overview
This repository contains the source code for the "Wen-Chieh Lee的生活" (Wen-Chieh Lee's Life) website, a personal blog and record of life experiences. It is built using **MkDocs** with the **Material for MkDocs** theme.

**Key Topics:**
*   **Life:** Daily thoughts and sharing.
*   **Planting:** Experiences and notes on planting.
*   **Breeding:** Records and stories about animal breeding.
*   **Winemaking:** Adventures in homebrewing.

**Key Technologies:**
*   **MkDocs:** Static site generator.
*   **Material for MkDocs:** The primary theme used.
*   **Python Plugins:** Various MkDocs plugins for Git metadata, RSS, authors, etc. (listed in `requirements.txt`).

## Directory Structure
*   **`mkdocs.yml`**: Main configuration file (site settings, nav, plugins, theme).
*   **`docs/`**: Root directory for all Markdown content and assets.
    *   **`blog/`**: Contains blog posts and author configurations.
    *   **`overrides/`**: Custom HTML/theme overrides (partials, hooks).
    *   **`stylesheets/`**, **`javascripts/`**: Custom CSS and JS files.
    *   **`assets/`**: Images and other media.
*   **`.github/`**: GitHub Actions workflows for deployment and sync.

## Development & Usage

### 1. Installation
Install the required Python dependencies (preferably in a virtual environment):
```bash
pip install -r requirements.txt
```

### 2. Local Development
Start the development server with live reloading:
```bash
mkdocs serve
```
The site will be available at `http://127.0.0.1:8000/`.

### 3. Building for Production
Build the static site (output to `site/` directory). Use `--strict` to catch warnings/errors:
```bash
mkdocs build --strict
```

### 4. Deployment
Deploy to GitHub Pages:
```bash
mkdocs gh-deploy --clean
```

## Development Conventions

*   **Content:**
    *   Use Markdown for all content.
    *   Front matter (YAML) is used for metadata like title, date, etc.
    *   Link assets relatively within `docs/` (e.g., `![img](assets/images/image.png)`).
    *   Tone: Chinese, personal, and concise.

*   **Customization:**
    *   **Styling:** Add custom CSS to `docs/stylesheets/` and register in `mkdocs.yml` under `extra_css`.
    *   **Scripting:** Add custom JS to `docs/javascripts/` and register in `mkdocs.yml` under `extra_javascript`.
    *   **Theme Overrides:** Place HTML overrides in `docs/overrides/` to modify the Material theme structure.

*   **Version Control:**
    *   Follow Conventional Commits (e.g., `feat:`, `fix:`, `refine:`).
    *   Keep `requirements.txt` updated if new plugins are added.
