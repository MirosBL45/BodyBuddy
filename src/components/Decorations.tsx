export default function Decorations() {
  return (
    <>
      {/* SCAN LINE */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none" />

      {/* DECORATIONS ON TOP THE IMAGE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Targeting lines */}
        <div className="absolute top-1/2 left-0 w-1/4 h-px bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-1/2 right-0 w-1/4 h-px bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-0 left-1/2 h-1/4 w-px bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-1/2 h-1/4 w-px bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </>
  );
}
