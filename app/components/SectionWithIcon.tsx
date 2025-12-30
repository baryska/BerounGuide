import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionWithIconProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function SectionWithIcon({ icon: Icon, title, children }: SectionWithIconProps) {
  return (
    <div className="section-with-icon">
      <div className="section-icon" role="img" aria-label={title}>
        <Icon size={32} strokeWidth={2} color="#000000" />
      </div>
      <div className="section-content">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
