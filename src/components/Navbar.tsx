'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { MenuIcon, ZapIcon } from 'lucide-react';

import DesktopNav from './DesktopNav';
import MobileSidebar from './MobileSidebar';

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

        {/* Desktop Nav */}
        <DesktopNav isSignedIn={isSignedIn} />

        {/* Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
            aria-label="Open menu"
          >
            <MenuIcon size={32} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        isSignedIn={isSignedIn}
      />
    </header>
  );
}