import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound(): React.JSX.Element {
  return (
    <Layout
      title="Page Not Found"
      description="The page you were looking for doesn't exist."
    >
      <main className="not-found-page">
        <div className="not-found-inner">
          <div className="not-found-eyebrow">
            <span className="not-found-eyebrow-dot" />
            <span>Error 404</span>
          </div>

          <h1 className="not-found-title">
            This page took a<br />
            <span className="not-found-title-accent">wrong intent</span>
          </h1>

          <p className="not-found-description">
            The link is broken, the page moved, or you mistyped the URL.
            Try one of the destinations below — or jump back to the curriculum.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn-primary">
              Back to Home
              <span aria-hidden="true">→</span>
            </Link>
            <Link to="/docs/intro" className="btn-secondary">
              Browse Curriculum
            </Link>
          </div>

          <div className="not-found-grid">
            <Link to="/docs/intro" className="not-found-card">
              <div className="not-found-card-icon">📚</div>
              <div className="not-found-card-title">Start Learning</div>
              <div className="not-found-card-desc">Begin from the curriculum introduction.</div>
            </Link>
            <Link to="/docs/kotlin-foundation/overview" className="not-found-card">
              <div className="not-found-card-icon">🟢</div>
              <div className="not-found-card-title">Kotlin Foundation</div>
              <div className="not-found-card-desc">The language of modern Android.</div>
            </Link>
            <Link to="/docs/jetpack-compose/overview" className="not-found-card">
              <div className="not-found-card-icon">🧩</div>
              <div className="not-found-card-title">Jetpack Compose</div>
              <div className="not-found-card-desc">Declarative UI with Material 3.</div>
            </Link>
            <Link to="/docs/architecture-patterns/overview" className="not-found-card">
              <div className="not-found-card-icon">🏗️</div>
              <div className="not-found-card-title">Architecture</div>
              <div className="not-found-card-desc">MVVM, Clean Architecture, Hilt.</div>
            </Link>
            <Link to="/docs/firebase-cloud/overview" className="not-found-card">
              <div className="not-found-card-icon">🔥</div>
              <div className="not-found-card-title">Firebase</div>
              <div className="not-found-card-desc">Auth, Firestore, FCM, Crashlytics.</div>
            </Link>
            <Link to="/docs/publishing/overview" className="not-found-card">
              <div className="not-found-card-icon">🚀</div>
              <div className="not-found-card-title">Play Store</div>
              <div className="not-found-card-desc">Signing, App Bundles, monetization.</div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
