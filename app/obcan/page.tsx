import { SectionWithIcon } from '../components/SectionWithIcon';
import { IdCard, Home, Trash2, Dog } from 'lucide-react';

export default function ZakladniVeciPage() {
  return (
    <main>
      <h1>Občan</h1>

      <p className="perex">
        Co zařídit s městem, když se přistěhuješ. 
      </p>

      <SectionWithIcon icon={IdCard} title="Občanka, pas, řidičák">
        <p>
          <strong>Kde:</strong> Městský úřad Beroun, budova v Tyršově ulici 1635 (budova Policie ČR), nikoliv na hlavní radnici. Zde se vyřizují občanské průkazy, cestovní pasy i řidičské průkazy.
        </p>
        <br />
        <p>
          <strong>Co potřebuješ:</strong> Platný doklad totožnosti (stávající občanku nebo pas, u první občanky rodný list). Fotografie se dnes u standardních dokladů pořizují digitálně přímo na místě, není třeba nosit vlastní papírové fotky.
        </p>
        <br />
        <p>
          <strong>Tip:</strong> Rozhodně využij on-line rezervační systém na webu města. Agendy v Tyršově ulici jsou vytížené a bez objednání můžeš čekat i několik hodin.
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Home} title="Trvalé bydliště">
        <p>
          <strong>Proč je to důležité:</strong> Bez trvalého bydliště v Berouně nemáš nárok na rezidentní parkovací kartu, nemůžeš zapsat dítě do spádové školky/školy a nemůžeš volit v místních volbách. Také ti město nemůže doručovat důležité úřední zásilky.
        </p>
        <br />
        <p>
          <strong>Kde přihlásit:</strong> Odbor správních agend, pracoviště Husovo náměstí 68 (radnice), přízemí – evidence obyvatel.
        </p>
        <br />
        <p>
          <strong>Co potřebuješ:</strong> Platný občanský průkaz a doklad o oprávnění užívat byt/dům (např. nájemní smlouva nebo výpis z katastru nemovitostí). Pokud nejsi majitelem, musí vlastník potvrdit souhlas přímo do přihlašovacího lístku (nebo přinést úředně ověřený souhlas). Správní poplatek je 50 Kč.
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Trash2} title="Odpady">
        <p>
          <strong>Kde se přihlásit:</strong> Ohlašovací povinnost lze vyřídit osobně na radnici (Husovo náměstí 68, kancelář C 103 v přízemí) nebo pohodlně on-line přes Portál občana města Beroun.
        </p>
        <br />
        <p>
          <strong>Kolik to stojí:</strong> 1 000 Kč na osobu za rok. Poplatek je splatný nejpozději do 30. září příslušného roku.
        </p>
        <br />
        <p>
          <strong>Kdo platí:</strong> Každá fyzická osoba s trvalým pobytem v Berouně nebo vlastník nemovitosti (bytu, domu, chaty), ve které není nikdo hlášen k trvalému pobytu.
        </p>
        <br />
        <p>
          <strong>Důležité:</strong> Poplatek se platí za osobu, nikoliv za nádobu. Děti a senioři mohou mít za určitých podmínek úlevy (nutno ověřit aktuální vyhlášku pro daný rok).
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Dog} title="Pes">
        <p>
          <strong>Kde přihlásit:</strong> Registrace se provádí na radnici (Husovo náměstí 68, kancelář C 103 v přízemí) do 15 dnů od pořízení psa (staršího 3 měsíců).
        </p>
        <br />
        <p>
          <strong>Kolik to stojí:</strong> V bytovém domě: 1 000 Kč za prvního psa, 1 500 Kč za každého dalšího. V rodinném domě: 400 Kč za každého psa. Senioři (nad 65 let): 200 Kč (byt) nebo 100 Kč (dům) za psa.
        </p>
        <br />
        <p>
          <strong>Kdo platí:</strong> Držitel psa (osoba, která má v Berouně trvalé bydliště).
        </p>
        <br />
        <p>
          <strong>Tip:</strong> Pokud si vezmeš psa z útulku (např. z berounského útulku v Bulovně), jsi v Berouně osvobozen od poplatku na dobu 3 let. Po registraci dostaneš pro psa známku.
        </p>
      </SectionWithIcon>
    </main>
  );
}
