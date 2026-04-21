# Android Engineering Curriculum

Android Engineering Curriculum is a production-focused Android training site and content repository. It is designed to take a learner from Kotlin fundamentals to shipping modern Android apps with Jetpack Compose, clean architecture, testing, performance tuning, and Google Play release workflows.

## Launch Point

- Site home: https://sitharaj88.github.io/android-engineering-curriculum/
- Curriculum overview: https://sitharaj88.github.io/android-engineering-curriculum/docs/intro
- Start learning: https://sitharaj88.github.io/android-engineering-curriculum/docs/kotlin-foundation/overview
- Brochure: https://pub-4bd5087c503a41ccafd70ad5588f3220.r2.dev/brochures/Android_Development_Training_Sitharaj.pdf

## Program Snapshot

- 13 modules
- 73+ topics
- 34 weeks
- 120 hours of training content
- 5 portfolio-style Android projects

Core stack covered in this curriculum:

- Kotlin
- Jetpack Compose
- MVVM and Clean Architecture
- Hilt, Room, DataStore, Retrofit, OkHttp
- Coroutines, Flow, StateFlow
- Firebase Auth, Firestore, FCM, Crashlytics
- JUnit, MockK, Espresso, Compose Testing
- Performance, CI/CD, publishing, and Kotlin Multiplatform foundations

## Who This Is For

- Beginners with basic programming knowledge who want a structured Android roadmap
- Students who want a full curriculum instead of scattered tutorials
- Working developers moving from legacy Android or Java/XML to Kotlin and Compose
- Teams that need a reusable training site and reference guide for modern Android practices

## What Makes This Different

- Production-focused: lessons are written around real app architecture, not toy snippets
- Concept-first: the material explains why patterns exist, not just how to copy them
- End-to-end: the program covers UI, architecture, data, cloud, testing, performance, and release
- Repo plus site: the repository stores the source content, while the published Docusaurus site is the primary learning interface

## Curriculum Map

| Module | Focus |
| --- | --- |
| 01 | Kotlin Foundation |
| 02 | Android Fundamentals |
| 03 | Modern UI with Jetpack Compose |
| 04 | Architecture and Design Patterns |
| 05 | Data Storage and Persistence |
| 06 | Networking and API Integration |
| 07 | Firebase and Cloud Services |
| 08 | Advanced Android Components |
| 09 | Testing and Quality Assurance |
| 10 | Performance Optimization |
| 11 | Google Play Store and Publishing |
| 12 | Advanced and Trending Topics |
| 13 | Version Control and Collaboration |

## Projects You Build

- E-Commerce App: catalog, cart, checkout, data, networking, and architecture
- Social Media App: real-time chat, push notifications, and cloud media
- Food Delivery App: maps, live tracking, and status updates
- Fitness Tracker: sensors, persistence, Wear OS, and Health Connect workflows
- News Aggregator: offline-first content, paging, caching, and background sync

## Recommended Learning Path

1. Open the curriculum overview and understand the full roadmap.
2. Start with Module 01 and move through the modules in order.
3. Build the project work as each module cluster unlocks new capabilities.
4. Use the site as the primary learning experience and this repo as the content source.
5. Revisit architecture, patterns, testing, and performance sections while building apps.

## Repo Structure

- `docs/`: long-form MDX lessons and module content
- `src/`: Docusaurus pages, React components, diagrams, and styles
- `static/`: static assets such as logos, images, and downloadable resources
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow
- `docusaurus.config.ts`: site metadata, base URL, navbar, search, and deployment settings

## Local Development

```bash
npm install
npm start
npm run build
```

Local dev URL:

```text
http://localhost:3000/android-engineering-curriculum/
```

## Deployment

The site is configured for GitHub Pages. Repository-facing site settings live in `docusaurus.config.ts`, including:

- `url`
- `baseUrl`
- `projectName`
- `organizationName`

## Source of Truth

If you are editing the curriculum, treat the published site as the learner-facing experience and this repository as the authoring workspace. The main entry points are:

- `docs/intro.mdx` for the program overview
- `src/pages/index.tsx` for the landing page
- `sidebars.ts` for navigation structure
- `src/components/Doc/` for reusable documentation UI components

## Author

Sitharaj Seenivasan
