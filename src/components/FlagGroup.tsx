import { ReactNode } from 'react';

interface FlagGroupProps {
  title: string;
  columns?: number;
  children: ReactNode;
}

export function FlagGroup({ title, columns, children }: FlagGroupProps) {
  const gridClass = columns === 1
    ? 'grid grid-cols-1'
    : 'grid grid-cols-1 sm:grid-cols-3';

  return (
    <fieldset className="border border-surface-border rounded-lg p-4">
      <legend className="text-text-secondary text-sm font-mono px-2">{title}</legend>
      <div className={`${gridClass} gap-2 mt-2`}>
        {children}
      </div>
    </fieldset>
  );
}
