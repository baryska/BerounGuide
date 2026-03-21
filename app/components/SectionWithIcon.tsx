import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionWithIconProps {
  icon: LucideIcon;
  title: string;
  id?: string;
  children: React.ReactNode;
}

export function SectionWithIcon({ icon: Icon, title, id, children }: SectionWithIconProps) {
  return (
    <section className="section-with-icon" id={id} aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="section-icon" role="img" aria-label={title}>
        <Icon size={32} strokeWidth={2} color="#000000" />
      </div>
      <div className="section-content">
        <h2 id={id ? `${id}-heading` : undefined}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
