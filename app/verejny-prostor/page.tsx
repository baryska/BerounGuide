import { SectionWithIcon } from '../components/SectionWithIcon';
import { TreePine, Baby, Users, Mountain } from 'lucide-react';

export default function VerejnyProstorPage() {
  return (
    <main>
      <h1>Veřejný prostor</h1>

      <p className="perex">
        Kde se žije venku. Parky, hřiště a místa, kam zajít s dětmi.
      </p>

      <SectionWithIcon icon={TreePine} title="Parky">
        <ul>
          <li>
            <strong>Park U Kamenného mostu</strong> – Hlavní městský park, lavičky, hřiště, v létě tu bývají akce
          </li>
          <li>
            <strong>Husovy sady</strong> – Klidný park v centru, ideální na procházku
          </li>
          <li>
            <strong>Park na Plácku</strong> – Menší park u náměstí, dobré místo na posezení
          </li>
        </ul>
      </SectionWithIcon>

      <SectionWithIcon icon={Users} title="Dětská hřiště">
        <ul>
          <li>
            <strong>Hřiště v parku U Kamenného mostu</strong> – Největší městské hřiště, prolézačky, houpačky, pískoviště
          </li>
          <li>
            <strong>Hřiště na Vorlu</strong> – Moderní hřiště s lanovkou, oblíbené mezi rodiči
          </li>
          <li>
            <strong>Hřiště U Zelených</strong> – Menší, ale klidné, méně dětí
          </li>
        </ul>
      </SectionWithIcon>

      <SectionWithIcon icon={Baby} title="Kam s dětmi">
        <p>
          <strong>Tipy od rodičů:</strong>
        </p>
        <ul>
          <li>
            <strong>Cyklostezka podél Berounky</strong> – Ideální na kočárek nebo na kolo s dětmi
          </li>
          <li>
            <strong>Koupaliště v létě</strong> – Velká travnatá plocha, tobogán, občerstvení
          </li>
          <li>
            <strong>Dopravní hřiště</strong> – Děti si můžou zkusit jezdit na kolečkách podle dopravních značek
          </li>
        </ul>
      </SectionWithIcon>

      <SectionWithIcon icon={Mountain} title="Okolí města">
        <p>
          <strong>Kam vyrazit za město:</strong>
        </p>
        <ul>
          <li>
            <strong>Berounka</strong> – Procházka podél řeky, v létě koupání
          </li>
          <li>
            <strong>Karlický rybník</strong> – Klidné místo na procházku, v zimě bruslení
          </li>
          <li>
            <strong>Koněpruské jeskyně</strong> – 10 minut autem, ideální výlet s dětmi
          </li>
        </ul>
      </SectionWithIcon>
    </main>
  );
}
