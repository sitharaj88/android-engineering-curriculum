import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/* ── Data ── */

const modules = [
  { num: 1, title: 'Kotlin Foundation', desc: 'Variables, OOP, null safety, collections, lambdas, scope functions, and coroutines basics — the language of modern Android.', weeks: '3 Weeks', topics: '4 Topics', link: '/docs/kotlin-foundation/overview' },
  { num: 2, title: 'Android Fundamentals', desc: 'Platform architecture, Activities, Intents, Fragments, ViewGroups, ConstraintLayout, and resource management.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/android-fundamentals/overview' },
  { num: 3, title: 'Modern UI with Jetpack Compose', desc: 'Declarative Composables, modifiers, Material 3 theming, state hoisting, navigation, animations, and Compose interop.', weeks: '4 Weeks', topics: '4 Topics', link: '/docs/jetpack-compose/overview' },
  { num: 4, title: 'Architecture & Design Patterns', desc: 'MVVM, Clean Architecture layers, Repository pattern, Hilt DI, ViewModel + StateFlow, and modular architecture.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/architecture-patterns/overview' },
  { num: 5, title: 'Data Storage & Persistence', desc: 'DataStore, Room database, migrations, Content Providers, encrypted storage, and caching strategies.', weeks: '2 Weeks', topics: '2 Topics', link: '/docs/data-persistence/overview' },
  { num: 6, title: 'Networking & API Integration', desc: 'REST + HTTP, Retrofit, Moshi/Kotlinx serialization, OkHttp interceptors, Paging 3, image loading, and WebSockets.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/networking-api/overview' },
  { num: 7, title: 'Firebase & Cloud Services', desc: 'Auth (Email/Google/Phone), Cloud Firestore, Cloud Storage, FCM push notifications, Analytics, Crashlytics, Remote Config.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/firebase-cloud/overview' },
  { num: 8, title: 'Advanced Android Components', desc: 'Foreground/bound Services, WorkManager, notification channels, runtime permissions, CameraX, sensors, biometrics, Glance widgets.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/advanced-components/overview' },
  { num: 9, title: 'Testing & Quality Assurance', desc: 'JUnit 5, MockK, Espresso, Compose Testing API, TDD methodology, code coverage, static analysis, and CI/CD.', weeks: '2 Weeks', topics: '2 Topics', link: '/docs/testing-quality/overview' },
  { num: 10, title: 'Performance Optimization', desc: 'Memory profiling, LeakCanary, layout performance, app startup, R8/ProGuard, APK shrinking, baseline profiles.', weeks: '2 Weeks', topics: '2 Topics', link: '/docs/performance/overview' },
  { num: 11, title: 'Google Play Store & Publishing', desc: 'Play Console, app signing, App Bundles, in-app purchases, subscriptions, AdMob monetization, and ASO strategies.', weeks: '2 Weeks', topics: '2 Topics', link: '/docs/publishing/overview' },
  { num: 12, title: 'Advanced & Trending Topics', desc: 'Kotlin Multiplatform, ML Kit + TensorFlow Lite, Wear OS, Android TV, BLE/IoT, accessibility, security, adaptive layouts.', weeks: '3 Weeks', topics: '3 Topics', link: '/docs/advanced-trending/overview' },
  { num: 13, title: 'Version Control & Collaboration', desc: 'Git fundamentals, branching strategies, pull requests, code reviews, and conventional commits for team workflows.', weeks: '1 Week', topics: '1 Topic', link: '/docs/version-control/overview' },
];

const features = [
  { icon: '🤖', title: 'Modern Android Stack', desc: 'Kotlin-first curriculum aligned with the latest Jetpack libraries, Material 3, and Google\'s recommended architecture.' },
  { icon: '🧩', title: 'Jetpack Compose First', desc: 'Declarative UI from day one — state hoisting, side effects, animations, navigation, and Compose-XML interop.' },
  { icon: '🏗️', title: 'Clean MVVM Architecture', desc: 'Layered Domain/Data/Presentation, Repository pattern, Hilt DI, and StateFlow — production-grade structure.' },
  { icon: '🧪', title: 'Test-Driven Mindset', desc: 'JUnit 5, MockK, Turbine for Flow, Espresso, and the Compose Testing API — confidence at every layer.' },
  { icon: '⚡', title: 'Production Performance', desc: 'Baseline profiles, R8 minification, startup tracing, memory profiling, and LeakCanary in real apps.' },
  { icon: '🚀', title: 'Ship to Play Store', desc: 'App Bundles, Play Console, signing, in-app purchases, AdMob, and ASO — end-to-end release pipeline.' },
];

const techStack = [
  'Kotlin', 'Jetpack Compose', 'Material 3', 'Coroutines', 'Flow',
  'StateFlow', 'Hilt', 'Room', 'DataStore', 'Retrofit',
  'OkHttp', 'Moshi', 'Coil', 'Paging 3', 'Navigation',
  'WorkManager', 'CameraX', 'Firebase', 'FCM', 'Crashlytics',
  'JUnit 5', 'MockK', 'Espresso', 'Compose Testing', 'R8',
  'Baseline Profiles', 'KMP', 'ML Kit', 'Glance', 'Gradle',
];

const projects = [
  { icon: '🛒', title: 'E-Commerce App', desc: 'Catalog, cart, payments, and order tracking with Compose, Hilt, Room, and Retrofit.' },
  { icon: '💬', title: 'Social Media App', desc: 'Real-time chat with Firestore, push notifications via FCM, and media uploads to Cloud Storage.' },
  { icon: '🍔', title: 'Food Delivery App', desc: 'Live order tracking with Maps, Location services, and WebSocket-driven status updates.' },
  { icon: '💪', title: 'Fitness Tracker', desc: 'Sensor data collection, Wear OS companion, Health Connect, and DataStore persistence.' },
  { icon: '📰', title: 'News Aggregator', desc: 'Offline-first reading with Room caching, Paging 3, WorkManager sync, and Coil image loading.' },
];

const careers = [
  { icon: '🤖', title: 'Android Developer', desc: 'Build and ship native Android apps for top product companies' },
  { icon: '📱', title: 'Mobile App Developer', desc: 'Cross-functional engineer across native and hybrid stacks' },
  { icon: '⚙️', title: 'Kotlin Developer', desc: 'Backend, KMP, and full-stack Kotlin opportunities' },
  { icon: '🏗️', title: 'Full-Stack Mobile Developer', desc: 'End-to-end mobile + cloud delivery for startups and SMBs' },
];

const prerequisites = [
  { icon: '📜', title: 'Any Programming Basics', desc: 'Familiarity with C, C++, Java, or Python — variables, loops, and functions are enough.' },
  { icon: '💻', title: '8 GB+ RAM Machine', desc: 'Windows, macOS, or Linux with at least 8 GB RAM to run Android Studio comfortably.' },
  { icon: '🛠️', title: 'Curiosity & Persistence', desc: 'Willingness to build real apps and debug — no prior Android experience required.' },
  { icon: '📦', title: 'Tools to Install', desc: 'Android Studio (latest), JDK 17+, and Git. We\'ll install everything in Module 02.' },
];

/* ── Trust Icons ── */

function CheckShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

function Phone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  );
}

function Zap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function Award() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}

function BookOpen() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}

/* ── Page ── */

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Android Development Complete Guide"
      description={siteConfig.tagline}
    >
      {/* HERO */}
      <header className="hero-section">
        <div className="hero-bg">
          <div className="hero-float-shape" />
          <div className="hero-float-shape" />
          <div className="hero-float-shape" />
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            <span>By Sitharaj Seenivasan — Senior Software Engineer</span>
          </div>

          <h1 className="hero-title">
            Android Development<br />
            <span className="hero-title-accent">Complete Guide</span>
          </h1>

          <p className="hero-description">
            A comprehensive, production-focused curriculum covering every topic from
            Kotlin fundamentals to Play Store publishing. Built for students,
            self-learners, and professionals upskilling to modern Android with
            Kotlin &amp; Jetpack Compose.
          </p>

          <div className="hero-actions">
            <Link to="/docs/intro" className="btn-primary">
              Explore Curriculum
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="https://pub-4bd5087c503a41ccafd70ad5588f3220.r2.dev/brochures/Android_Development_Training_Sitharaj.pdf"
              className="btn-secondary"
            >
              Download Brochure
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">13</div>
              <div className="hero-stat-label">Modules</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">73+</div>
              <div className="hero-stat-label">Topics</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">34</div>
              <div className="hero-stat-label">Weeks</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">120h</div>
              <div className="hero-stat-label">Content</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">5</div>
              <div className="hero-stat-label">Projects</div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* TRUST BAR */}
        <section className="trust-bar">
          <div className="trust-bar-inner">
            <div className="trust-label">Modern Android Standards</div>
            <div className="trust-items">
              <div className="trust-item"><CheckShield /> Production Ready</div>
              <div className="trust-item"><Phone /> Kotlin + Compose</div>
              <div className="trust-item"><Zap /> Material 3</div>
              <div className="trust-item"><Award /> MVVM &amp; Clean Arch</div>
              <div className="trust-item"><BookOpen /> Hands-On Projects</div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="landing-section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Why Choose This Guide</div>
              <h2 className="section-title">Everything You Need, Nothing You Don't</h2>
              <p className="section-description">
                A structured roadmap that starts from zero and ends at the Play Store —
                covering architecture, testing, performance, and modern Android best
                practices.
              </p>
            </div>
            <div className="features-grid">
              {features.map((f, i) => (
                <div className="feature-card" key={i}>
                  <div className="feature-icon-wrap">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section className="landing-section landing-section--alt">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Complete Curriculum</div>
              <h2 className="section-title">13 Training Modules</h2>
              <p className="section-description">
                A structured learning path from Kotlin fundamentals to Play Store
                publishing — each module building on the previous.
              </p>
            </div>
            <div className="modules-grid">
              {modules.map((m) => (
                <Link to={m.link} className="module-card" key={m.num}>
                  <div className="module-card-header">
                    <div className="module-num">{String(m.num).padStart(2, '0')}</div>
                    <h3>{m.title}</h3>
                  </div>
                  <p>{m.desc}</p>
                  <div className="module-meta">
                    <span className="module-tag">{m.weeks}</span>
                    <span className="module-tag">{m.topics}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TECH */}
        <section className="landing-section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Tools &amp; Technologies</div>
              <h2 className="section-title">Master the Modern Android Stack</h2>
              <p className="section-description">
                Over 30 libraries and tools — every layer of a production Android app,
                from UI to CI/CD.
              </p>
            </div>
            <div className="tech-container">
              {techStack.map((tech, i) => (
                <span className="tech-badge" key={i}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="landing-section landing-section--alt">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Hands-On Experience</div>
              <h2 className="section-title">Projects You'll Build</h2>
              <p className="section-description">
                Real apps that demonstrate enterprise-level Android development skills.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <div className="project-card" key={i}>
                  <div className="project-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PREREQS */}
        <section className="landing-section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Before You Start</div>
              <h2 className="section-title">Prerequisites</h2>
              <p className="section-description">What you need before beginning this program.</p>
            </div>
            <div className="prereq-grid">
              {prerequisites.map((p, i) => (
                <div className="prereq-card" key={i}>
                  <div className="prereq-icon-wrap">{p.icon}</div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAREERS */}
        <section className="landing-section landing-section--alt">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Your Future</div>
              <h2 className="section-title">Career Paths</h2>
              <p className="section-description">Roles you'll be prepared for after completing this program.</p>
            </div>
            <div className="career-grid">
              {careers.map((c, i) => (
                <div className="career-card" key={i}>
                  <div className="career-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSTRUCTOR */}
        <section className="instructor-section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-overline">Your Instructor</div>
              <h2 className="section-title">Learn from an Expert</h2>
            </div>
            <div className="instructor-card">
              <div className="instructor-avatar">SS</div>
              <div className="instructor-info">
                <h3>Sitharaj Seenivasan</h3>
                <div className="instructor-title">Full Stack &amp; Senior Software Engineer</div>
                <p>
                  Experienced engineer specializing in Android, Kotlin, React Native, and
                  full-stack development. Passionate about helping teams build
                  high-quality mobile applications and adopt modern best practices.
                </p>
                <div className="instructor-links">
                  <a href="https://www.sitharaj.in" className="instructor-link" target="_blank" rel="noopener noreferrer">sitharaj.in</a>
                  <a href="https://github.com/sitharaj88" className="instructor-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://linkedin.com/in/sitharaj08" className="instructor-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="mailto:sitharaj.info@gmail.com" className="instructor-link">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-inner">
            <h2>Ready to Build Production Android Apps?</h2>
            <p>Start the complete Android development guide — Kotlin, Jetpack Compose, and beyond.</p>
            <div className="cta-actions">
              <Link to="/docs/intro" className="btn-primary">
                Start the Curriculum
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="mailto:sitharaj.info@gmail.com" className="btn-secondary">
                Contact for Training
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
