import { ReactNode } from 'react';

interface FlagGroupProps {
  title: string;
  children: ReactNode;
}

export function FlagGroup({ title, children }: FlagGroupProps) {
  return (
    <fieldset className="border border-surface-border rounded-lg p-4">
      <legend className="text-text-secondary text-sm font-mono px-2">{title}</legend>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
        {children}
      </div>
    </fieldset>
  );
}
