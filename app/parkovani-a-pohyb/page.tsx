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
          <strong>Co to je:</strong> Parkovací oprávnění pro obyvatele (rezidenty) a podnikatele (abonenty) v zónách I, II a III.
        </p>
        <br />
        <p>
          <strong>Kde ji získat:</strong> Vyřídíš ji na odboru dopravy (budova Pod Kaplankou 21) nebo pohodlněji online přes Portál občana Berouna.
        </p>
        <br />
        <p>
          <strong>Co potřebuješ:</strong> Trvalé bydliště v Berouně a vztah k vozidlu (techničák).
        </p>
        <br />
        <p>
          <strong>Kolik to stojí (za rok):</strong> 1. auto: 360 Kč, 2. auto: 2 500 Kč, 3. a každé další: 6 000 Kč
        </p>
        <br />
        <p>
          <strong>Tip:</strong> Pokud jsi podnikatel (abonent), zaplatíš za první auto 5 000 Kč (v centru na Husově náměstí je to ale 10 000 Kč).
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Car} title="Jak funguje parkování">
        <p>
          <strong>Centrum (Husovo náměstí):</strong> Tady se parkuje jen krátce. Stojí to 30 Kč za prvních 30 minut, každá další hodina je pak za "trestných" 100 Kč.
        </p>
        <br />
        <p>
          <strong>P+R (U nádraží a Na Podole):</strong> Nejlepší volba pro dojíždějící. Za celých 24 hodin zaplatíš jen 30 Kč.
        </p>
        <br />
        <p>
          <strong>Krátké pochůzky:</strong> Na Václavském náměstí je první hodina zdarma (pak 30 Kč/24h). U Medicentra nebo u knihovny (Kasárna) vyjde první hodina na 10 Kč.
        </p>
        <br />
        <p>
          <strong>Platba:</strong> Automaty nebo mobilní aplikace Easypark (u Boškova statku je přes mobilní platbu zvýhodněné jízdné pro rodiče sportovců za 5 Kč/hod).
        </p>
        <br />
        <p>
          <strong>Parkovací dům U Černého koně (městský):</strong>Hrnčířská 3 (u Wagnerova náměstí). Cena (platná od 1. 1. 2026): Pracovní dny: 40 Kč/hod (první 4 hodiny), nad 4 hodiny fixně 130 Kč/den. Noc (18:00–07:00): 50 Kč za celou noc. Víkendy a svátky: 20 Kč/hod.
        </p>
        <br />
        <p>
          <strong>Parkovací dům TIBA (soukromý):</strong> Kde: Areál bývalé Tiby (u Plzeňské ulice, naproti KD Plzeňka a ZŠ VIA). Využívá vlastní aplikaci "TIBA Parking".
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Bike} title="Kola a cyklostezky">
        <p>
          <strong>Sdílená kola:</strong> Nextbike má v Berouně silnou síť. Prvních 15 minut jízdy je zdarma, což na většinu cest po městě stačí.
        </p>
        <br />
        <p>
          <strong>Hlavní trasy:</strong> Cyklostezka podél Berounky (směr Karlštejn nebo Nižbor). V centru pozor na pěší zóny, jezděte se ohleduplně. Jízda po chodníku je zakázána.
        </p>
        <br />
        <p>
          <strong>Parkování kol:</strong> U vlakového nádraží je k dispozici cyklověž (bezpečné uložení kola v suchu). 
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Bus} title="MHD a vlaky">
        <p>
          V Berouně máš na výběr ze dvou hlavních vlakových tras:
        </p>
        <br />
        <p>
          <strong>1. Hlavní trať podél Berounky (přes Řevnice a Karlštejn):</strong> Rychlíky (linka R16): Nejrychlejší spojení. Na Smíchově jsi za 28–32 minut, na Hlavní nádraží za cca 40 minut. Jezdí každou hodinu, ve špičce i častěji. Osobní vlaky (linka S7): Zastavují v každé obci (Srbsko, Karlštejn...). Cesta na Smíchov trvá cca 43–47 minut. Jezdí každých 30 minut.
        </p>
        <br />
        <p>
          <strong>2. Trať přes Rudnou u Prahy (linka S6):</strong> Kdy ji využít: Ideální, pokud bydlíš v části Závodí, protože vlak zastavuje na zastávce Beroun-Závodí. Dojezdový čas: Je to výrazně pomalejší trasa (jednokolejka přes kopce). Cesta na Smíchov trvá 49–52 minut. Nové vlaky: Od prosince 2025/2026 jsou zde nasazeny nové bezbariérové jednotky (RegioFox).
        </p>
        <br />
        <p>
          <strong>Lítačka:</strong> Beroun je pásmo 4. Pokud máš pražský kupón (pásma P, 0, B), pro cestu do Berouna si musíš v aplikaci PID Lítačka aktivovat jízdenku pro 4 pásma (nebo mít nahraný příslušný kupon).
        </p>
        <br />
        <p>
          <strong>Cyklověž:</strong> Pokud jedeš k vlaku na kole, u nádraží je parkovací věž, kde je kolo v bezpečí a suchu.
        </p>
      </SectionWithIcon>
    </main>
  );
}
