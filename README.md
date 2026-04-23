# Android Engineering Curriculum

The **world-class, enterprise-grade Android training curriculum**. Production-focused training that takes a learner from Kotlin fundamentals to shipping, scaling, and operating modern Android apps — using the patterns, tooling, and practices of top engineering teams (Google, Square, Airbnb, Meta, Cash App).

## Launch Point

- Site home: https://sitharaj88.github.io/android-engineering-curriculum/
- Curriculum overview: https://sitharaj88.github.io/android-engineering-curriculum/docs/intro
- Start learning: https://sitharaj88.github.io/android-engineering-curriculum/docs/kotlin-foundation/overview
- Capstone projects: https://sitharaj88.github.io/android-engineering-curriculum/docs/projects
- Brochure: https://pub-4bd5087c503a41ccafd70ad5588f3220.r2.dev/brochures/Android_Development_Training_Sitharaj.pdf

## Program Snapshot

- **20 modules** across 5 phases
- **100+ topics** with deep-dive chapters
- **44 weeks** of structured content
- **180+ hours** of training material
- **5 capstone projects** that bring the curriculum together

## What Makes This World-Class

Most Android courses stop at "how to build a small app." This curriculum goes further:

- **Enterprise engineering phase** — modules 14-19 cover Gradle at scale, modularization with 30+ modules, OWASP MASVS security, CI/CD pipelines, observability with SLOs, and enterprise UX (design systems, accessibility, i18n, foldables). These are the topics that separate senior engineers from principal engineers.
- **Production patterns only** — every code sample is lifted from or equivalent to code used in shipping apps. No toy snippets.
- **Career phase** — module 20 teaches you to translate the skills into promotions and offers. Leveling expectations, system design interviews, a 50+ question bank, portfolio strategy, negotiation tactics.
- **Five graded capstone projects** — each with 6 milestones, shared architecture scaffolding, testing strategy, and production hardening.
- **Deep-dive chapters** — coroutines internals, Compose performance with compiler metrics, MVI state machines, offline-first architecture, GraphQL/WebSocket/gRPC, baseline profiles + macrobenchmark.

## Core Stack Covered

| Layer                       | Technologies                                                                                             |
|-----------------------------|----------------------------------------------------------------------------------------------------------|
| **Language**                | Kotlin 2.x, K2 compiler, coroutines, Flow, generics, DSLs, value classes                                |
| **UI**                      | Jetpack Compose, Material 3, Navigation Compose, custom layouts, gestures, Compose Multiplatform        |
| **Architecture**            | MVVM, MVI, Clean Architecture, Hilt DI, offline-first, state machines                                   |
| **Data**                    | Room, DataStore Proto, Paging 3, encrypted storage, migrations                                          |
| **Networking**              | Retrofit, OkHttp, Apollo Kotlin (GraphQL), WebSocket, gRPC, Server-Sent Events                          |
| **Cloud**                   | Firebase Auth, Firestore, FCM, Crashlytics, Performance, Remote Config, Cloud Storage                   |
| **Background**              | WorkManager, Foreground Services, CameraX, sensors, biometrics, Glance widgets                          |
| **Build system**            | Gradle Kotlin DSL, version catalogs, convention plugins, configuration cache, KSP                      |
| **Modularization**          | 30+ module architectures, API/impl split, dynamic feature delivery, Konsist boundaries                 |
| **Security**                | OWASP MASVS, EncryptedSharedPreferences, Keystore, cert pinning, Play Integrity, R8, tamper detection   |
| **Testing**                 | JUnit 5, MockK, Turbine, Espresso, Compose Testing, Macrobenchmark, Paparazzi                           |
| **CI/CD**                   | GitHub Actions, Fastlane, Play Console API, staged rollouts, flaky test quarantine                      |
| **Observability**           | Firebase Crashlytics, Performance, OpenTelemetry, distributed tracing, structured logs, SLOs            |
| **UX**                      | Design tokens, Paparazzi snapshots, TalkBack, WCAG 2.2, i18n, RTL, Window Size Classes, foldables       |
| **Advanced**                | Kotlin Multiplatform, Compose Multiplatform, ML Kit, Wear OS, Android TV, BLE/IoT, Health Connect       |

## Who This Is For

- **Beginners** with basic programming knowledge who want a structured, complete Android roadmap
- **Students** who want a rigorous curriculum instead of scattered tutorials
- **Working developers** moving from legacy Android or Java/XML to Kotlin and Compose
- **Senior engineers** preparing for staff+ interviews or leveling up enterprise skills
- **Teams** that need a reusable training site and reference guide for modern Android practices

## Curriculum Map

### Phase 1 — Foundations

| Module | Focus |
| ------ | ----- |
| 01     | Kotlin Foundation — language, coroutines deep dive, advanced patterns |
| 02     | Android Fundamentals — platform, Activities, Fragments, Views        |
| 03     | Jetpack Compose — UI, performance, custom layouts & gestures         |
| 04     | Architecture & Patterns — MVVM, MVI, offline-first, DI               |

### Phase 2 — Data & Services

| Module | Focus |
| ------ | ----- |
| 05     | Data & Persistence — Room, DataStore, migrations, encryption         |
| 06     | Networking & API — REST, GraphQL, WebSocket, gRPC, SSE              |
| 07     | Firebase & Cloud — Auth, Firestore, FCM, Analytics, Remote Config    |
| 08     | Advanced Components — Services, WorkManager, CameraX, Glance         |

### Phase 3 — Quality & Performance

| Module | Focus |
| ------ | ----- |
| 09     | Testing & Quality — JUnit, MockK, Turbine, Compose tests, CI         |
| 10     | Performance — baseline profiles, macrobenchmark, R8, LeakCanary      |
| 11     | Publishing — Play Console, App Bundles, IAP, AdMob, ASO              |
| 12     | Advanced & Trending — KMP, ML Kit, Wear OS, TV, BLE, IoT             |
| 13     | Version Control — Git, branching, PRs, conventional commits         |

### Phase 4 — Enterprise Engineering

| Module | Focus |
| ------ | ----- |
| 14     | Gradle & Build Systems — convention plugins, version catalog, perf   |
| 15     | Modularization at Scale — 30+ modules, API/impl, dynamic delivery    |
| 16     | Security & Compliance — OWASP MASVS, cert pinning, Play Integrity    |
| 17     | CI/CD & DevOps — GitHub Actions, Fastlane, staged rollouts          |
| 18     | Observability — Crashlytics, Performance, distributed tracing, SLOs  |
| 19     | Enterprise UX — design systems, a11y, i18n, foldables, motion        |

### Phase 5 — Career

| Module | Focus |
| ------ | ----- |
| 20     | Career & Interview — leveling, system design, portfolio, negotiation |

## Capstone Projects

Five production-grade projects, each with 6 milestones and a shared architectural scaffold:

- **E-Commerce App** — catalog, cart, checkout, payments (Compose + Hilt + Room + Retrofit + MVI)
- **Social Media App** — real-time chat, push notifications, media upload (Firebase + FCM + WebSocket)
- **Food Delivery App** — live tracking, Maps, courier ETA (Foreground Services + WebSocket + two-app repo)
- **Fitness Tracker** — sensors, Wear OS companion, Health Connect (KMP + offline-first + battery-optimized)
- **News Aggregator** — offline-first reading with Paging 3, WorkManager sync, Glance home widget

Each project teaches a different subset of the curriculum and has its own architecture diagram, milestone checklist, and review rubric.

## Recommended Learning Path

1. Read the [curriculum overview](https://sitharaj88.github.io/android-engineering-curriculum/docs/intro) to understand the full roadmap.
2. Follow modules 01–13 in order — that's the "build apps" foundation.
3. Start building a capstone project after module 08; finish it alongside modules 09–13.
4. Move into the **Enterprise Engineering phase** (14–19) — this is where senior/staff engineers earn their stripes.
5. Use the **[Architecture Guide](https://sitharaj88.github.io/android-engineering-curriculum/docs/architecture/overview)** and **[Design Patterns](https://sitharaj88.github.io/android-engineering-curriculum/docs/patterns/design-patterns)** as reference throughout.
6. When interviewing, jump to **[Module 20 — Career & Interview Prep](https://sitharaj88.github.io/android-engineering-curriculum/docs/career-interview/overview)**.

## Repo Structure

- `docs/` — long-form MDX lessons organized by module
- `src/` — Docusaurus pages, React components, SVG architecture diagrams, custom CSS
- `static/` — logos, social cards, downloadable resources
- `sidebars.ts` — navigation structure (ordered module list)
- `docusaurus.config.ts` — site metadata, base URL, navbar, search, deployment
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow

## Local Development

```bash
npm install
npm start       # dev server on http://localhost:3000/android-engineering-curriculum/
npm run build   # produces a static site in build/
```

## Deployment

The site is configured for GitHub Pages. Repository-facing site settings live in `docusaurus.config.ts`:

- `url` — https://sitharaj88.github.io
- `baseUrl` — /android-engineering-curriculum/
- `projectName` — android-engineering-curriculum
- `organizationName` — sitharaj88

Every push to `main` auto-deploys via `.github/workflows/deploy.yml`.

## Contributing

If you are editing the curriculum, treat the published site as the learner-facing experience and this repository as the authoring workspace. The main entry points are:

- `docs/intro.mdx` for the program overview
- `docs/<module>/overview.mdx` for each module
- `docs/<module>/<sub-topic>.mdx` for deep-dive chapters
- `src/pages/index.tsx` for the landing page
- `sidebars.ts` for navigation structure
- `src/components/Doc/` for reusable documentation UI components (Callout, FeatureGrid, Diagram, etc.)

## Author

**Sitharaj Seenivasan** — Principal Android Engineer, training architect, and author of this curriculum.

- Site: https://www.sitharaj.in
- GitHub: https://github.com/sitharaj88
- LinkedIn: https://linkedin.com/in/sitharaj08

## License

The curriculum content, documentation, and source code in this repository are © Sitharaj Seenivasan. All rights reserved. Personal and educational use is encouraged; redistribution or commercial training programs based on this content require written permission.
