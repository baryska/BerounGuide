import { SectionWithIcon } from '../components/SectionWithIcon';
import { Waves, Dumbbell, Users, PersonStanding } from 'lucide-react';

export default function SportPage() {
  return (
    <main>
      <h1>Sport</h1>

      <p className="perex">
        Kde se hýbat. Organizovaný i neorganizovaný sport.
      </p>

      <SectionWithIcon icon={Waves} title="Bazén a koupaliště">
        <ul>
          <li>
            <strong>Krytý bazén</strong> – 25m bazén, otevřeno celý rok, vstupné cca 80 Kč
          </li>
          <li>
            <strong>Koupaliště</strong> – V létě otevřené venkovní koupaliště, tobogán, travnatá plocha
          </li>
        </ul>
        <p>
          <strong>Tip:</strong> Bazén je nejméně přeplněný odpoledne v pracovní dny
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Users} title="Sportovní areály">
        <ul>
          <li>
            <strong>Eden (sportovní centrum)</strong> – Squash, badminton, fitness, spinning
          </li>
          <li>
            <strong>Hřiště na Vorlu</strong> – Fotbalové a víceúčelové hřiště, veřejně přístupné
          </li>
          <li>
            <strong>Dopravní hřiště</strong> – Ideální pro brusle, koloběžky, skejt
          </li>
        </ul>
      </SectionWithIcon>

      <SectionWithIcon icon={Dumbbell} title="Sportovní kluby">
        <p>
          <strong>Kam jít, když chceš sportovat organizovaně:</strong>
        </p>
        <ul>
          <li>
            <strong>SK Beroun</strong> – Fotbal, největší sportovní klub v Berouně
          </li>
          <li>
            <strong>TJ Sokol</strong> – Gymnastika, volejbal, aerobik
          </li>
          <li>
            <strong>Tenisový klub</strong> – Tenisové kurty u Berounky
          </li>
          <li>
            <strong>Basketbalový klub</strong> – Tréninky v hale ZŠ Hlinky
          </li>
        </ul>
      </SectionWithIcon>

      <SectionWithIcon icon={PersonStanding} title="Běhání a procházky">
        <ul>
          <li>
            <strong>Cyklostezka podél Berounky</strong> – Ideální na běh, rovná, bez aut
          </li>
          <li>
            <strong>Park U Kamenného mostu</strong> – Okruh cca 1 km, osvětlený
          </li>
          <li>
            <strong>Lesní cesty kolem města</strong> – Kopce, terén, krásné výhledy
          </li>
        </ul>
      </SectionWithIcon>
    </main>
  );
}
