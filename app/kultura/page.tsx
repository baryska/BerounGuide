import { SectionWithIcon } from '../components/SectionWithIcon';
import { Film, Music, PartyPopper, Palette } from 'lucide-react';

export default function KulturaPage() {
  return (
    <main>
      <h1>Kultura</h1>

      <p className="perex">
        Co dělat večer a o víkendu. Instituce i neformální místa.
      </p>

      <SectionWithIcon icon={Film} title="Kulturní instituce">
        <ul>
          <li>
            <strong>Městské kulturní centrum (MKC)</strong> – Pořádá koncerty, divadla, výstavy, přednášky
          </li>
          <li>
            <strong>Muzeum</strong> – Místní historie, občas zajímavé výstavy
          </li>
          <li>
            <strong>Plzeňka</strong> – Kino a kulturní centrum, nové filmy i artové projekce
          </li>
        </ul>
        <p>
          <strong>Tip:</strong> Program MKC a Plzeňky sleduj na Facebooku nebo webu, lístky kup včas
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Music} title="Hudba a koncerty">
        <ul>
          <li>
            <strong>Sál na Wagnerově náměstí</strong> – Velká kulturní akce, koncerty klasické hudby, moderní muzikály
          </li>
          <li>
            <strong>Jazz na Zavadilce</strong> – Jazzové večery v komorní atmosféře, pravidelně každý měsíc
          </li>
          <li>
            <strong>U Krobiána</strong> – Alternativní scéna, punk, rock, lokální kapely
          </li>
        </ul>
        <p>
          <strong>Tip:</strong> Jazz na Zavadilce bývá vyprodaný, rezervuj si místo
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={PartyPopper} title="Pravidelné akce">
        <p>
          <strong>Co se v Berouně opakuje:</strong>
        </p>
        <ul>
          <li>
            <strong>Závodí fest</strong> – Červen, hudební festival na louce u řeky, skvělá atmosféra
          </li>
          <li>
            <strong>Hradby</strong> – Srpen, historický festival na hradbách města
          </li>
          <li>
            <strong>Dračí lodě</strong> – Září, závody dračích lodí na Berounce
          </li>
          <li>
            <strong>Vánoční trhy</strong> – Prosinec, na Husově náměstí
          </li>
        </ul>
        <p>
          <strong>Tip:</strong> Závodí fest je oblíbený, přijď brzy ráno zarezervovat místo na dece
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Palette} title="Galerie a výstavy">
        <ul>
          <li>
            <strong>Galerie v knihovně</strong> – Pravidelně střídané výstavy, fotografie, malby
          </li>
          <li>
            <strong>Městské muzeum</strong> – Stálá expozice i dočasné výstavy
          </li>
        </ul>
      </SectionWithIcon>
    </main>
  );
}
