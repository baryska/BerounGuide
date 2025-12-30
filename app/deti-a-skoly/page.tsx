import { SectionWithIcon } from '../components/SectionWithIcon';
import { School, Palette, Trophy } from 'lucide-react';

export default function DetiASkolyPage() {
  return (
    <main>
      <h1>Děti & školy</h1>

      <p className="perex">
        Vše kolem dětí na jednom místě. Školky, školy, kroužky.
      </p>

      <SectionWithIcon icon={School} title="Základní školy">
        <p>
          <strong>Městské školy:</strong>
        </p>
        <ul>
          <li>
            <strong>ZŠ Wagnerovo náměstí</strong> – Největší škola v centru, tradiční ZŠ
          </li>
          <li>
            <strong>ZŠ Preislerova</strong> – Škola na sídlišti, menší třídy
          </li>
          <li>
            <strong>ZŠ Hlinky</strong> – Moderní škola, sportovní zaměření
          </li>
        </ul>
        <p>
          <strong>Soukromé školy:</strong>
        </p>
        <ul>
          <li>
            <strong>Montessori ZŠ</strong> – Alternativní pedagogika, menší třídy, vyšší školné
          </li>
        </ul>
        <p>
          <strong>Zápisy:</strong> Duben každého roku, sleduj web města nebo Munipolis
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Palette} title="Mateřské školy">
        <p>
          <strong>Městské školky:</strong> V Berouně je 6 městských školek, kapacity jsou napjaté
        </p>
        <p>
          <strong>Soukromé školky:</strong> Vyšší školné, menší kolektivy, individuálnější péče
        </p>
        <p>
          <strong>Dětské skupiny:</strong> Alternativa ke školce, menší kolektivy, flexibilnější
        </p>
        <p>
          <strong>Tip:</strong> Zápisy do školek jsou v květnu, podej přihlášku včas – místa se zaplní rychle
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Trophy} title="Kroužky pro děti">
        <p>
          <strong>DDM (Dům dětí a mládeže):</strong>
        </p>
        <ul>
          <li>Široká nabídka kroužků – výtvarné, sportovní, hudební, technické</li>
          <li>Cenově dostupné, většina kroužků je do 2000 Kč/rok</li>
        </ul>
        <p>
          <strong>Kala (Berounský dům dětí a mládeže):</strong>
        </p>
        <ul>
          <li>Podobná nabídka jako DDM, jiná lokalita</li>
          <li>Oblíbené jsou keramika a divadlo</li>
        </ul>
        <p>
          <strong>Tip:</strong> Zápisy do kroužků jsou v září, sleduj web DDM a Kaly
        </p>
      </SectionWithIcon>
    </main>
  );
}
