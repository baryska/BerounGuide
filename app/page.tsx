import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="homepage">
      <h1>Beroun: Manuál</h1>

      <p className="perex">
        Vítejte v Berouně. Tento průvodce obsahuje praktické informace,
        které vám pomohou zorientovat se v našem městě.
      </p>

      <div className="homepage-hero">
        <div className="hero-image">
          <Image
            src="/beroun.jpg"
            alt="Beroun"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </main>
  );
}
