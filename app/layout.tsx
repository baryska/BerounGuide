import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Průvodce pro nové obyvatele Berouna',
  description: 'Praktický průvodce pro nové obyvatele města Beroun',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        <header>
          <div className="header-content">
            <nav>
              <ul>
                <li><Link href="/">Úvod</Link></li>
                <li><Link href="/zakladni-veci">Základní věci</Link></li>
                <li><Link href="/parkovani-a-pohyb">Parkování & pohyb</Link></li>
                <li><Link href="/jak-funguje-mesto">Jak funguje město</Link></li>
                <li><Link href="/verejny-prostor">Veřejný prostor</Link></li>
                <li><Link href="/deti-a-skoly">Děti & školy</Link></li>
                <li><Link href="/sport">Sport</Link></li>
                <li><Link href="/knihovna">Knihovna</Link></li>
                <li><Link href="/kultura">Kultura</Link></li>
                <li><Link href="/jidlo-a-obchody">Jídlo & obchody</Link></li>
                <li><Link href="/mistni-kontext">Místní kontext</Link></li>
                <li><Link href="/komunity">Komunity</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {children}

        <footer>
          <p>Naposledy aktualizováno: {new Date().toLocaleDateString('cs-CZ')}</p>
        </footer>
      </body>
    </html>
  );
}
