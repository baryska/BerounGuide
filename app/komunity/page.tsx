import { SectionWithIcon } from '../components/SectionWithIcon';
import { Sprout, Smartphone, Newspaper, Handshake } from 'lucide-react';

export default function KomunityPage() {
  return (
    <main>
      <h1>Komunity</h1>

      <p className="perex">
        Koho sledovat, když chceš být v obraze. Spolky, iniciativy a Facebook skupiny.
      </p>

      <SectionWithIcon icon={Sprout} title="Aktivní spolky">
        <ul>
          <li>
            <strong>Berounská zeleň</strong> – Komunita, která se stará o veřejný prostor a zeleň ve městě, pravidelné akce (sázení stromů, úklidy)
          </li>
          <li>
            <strong>Berounský rybníček</strong> – Iniciativa pro obnovu rybníčka v centru města, sleduj jejich FB
          </li>
          <li>
            <strong>Skaut Beroun</strong> – Tradiční skautský oddíl, akce pro děti i dospělé
          </li>
        </ul>
        <p>
          <strong>Tip:</strong> Pokud chceš pomoci městu, zapoj se do některé z těchto iniciativ
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Smartphone} title="Facebook skupiny">
        <p>
          <strong>Kde se dozvíš, co se děje:</strong>
        </p>
        <ul>
          <li>
            <strong>Berounsko – Beroun a okolí</strong> – Hlavní skupina pro diskuse o dění v Berouně, dotazy, tipy
          </li>
          <li>
            <strong>Beroun – prodám, koupím, vyměním</strong> – Místní bazar, spolehlivější než celostátní skupiny
          </li>
          <li>
            <strong>Rodiče Beroun</strong> – Skupina pro rodiče s dětmi, tipy na kroužky, školy, akce
          </li>
          <li>
            <strong>Berounští pejskaři</strong> – Komunita majitelů psů, tipy na venčení, veterináře
          </li>
        </ul>
        <p>
          <strong>Tip:</strong> V těchto skupinách se dozvíš víc než z oficiálních kanálů
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Newspaper} title="Lokální média">
        <ul>
          <li>
            <strong>Berounský deník</strong> – Lokální noviny, online i tištěné, spolehlivý zdroj informací
          </li>
          <li>
            <strong>Web města</strong> – Oficiální informace, události, usnesení zastupitelstva
          </li>
          <li>
            <strong>Munipolis</strong> – Appka pro komunikaci s městem, upozornění na akce
          </li>
        </ul>
      </SectionWithIcon>

      <SectionWithIcon icon={Handshake} title="Jak se zapojit">
        <p>
          <strong>Co můžeš dělat:</strong>
        </p>
        <ul>
          <li>
            <strong>Choď na akce spolků</strong> – Berounská zeleň pravidelně pořádá brigády, přijď pomoct
          </li>
          <li>
            <strong>Sleduj FB skupiny</strong> – Budeš v obraze, co se děje a kde potřebují pomoc
          </li>
          <li>
            <strong>Navrhni projekt</strong> – Město má participativní rozpočet, můžeš navrhnout projekt pro zlepšení města
          </li>
          <li>
            <strong>Choď na zastupitelstvo</strong> – Zasedání jsou veřejná, můžeš vidět, jak se rozhoduje
          </li>
        </ul>
        <p>
          <strong>Tip:</strong> V Berouně je přátelská atmosféra, neboj se oslovit lidi a zapojit se
        </p>
      </SectionWithIcon>
    </main>
  );
}
