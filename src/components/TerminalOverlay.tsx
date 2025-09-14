import { workoutPlan } from '@/constants/workoutPlan';
import { useRandomId } from '@/hooks/useRandomId';

export default function TerminalOverlay() {
  const id = useRandomId();

  return (
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <div className="relative bg-cyber-terminal-bg backdrop-blur-sm border border-border rounded-lg p-3 overflow-hidden font-mono">
        {/* Status bar */}
        <div className="flex items-center justify-between mb-2 border-b border-border pb-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <p className="text-xs text-primary">SYSTEM ACTIVE</p>
          </div>
          <p className="text-xs text-muted-foreground">ID:{id}</p>
        </div>

        <p className="text-sm text-foreground mb-2 tracking-tight">
          <span className="text-primary">/-/-/</span> WORKOUT ANALYSIS COMPLETE
        </p>

        <div className="space-y-1.5 text-xs text-muted-foreground">
          {workoutPlan.map((step) => (
            <div key={step.number} className="flex items-center">
              <div className="text-primary mr-2">{step.number}</div>
              <span>{step.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}