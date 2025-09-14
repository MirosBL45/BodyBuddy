import Link from 'next/link';

const helpLinks = [
  {
    title: 'Individuals',
    description: 'Guides, tips, and help for personal users of our platform.',
    href: '/help/individuals',
  },
  {
    title: 'Companies',
    description: 'Support and resources for businesses and corporate accounts.',
    href: '/help/companies',
  },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        <Link
          className="hover:text-primary transition-all duration-300"
          href={'/help'}
        >
          Help
        </Link>
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        {helpLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <span className="block p-6 sm:w-64 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-2">{link.title}</h2>
              <p className="text-gray-600">{link.description}</p>
            </span>
          </Link>
        ))}
      </div>
      {children}
    </main>
  );
}
