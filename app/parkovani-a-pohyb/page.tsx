import { SectionWithIcon } from '../components/SectionWithIcon';
import { ParkingCircle, Car, Bike, Bus } from 'lucide-react';

export default function ParkovaniAPohybPage() {
  return (
    <main>
      <h1>Parkování & pohyb</h1>

      <p className="perex">
        Velké téma. Parkování v Berouně je věda, ale dá se to zvládnout.
      </p>

      <SectionWithIcon icon={ParkingCircle} title="Parkovací karta">
        <p>
          <strong>Co to je:</strong> Karta, která ti umožní parkovat v modrých zónách (kde jinak platíš nebo máš časový limit)
        </p>
        <p>
          <strong>Kde ji získat:</strong> Online přes Munipolis nebo osobně na odboru dopravy
        </p>
        <p>
          <strong>Co potřebuješ:</strong> Trvalé bydliště v Berouně, technický průkaz auta
        </p>
        <p>
          <strong>Kolik to stojí:</strong> 500 Kč/rok za první auto, 1000 Kč za druhé
        </p>
        <p>
          <strong>Důležité:</strong> Karta platí jen pro zónu tvé adresy bydliště
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Car} title="Jak funguje parkování">
        <p>
          <strong>Modré zóny:</strong> S parkovací kartou parkuješ zdarma, bez karty platíš nebo máš časový limit (typicky 2 hodiny)
        </p>
        <p>
          <strong>Parkovací domy:</strong> Mají několik hodin zdarma, pak se platí (ideální když jdeš na nákup)
        </p>
        <p>
          <strong>Placená parkoviště:</strong> U nádraží, u Lidlu, na Plácku – platba přes automat nebo SMS
        </p>
        <p>
          <strong>Tip:</strong> Mapa modrých zón je na webu města, stáhni si ji do mobilu
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Bike} title="Kola a cyklostezky">
        <p>
          <strong>Sdílená kola:</strong> V Berouně fungují Nextbike – app v mobilu, první hodina zdarma
        </p>
        <p>
          <strong>Cyklostezky:</strong> Berounka Trail je hlavní trasa podél řeky, dojdeš až do Prahy
        </p>
        <p>
          <strong>Pravidla:</strong> Na cyklostezce nesmíš jezdit na elektrokoloběžce (ano, vážně)
        </p>
        <p>
          <strong>Tip:</strong> V létě je cyklostezka plná rodin s dětmi, jezdi raději ráno nebo večer
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Bus} title="MHD a vlaky">
        <p>
          <strong>Autobusy:</strong> Městská doprava má několik linek, jízdní řády na webu DPB
        </p>
        <p>
          <strong>Vlaky:</strong> Z Berouna jezdí vlaky do Prahy každou půlhodinu, cesta trvá cca 40 minut
        </p>
        <p>
          <strong>Tip:</strong> Lítačka platí i v Berouně (zóna 4)
        </p>
      </SectionWithIcon>
    </main>
  );
}
