import { homeStats } from '@/constants/homeStats';
import Image from 'next/image';
import Robot from '@/assets/BigBodyBuddy.webp';
import {
  TerminalOverlay,
  HomeButton,
  CornerPieces,
  Decorations,
} from '@/components/homeComponents';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            {/* CORNER DEOARATION, self closing tag */}
            <div className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2" />

            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-7 space-y-8 relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">Transform</span>
                <br />
                <span className="text-primary">Your Body</span>
                <br />
                <span className="text-foreground">With Advanced</span>
                <br />
                <span className="text-foreground">AI</span>
                <span className="text-primary"> Technology</span>
              </h1>

              {/* SEPERATOR LINE, self closing tag  */}
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />

              <p className="text-xl text-muted-foreground w-2/3">
                Talk to our AI coach to receive custom-made diet plans and
                workout routines tailored to your needs
              </p>

              {/* STATS */}
              <div className="flex items-center gap-10 py-6 font-mono">
                {homeStats.map((item, index) => (
                  <div className="flex items-center gap-10" key={index}>
                    <div className="flex flex-col">
                      <div className="text-2xl text-primary">{item.value}</div>
                      <div className="text-xs uppercase tracking-wider">
                        {item.label}
                      </div>
                    </div>
                    {index < homeStats.length - 1 && (
                      <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <HomeButton />
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="lg:col-span-5 relative">
              {/* CORNER PIECES */}
              <CornerPieces />

              {/* IMAGE CONTANINER */}

              <div className="relative aspect-square max-w-lg mx-auto group">
                <div className="relative overflow-hidden rounded-lg bg-cyber-black">
                  <Image
                    src={Robot}
                    alt="AI Fitness Coach"
                    className="size-full object-cover object-center"
                  />
                  <Decorations />
                </div>

                {/* TERMINAL OVERLAY */}
                <TerminalOverlay />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
