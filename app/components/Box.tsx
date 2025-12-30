import React from 'react';

type BoxType = 'tip' | 'note' | 'warning';

interface BoxProps {
  type?: BoxType;
  title?: string;
  children: React.ReactNode;
}

const boxTitles: Record<BoxType, string> = {
  tip: 'Tip',
  note: 'Poznámka',
  warning: 'Pozor',
};

export function Box({ type = 'note', title, children }: BoxProps) {
  const displayTitle = title || boxTitles[type];

  return (
    <div className={`box box-${type}`}>
      {displayTitle && <h3>{displayTitle}</h3>}
      {children}
    </div>
  );
}
