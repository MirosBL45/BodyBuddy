import { userStats } from '@/constants/userStats';

export default function AiCard() {
  return (
    <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden mb-16">
      {/* HEADER BAR */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/70">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
          <span className="text-sm text-primary font-medium">
            Program Gallery
          </span>
        </div>
        <div className="text-sm text-muted-foreground">Featured Plans</div>
      </div>

      {/* HEADER CONTENT */}
      <div className="p-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-foreground">AI-Generated </span>
          <span className="text-primary">Programs</span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Explore how our AI creates unique workout plans for people like you
        </p>

        {/* STATS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mt-10 font-mono text-center">
          {userStats.map((item, index) => (
            <div key={index} className="flex items-center gap-8 sm:gap-16">
              <div className="flex flex-col items-center">
                <p className="text-3xl text-primary">{item.value}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  {item.label}
                </p>
              </div>
              {index < userStats.length - 1 && (
                <div className="hidden sm:block w-px h-12 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
