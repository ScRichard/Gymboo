import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gimboo – soukromé fitness',
  description: 'Gimboo – soukromé fitness bez čekání. Trénujte v klidu, s prémiovým vybavením a flexibilní rezervací až pro 3 osoby. Váš čas, váš výkon.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white bg-stone-950">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
