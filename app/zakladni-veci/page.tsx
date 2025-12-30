import { SectionWithIcon } from '../components/SectionWithIcon';
import { IdCard, Home, Trash2, Dog } from 'lucide-react';

export default function ZakladniVeciPage() {
  return (
    <main>
      <h1>Základní věci</h1>

      <p className="perex">
        Co zařídit s městem, když se přestěhuješ. Oficiální, ale ne státní onboarding.
      </p>

      <SectionWithIcon icon={IdCard} title="Občanka, pas, řidičák">
        <p>
          <strong>Kde:</strong> Czech POINT na radnici Beroun, Husovo náměstí 68
        </p>
        <p>
          <strong>Co potřebuješ:</strong> Platný doklad totožnosti, dvě fotky
        </p>
        <p>
          <strong>Tip:</strong> Objednání předem přes web města ti ušetří čekání
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Home} title="Trvalé bydliště">
        <p>
          <strong>Proč je to důležité:</strong> Bez trvalého bydliště v Berouně nedostaneš parkovací kartu, nemůžeš zapsat děti do místní školky a při volbách budeš muset jezdit jinam
        </p>
        <p>
          <strong>Kde přihlásit:</strong> Odbor evidence obyvatel, radnice Beroun
        </p>
        <p>
          <strong>Co potřebuješ:</strong> Souhlas majitele bytu/domu, doklad totožnosti
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Trash2} title="Odpady">
        <p>
          <strong>Kde se přihlásit:</strong> Online přes web města nebo osobně na technických službách
        </p>
        <p>
          <strong>Kolik to stojí:</strong> Cca 600-800 Kč/rok na osobu (záleží na velikosti domácnosti)
        </p>
        <p>
          <strong>Kdo platí:</strong> Majitel nemovitosti nebo nájemce (záleží na dohodě)
        </p>
        <p>
          <strong>Důležité:</strong> Platí se poplatek za každého člena domácnosti s trvalým bydlištěm
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Dog} title="Pes">
        <p>
          <strong>Kde přihlásit:</strong> Odbor životního prostředí, radnice
        </p>
        <p>
          <strong>Kolik to stojí:</strong> 200 Kč/rok za prvního psa, 300 Kč za každého dalšího
        </p>
        <p>
          <strong>Kdo platí:</strong> Majitel psa
        </p>
        <p>
          <strong>Tip:</strong> Pokud máš psa ze záchranné stanice, poplatek neplatíš
        </p>
      </SectionWithIcon>
    </main>
  );
}
