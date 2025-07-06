import { Button } from './ui/button';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function HomeButton() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-6">
      <Button
        size="lg"
        asChild
        className="group overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium"
      >
        <Link
          href={'/generate-program'}
          className="flex items-center font-mono"
        >
          Custom Workout Awaits
          <ArrowRightIcon className="ml-2 size-5 transform transition-transform duration-300 group-hover:rotate-[360deg]" />
        </Link>
      </Button>
    </div>
  );
}
