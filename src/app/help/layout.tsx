import Link from 'next/link';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>
        <Link href={'/help/companies'}>companies</Link>
        <br />
        <Link href={'/help'}>help front</Link>
        <br />
        <Link href={'/help/individuals'}>individuals</Link>
      </nav>
      <p>Layout of help</p>
      {children}
    </div>
  );
}
