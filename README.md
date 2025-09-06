<p align="center">
  <img src="https://raw.githubusercontent.com/vishnudt2004/suic-core/main/assets/suic-logo.png" alt="SUIC Logo" width="814" height="88" />
</p>

# Simple UI Components

**Simple UI Components** is a **personal, local-first collection of reusable UI and frontend utility components** — installed locally as editable source code with minimal setup. Each component is **handcrafted from scratch**, reflecting my own ideas and needs while staying flexible enough to adapt to yours.

This is **not** a large, general-purpose UI library. Instead, it’s a **curated set of distinctive, editable components** designed for **direct integration into your projects** — perfect for portfolio work, prototypes, or internal tools.

> **Note:**  
> Every component is built independently — no direct copies from other libraries.

---

## Simple UI Components – Docs

The **suic-docs** (Simple UI Components Docs) repository powers the official documentation website for the SUIC ecosystem. It offers detailed guides, usage examples, and live previews for every component in **suic-core** (Simple UI Components Core), making it easy for developers to explore and integrate components into their projects.

[Live Site](https://suic-docs.vercel.app/docs)

---

### ✨ Features

- 🖥️ **Clean and Modern User Interface**
- 📖 **Documentation for SUIC CLI and all SUIC components**
- 🎨 **Interactive previews of components**
- ⚡ **Built with Next.js, TypeScript, Tailwind, and MDX**

---

### 🛠️ Development

#### Introduction

- **Parent repo (`suic-docs`)** → Documentation website (Next.js)
- **Submodule (`suic-core`)** → Core components library

#### Workflow

**suic-docs**

- Root (Next.js): `/`, docs logic: `src/app/`
- Commands:
  - Dev: `npm run dev`
  - Build: `npm run build`
  - Prod: `npm start`
- Docs live in: `src/app/_docs/`
  - Blueprints: `blueprints/`
  - Components: `components/`
  - Examples: `examples/`
  - Registries: `registries/`
- Registries here are **docs-specific** (update manually)

**suic-core**

- Submodule path: `src/core/`
- Commands:
  - Init: `npm run sub:init`
  - Update: `npm run sub:update`
- Add/modify/remove components here
- Registries here are **CLI-specific** (update manually)

#### Hints

- **Avoid wildcard**: avoid using `git add .` in the parent repo; always update the submodule pointer manually
- **Branch check**: ensure correct branch in submodule before committing
- **Commit/Push order**: submodule first (`suic-core`), then parent (`suic-docs`)
- **Registries**: update manually (automation planned for future)

---

### 🔗 Related

- [SUIC-CLI Docs](https://suic-docs.vercel.app/docs/cli)
- [View Components](https://suic-docs.vercel.app/docs/components)
- [SUIC-Examples Home (Coming soon)](#)

---

### ❤️ Support & Links

If you find value in this project, **star it on GitHub** and **share it** — it really helps!

- ⭐ **Star the library:** [GitHub: suic-core](https://github.com/vishnudt2004/suic-core)
- 📖 **View docs source:** [GitHub: suic-docs](https://github.com/vishnudt2004/suic-docs)
- 🐞 **Report bugs / request features:** [GitHub Issues: suic-core](https://github.com/vishnudt2004/suic-core/issues)
- 🍴 **Fork the repo:** [GitHub: suic-core (fork)](https://github.com/vishnudt2004/suic-core/fork)

You’re welcome to explore and use anything freely — a small **attribution** [(Simple UI Components: suic-docs.vercel.app)](https://suic-docs.vercel.app) for the library in your projects is always appreciated.
