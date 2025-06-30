'use client';

import { useState } from 'react';
import { useUser, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import {
  ZapIcon,
  HomeIcon,
  DumbbellIcon,
  UserIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Navbar() {
  const { isSignedIn } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            body<span className="text-primary">buddy</span>.ai
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>
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

        {/* Mobile/Tablet Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
            aria-label="Open menu"
          >
            <MenuIcon size={32} /> {/* Povećana ikonica */}
          </button>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        style={{ backgroundColor: '#0d5c39' }}
        className={`flex flex-col items-center fixed top-0 right-0 h-full text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div>
          <button
            onClick={closeSidebar}
            className="py-4 text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md"
            aria-label="Close menu"
          >
            <XIcon size={32} /> {/* Povećana ikonica */}
          </button>
        </div>
        <nav
          style={{ backgroundColor: '#0d5c39' }}
          className="flex flex-col items-center gap-6 py-8"
        >
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex flex-col items-center gap-1.5 text-lg hover:text-primary transition-colors w-full py-2"
                onClick={closeSidebar}
              >
                <HomeIcon size={24} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex flex-col items-center gap-1.5 text-lg hover:text-primary transition-colors w-full py-2"
                onClick={closeSidebar}
              >
                <DumbbellIcon size={24} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex flex-col items-center gap-1.5 text-lg hover:text-primary transition-colors w-full py-2"
                onClick={closeSidebar}
              >
                <UserIcon size={24} />
                <span>Profile</span>
              </Link>
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
            </>
          )}
        </nav>
      </aside>
    </header>
  );
}
