import React from 'react';
import styles from './Callout.module.css';

type CalloutKind = 'info' | 'tip' | 'warning' | 'danger' | 'success' | 'note';

interface CalloutProps {
  kind?: CalloutKind;
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const DEFAULTS: Record<CalloutKind, { title: string; icon: string }> = {
  info:    { title: 'Info',       icon: 'ℹ' },
  tip:     { title: 'Pro Tip',    icon: '✦' },
  warning: { title: 'Heads Up',   icon: '⚠' },
  danger:  { title: 'Caution',    icon: '✕' },
  success: { title: 'Recommended',icon: '✓' },
  note:    { title: 'Note',       icon: '▸' },
};

export default function Callout({ kind = 'info', title, icon, children }: CalloutProps) {
  const defaults = DEFAULTS[kind];
  return (
    <aside className={`${styles.callout} ${styles[kind]}`}>
      <div className={styles.badge}>
        <span className={styles.icon}>{icon ?? defaults.icon}</span>
        <span className={styles.label}>{title ?? defaults.title}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </aside>
  );
}
