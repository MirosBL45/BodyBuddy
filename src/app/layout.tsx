import type { Metadata } from 'next';
import './globals.css';
import ConvexClerkProvider from '@/providers/ConvexClerkProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'BodyBuddy AI',
  description: 'A modern fitness AI platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body
        >
          <Navbar />
          {/* GRID BACKGROUND */}
          <div className="fixed inset-0 -z-1">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>
            <div className="absolute inset-0 bg-[linear-gradient(var(--cyber-grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          </div>
          <main className="pt-24 flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
