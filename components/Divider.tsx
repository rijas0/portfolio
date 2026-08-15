export function Divider({ className = "" }: { className?: string }) {
  return <div className={`border-t border-divider ${className}`} />;
}
