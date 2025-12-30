import { SectionWithIcon } from '../components/SectionWithIcon';
import { Globe, Building2, Wrench, Users } from 'lucide-react';

export default function JakFungujeMestoPage() {
  return (
    <main>
      <h1>Jak město komunikuje</h1>

      <p className="perex">
        Orientace v systému, ne politika. Kam se obrátit, když něco potřebuješ.
      </p>

      <SectionWithIcon icon={Globe} title="Web a Munipolis">
        <p>
          <strong>Web města:</strong> www.muberoun.cz – oficiální informace, úřední hodiny, kontakty
        </p>
        <p>
          <strong>Munipolis:</strong> Hlavní komunikační platforma města – tady se dozvíš, co se v Berouně děje, můžeš hlásit problémy a získat parkovací kartu
        </p>
        <p>
          <strong>Tip:</strong> Stáhni si Munipolis do mobilu, je to rychlejší než chodit na úřad
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Building2} title="Zastupitelstvo a rada">
        <p>
          <strong>Zastupitelstvo:</strong> 27 zastupitelů, volí se každé 4 roky, rozhoduje o důležitých věcech (rozpočet, majetek města)
        </p>
        <p>
          <strong>Rada:</strong> 9 radních, volí je zastupitelstvo, řeší běžný chod města
        </p>
        <p>
          <strong>Starosta:</strong> Tomáš Bezouška (KDU-ČSL)
        </p>
        <p>
          <strong>Zasedání zastupitelstva:</strong> Jednou za měsíc, můžeš přijít, jsou veřejná
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Wrench} title="Kam hlásit poruchy">
        <p>
          <strong>Munipolis:</strong> Funguje jako celoměstský "bug tracker" – můžeš hlásit díry v cestách, nefunkční lampy, problém s odpadem
        </p>
        <p>
          <strong>Dotazy občanů:</strong> Email nebo osobně na podatelně radnice – když potřebuješ oficíální odpověď
        </p>
        <p>
          <strong>Havárie:</strong> Voda, plyn, elektřina – kontakty na web města nebo volej přímo distributorovi
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Users} title="Kdo je kdo">
        <p>
          <strong>Starosta:</strong> Hlavní šéf města, reprezentuje město navenek
        </p>
        <p>
          <strong>Místostarosta:</strong> Zastupuje starostu, má na starosti konkrétní agendy
        </p>
        <p>
          <strong>Tajemník:</strong> Šéf úřadu, řídí úředníky
        </p>
        <p>
          <strong>Tip:</strong> Na webu města najdeš kompletní seznam zastupitelů a radních s kontakty
        </p>
      </SectionWithIcon>
    </main>
  );
}
