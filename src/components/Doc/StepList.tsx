import React from 'react';
import styles from './StepList.module.css';

interface Step {
  title: string;
  description?: string;
  code?: string;
  lang?: string;
}

interface StepListProps {
  steps: Step[];
}

export default function StepList({ steps }: StepListProps) {
  return (
    <ol className={styles.list}>
      {steps.map((step, i) => (
        <li key={i} className={styles.step}>
          <div className={styles.number}>{String(i + 1).padStart(2, '0')}</div>
          <div className={styles.content}>
            <h4 className={styles.title}>{step.title}</h4>
            {step.description && <p className={styles.description}>{step.description}</p>}
            {step.code && (
              <pre className={styles.code}>
                <code className={`language-${step.lang ?? 'bash'}`}>{step.code}</code>
              </pre>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
