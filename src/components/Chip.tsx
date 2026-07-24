interface ChipProps {
  label: string;
  variant: 'radio' | 'checkbox';
  selected: boolean;
  flagCode?: string;
  onChange: (selected: boolean) => void;
}

export function Chip({ label, variant, selected, flagCode, onChange }: ChipProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!selected)}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-md border text-sm font-mono transition-all duration-200
        ${selected
          ? 'bg-accent/10 border-accent text-accent'
          : 'bg-surface-alt border-surface-border text-text-secondary hover:border-accent/50'
        }
      `}
    >
      <span
        className={`
          w-3 h-3 border flex-shrink-0 transition-colors duration-200
          ${variant === 'radio' ? 'rounded-full' : 'rounded-sm'}
          ${selected ? 'bg-accent border-accent' : 'border-surface-border'}
        `}
      />
      {flagCode && (
        <span className="text-text-secondary">-{flagCode}</span>
      )}
      <span>{label}</span>
    </button>
  );
}
