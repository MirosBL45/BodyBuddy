import { ZapIcon } from 'lucide-react';
import Link from 'next/link';
import { FOOTER_LINKS } from '@/constants/footerLinks';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1 bg-primary/10 rounded">
                <ZapIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xl font-bold font-mono">
                body<span className="text-primary">buddy</span>.ai
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Made by{' '}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={'https://miroslavjovic.com/'}
                title={'Miroslav Jović | Frontend Developer'}
                className="text-primary"
              >
                Miroslav Jović
              </Link>
            </p>
          </div>
          {/* Links */}
          <div className="grid grid-cols-3 gap-x-12 gap-y-2 text-sm">
            {FOOTER_LINKS.map((link) => (
              <Link
                className="text-muted-foreground hover:text-primary transition-colors"
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Status */}
          <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background/50">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-mono">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
