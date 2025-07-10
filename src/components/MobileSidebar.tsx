import Link from 'next/link';
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { XIcon, HomeIcon, BookOpenText } from 'lucide-react';
import { Button } from './ui/button';
import { NAV_LINKS } from '@/constants/navigation';

interface MobileSidebarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
  isSignedIn: boolean;
}

export default function MobileSidebar({
  isSidebarOpen,
  closeSidebar,
  isSignedIn,
}: MobileSidebarProps) {
  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      <aside
        style={{ backgroundColor: '#0d5c39' }}
        className={`flex flex-col items-center fixed top-0 right-0 h-full text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center p-4">
          <button
            onClick={closeSidebar}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md"
            aria-label="Close menu"
          >
            <XIcon size={32} color="#ff0080" />
          </button>
        </div>
        <nav
          style={{ backgroundColor: '#0d5c39' }}
          className="flex flex-col items-center gap-6 py-8"
        >
          <div className="flex flex-col items-center gap-6 py-8 h-screen">
            {isSignedIn ? (
              <>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex flex-col items-center gap-1.5 text-lg hover:text-primary transition-colors w-full py-2"
                    onClick={closeSidebar}
                  >
                    <link.icon size={24} />
                    <span>{link.label}</span>
                  </Link>
                ))}

                <Button
                  asChild
                  variant="outline"
                  className="mt-4 border-primary/50 text-primary hover:text-white hover:bg-primary/10 w-3/4"
                  onClick={closeSidebar}
                >
                  <Link href="/generate-program">Get Started</Link>
                </Button>
                <div className="mt-4">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            ) : (
              <>
                <SignInButton>
                  <Button
                    variant={'outline'}
                    className="border-primary/50 text-primary hover:text-white hover:bg-primary/10 w-3/4"
                    onClick={closeSidebar}
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-3/4"
                    onClick={closeSidebar}
                  >
                    Sign Up
                  </Button>
                </SignUpButton>
                <Link
                  href={'/'}
                  className="flex flex-col items-center gap-1.5 text-lg hover:text-primary transition-colors w-full py-2"
                  onClick={closeSidebar}
                >
                  <HomeIcon size={24} />
                  <span>Home</span>
                </Link>
                <Link
                  href={'/blog'}
                  className="flex flex-col items-center gap-1.5 text-lg hover:text-primary transition-colors w-full py-2"
                  onClick={closeSidebar}
                >
                  <BookOpenText size={24} />
                  <span>Blog</span>
                </Link>
              </>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
}
