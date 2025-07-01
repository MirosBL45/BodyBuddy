import Link from 'next/link';
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import { NAV_LINKS } from '@/constants/navigation';

interface DesktopNavProps {
  isSignedIn: boolean;
}

export default function DesktopNav({ isSignedIn }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center gap-5">
      {isSignedIn ? (
        <>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
            >
              <link.icon size={16} />
              <span>{link.label}</span>
            </Link>
          ))}

          <Button
            asChild
            variant="outline"
            className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
          >
            <Link href="/generate-program">Get Started</Link>
          </Button>
          <UserButton />
        </>
      ) : (
        <>
          <SignInButton>
            <Button
              variant={'outline'}
              className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
            >
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Sign Up
            </Button>
          </SignUpButton>
        </>
      )}
    </nav>
  );
}
