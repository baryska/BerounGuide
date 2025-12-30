import { SectionWithIcon } from '../components/SectionWithIcon';
import { Map, Castle, MessageCircle, AlertCircle } from 'lucide-react';

export default function MistniKontextPage() {
  return (
    <main>
      <h1>Místní kontext</h1>

      <p className="perex">
        Aby ses neztrácela v řeči místních. Názvy, zvyky a kontext.
      </p>

      <SectionWithIcon icon={Map} title="Místní názvy a místa">
        <ul>
          <li>
            <strong>Plácek</strong> – Husovo náměstí, hlavní náměstí města, centrum dění
          </li>
          <li>
            <strong>Tiba</strong> – Sídliště Závodí, největší sídliště v Berouně
          </li>
          <li>
            <strong>U Zelených</strong> – Čtvrť na okraji města, směrem ke Koněprusům
          </li>
          <li>
            <strong>U Hřebíčka</strong> – Lokalita poblíž zimního stadionu
          </li>
          <li>
            <strong>Na Vorlu</strong> – Sportovní areál a hřiště
          </li>
        </ul>
        <p>
          <strong>Tip:</strong> Když se ptáš místních na cestu, používej tyto názvy, ne oficiální
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Castle} title="Historie a pověsti">
        <p>
          <strong>Co je dobré vědět:</strong>
        </p>
        <ul>
          <li>
            <strong>Beroun je královské město</strong> – Založil ho král Přemysl Otakar II. v 13. století
          </li>
          <li>
            <strong>Hradby</strong> – Beroun má zachovalé středověké hradby, můžeš po nich chodit
          </li>
          <li>
            <strong>Berounka</strong> – Řeka, která protéká městem, podle ní je město pojmenované
          </li>
        </ul>
        <p>
          <strong>Legendy:</strong> V Berouně se říká, že kdo se napije z Berounky, už odsud nikdy neodejde
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={MessageCircle} title="Co se tu řeší">
        <p>
          <strong>Témata, o kterých se mluví:</strong>
        </p>
        <ul>
          <li>
            <strong>Parkování</strong> – Věčné téma, každý má názor na modré zóny a parkovací karty
          </li>
          <li>
            <strong>Most</strong> – Nový most přes Berounku, dlouhodobě diskutované téma
          </li>
          <li>
            <strong>Obchvat</strong> – Plánovaný obchvat města, čekalo se na něj dlouho
          </li>
          <li>
            <strong>Výstavba</strong> – Kam postavit nové byty a jak nezničit město
          </li>
        </ul>
        <p>
          <strong>Tip:</strong> Tyto témata polarizují, neboj se mít svůj názor, ale buď připraven na diskusi
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={AlertCircle} title="Co tu lidi štve">
        <p>
          Kontext, ne názor:
        </p>
        <ul>
          <li>
            <strong>Doprava v centru</strong> – Hlavní silnice vede přes centrum, hodně aut, hluk
          </li>
          <li>
            <strong>Nedostatek parkovacích míst</strong> – Klasika malých měst, platí i tady
          </li>
          <li>
            <strong>Čekání na změny</strong> – Některé projekty trvají roky (obchvat, rekonstrukce)
          </li>
        </ul>
      </SectionWithIcon>
    </main>
  );
}
