import { SectionWithIcon } from '../components/SectionWithIcon';
import { ParkingCircle, Car, Bike, Bus, Train, MapPin, AlertCircle, Route, Moon, ClipboardList, Compass } from 'lucide-react';

export default function DopravaPage() {
  return (
    <main>
      <h1>Parkování & doprava</h1>

      <p className="perex">
        Velké téma. Parkování v Berouně je věda, ale dá se to zvládnout.
      </p>

      <SectionWithIcon icon={ParkingCircle} title="Parkovací karta">
        <p>
          <strong>Co to je:</strong> Parkovací oprávnění pro obyvatele (rezidenty) a podnikatele (abonenty) v zónách I, II a III.
        </p>
        <br />
        <p>
          <strong>Kde ji získat:</strong> Vyřídíš ji na odboru dopravy (budova Pod Kaplankou 21) nebo pohodlněji online přes <strong><a href="https://www.mesto-beroun.cz" target="_blank" rel="noopener noreferrer">Portál občana Berouna</a></strong>.
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
          <strong>Tip:</strong> Pokud jsi podnikatel, zaplatíš za první auto 5 000 Kč (v centru na Husově náměstí je to ale 10 000 Kč).
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

      <SectionWithIcon icon={Bus} title="Jízda po městě">
        <p>
          V Berouně je možné využít poměrně hustou autobusovou síť. Všechny linky jsou součástí Pražské integrované dopravy (PID). Pokud jezdíte často, vyplatí se koupit si předplatné na plastovou Lítačku, nebo jako Lítačku v mobilu.
        </p>
        <br />
        <p>
          Na jednotlivé jízdy lze koupit přestupní jízdenku právě přes aplikaci Lítačka za 24 Kč na 15 minut (nebo na delší dobu za vyšší cenu). Pořídit si lze jízdenku i přímo u řidiče, ale stojí o dvě koruny víc. Děti od šesti let, studenti a senioři od 65 let platí poloviční jízdné. Všechny berounské zastávky leží v pásmu 4 (některé současně i v pásmu 3, ale pro jízdu čistě po našem městě či Králově Dvoře vás to nemusí zajímat).
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={AlertCircle} title="Co vás může zmást?">
        <p>
          1) V Berouně a K. Dvoře existuje navíc ještě jedna jízdenka. Nepřestupní. Tu lze v autobusech koupit pouze u řidiče, stojí 20 Kč a lze s ní jet i více než 15 minut. Neexistuje její zlevněná verze. A neplatí ve vlaku.
        </p>
        <br />
        <p>
          2) Do autobusů začínajících číslem 6xx nebo 8xx lze nastoupit jen předními dveřmi a jízdenku, Lítačku, či QR kód v mobilní Lítačce ukazujete řidiči. U linek 380, 384 a 394 můžete nastoupit klidně i zadními dvěřmi, ale jen s platnou jízdenkou či předplatným.
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Route} title="Co jede kam?">
        <p>
          <strong>380</strong> - obchodní centrum Litava v K. Dvoře u dálnice D5, druhé obch centrum na pomezí Berouna a K. Dvora (Obi, Lidl atd.), Třídu Míru, ústřední zastávka v centru Berouna - U černého koně, Závodí (u žel. přejezdů - od Prahy "U Slavaše", do Prahy "Brožíkova"),Vráž, Loděnice, Rudná, Praha - Zličín (metro), Nemocnice Motol (metro), Vypich (tramvaj).
        </p>
        <br />
        <p>
          <strong>384</strong> - zrychlená linka do Prahy a z Prahy, která jede po Plzeňské ulici. Spojuje Lidl, sídliště, Plzeňku (kulturní dům), ústřední zastávku v centru Berouna - U černého koně, Závodí (u žel. přejezdů - od Prahy "U Slavaše", do Prahy "Brožíkova"). Zastavuje i ve Vráži a v Loděnici, pak pokračuje po dálnici na Zličín. Druhým směrem jede i kolem Lidlu do K. Dvora, některé spoje až do Hořovic. Samozřejmě je možné ji použít čistě jen pro jízdu naším městem.
        </p>
        <br />
        <p>
          <strong>394</strong> - expresní linka do Prahy a z Prahy. Městem jede stejně jako linka 384. Za Berounem jede na Prahu hned po dálnici - zastavuje na Stodůlkách u metra (pouze ranní spoje ve špičce) a končí u metra Nové Butovice. Na druhou stranu jede opět kolem Lidlu do K. Dvora, řada spojů pak i do Zdic.
          Samozřejmě je možné ji použít čistě jen pro jízdu naším městem.
        </p>
        <br />
        <p>
          <strong>825</strong> - zjednodušeně: linka do škol a do nemocnice. Jede z K. Dvora - Popovic, vybrané spoje obsluhují polikliniku v K. Dvoře, kolem Lidlu, po Třídě Míru až do centra Berouna a na Závodí. Končí u nemocnice, část spojů jede i do Hostími, Sv. Janu pod Skalou, Loděnice atd.
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={MapPin} title="Linky, které vás odvezou na nádraží. Ale můžete s nimi jet samozřejmě i jinam.">
        <p>
          <strong>861</strong> - mikrobusová (nejen) školní linka, která jede z nádraží na nádraží a přitom doslova vymete půlku města. Ráno zajede i na Jarov a Zavadilku a s výjimkou školy na Závodí obslouží de facto všechny školy a školky ve městě. Dopoledne v jednom směru, od poledních hodin jezdí trasu "obráceně" tak, aby nejen děti od škol přivezla zpátky. Použít lze také mj. pro cesty na nákup k Bille a Kauflandu nebo na poštu či hřbitov.
        </p>
        <br />
        <p>
          <strong>630</strong> - obsluhuje Závodí (mj. stavebniny, kemp), centrum Berouna a pokračuje přes aut. nádraží na Zavadilku a Jarov. Mimo Beroun se s ní dostanete až na Kladno.
        </p>
        <br />
        <p>
          <strong>631</strong> - obsluhuje Závodí (mj. stavebniny, kemp), centrum Berouna a pokračuje na nádraží. Obvykle pokračuje na sídliště, a pak do K.Dvora. Ideální pro cesty do Nižboru, Hýskova či např. obcí Suchomasty, Všeradice, Tmaň a Bykoš.
        </p>
        <br />
        <p>
          <strong>633</strong> - z nádraží do Tetína a Litně, nebo na druhou stranu přes centrum na Zdejcinu
        </p>
        <br />
        <p>
          <strong>637 a 638</strong> - v Berouně je využijete hlavně při cestách od K. Dvora  - obsluhuje mj. zastávky Lidl, sídliště, Delvita (u Billy, Kauflandu a blízko je i 2. ZŠ) a na nádraží. Vhodná i pro školáky - ve vybraných časech obsluhuje i centrum města (Wagnerovo náměstí, Hlinky). Z K. Dvora pokračují např. do obcí Hudlice, Nový Jáchymov, Broumy, Kublov, Svatá, Skryje, Branov. Za Beroun pak jedou přes Jarov vybrané spoje na Koněprusy, Liteň až do obce Řevnice či do Všeradic.
        </p>
        <br />
        <p>
          <strong>641</strong> - linka, která jede až k nemocnici v Hořovicích. Z berounského nádraží míří směr sídliště, Lidl, do K. Dvora, Zdic až právě do Hořovic vč. nemocnice. Opět vhodá i pro školáky -  vybrané spoje vedle zastávky Delvita (u Billy, Kauflandu a blízko je i 2. ZŠ) obsluhují navíc i Hlinky a zastavují též u Plzeňské brány (ZŠ Jungmannova) a před Plzeňkou.
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Moon} title="Noční linka">
        <p>
          <strong>952</strong> - Dlouhá směna, nebo jste se zdrželi třeba v divadle, kině či na večírku? Z Prahy od noční tramvaje (Sídliště Řepy) a ze Zličína jezdí v noci linka 952. Trasu má podobnou jako linka 380. V Berouně staví "u přejezdů" na Závodí, v centru "u černého koně" a jede přes Hlinky, na Velké sídliště. Nezastavuje na zastávce Třída Míru, ale až na zastávce Sídliště. Odtud pak jede přes Plzeňku a "U černého koně" zase do Prahy.
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Car} title="Jízda mimo město">
        <p>
          V autobusech i vlacích platí tarif PID. A to i v rychlících. Ideální je koupit jízdenku předem v aplikaci Lítačka, nebo mít pro pravidelné jízdy předplatné na Lítačce. Je jedno, jestli jedete autobusem, nebo vlakem. U okénka na nádraží jde pořídit jízdenku PID také - musíte si o ni ale obvykle aktivně říct. Pokud to neuděláte, obvykle vám prodají jízdenku dopravce (České dráhy,  či v automatu Arriva). Cena dopravců se oproti tarifům PID může (i výrazně) lišit. Záleží případ od případu. Nebojte se nechat si ceny porovnat.
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={ClipboardList} title="Na co si dát pozor">
        <p>
          Jestli ve vlaku využijete radši jízdenku PID, nebo daného dopravce. U busů platí jen tarif PID.
        </p>
        <br />
        <p>
          Na počet pásem, kterými s PID jízdenkou projíždíte, a současně na dobu platnosti jízdenky. Nebojte se, aplikace to pozná za vás - stačí zadat odkud kam jedete. Pokud máte na Lítačce nahraný tarif pro Prahu, dokupujete si jen vnější pásma za hranicí Prahy.
        </p>
        <br />
        <p>
          Že je u některých zastávek napsáno nejen pásmo 4, ve kterém Beroun leží, ale i pásmo 3? Je to třeba "U černého koně", nebo "U Slavaše" a "Brožíkova" na Závodí. Zjednodušeně to znamená, že třeba do Prahy/z Prahy je to sem o jedno pásmo levnější.
        </p>
        <br />
        <p>
          Cesta vlakem - jízdenka PID je obvykle výhodnější, než tarif Českých drah či vlaků Arrivy. Záleží však na konkrétní situaci. Navíc nemusíte u PID jízdenky řešit, jakého dopravce zvolíte. A nehrozí vám tak, že budete mít špatný lístek.
        </p>
        <br />
        <p>
          Jedete do Prahy až do centra (a nemáte předplatné pro Prahu)? Naklikejte si, nebo řekněte řidiči či u okénka na pokladně, že chcete jízdenku PID "včetně centra Prahy". Nemusíte po výstupu v Praze kupovat další jízdenku - a navíc ušetříte. Například z Berouna ze zastávky "U černého koně" to je 6 pásem, ze sídliště či třeba vlakem 7 pásem).
        </p>
        <br />
        <p>
          Pokud jedete jen na kraj Prahy (např. Zličín, N. Butovice, Radotín, Smích. nádraží), je jízdenka levnější, protože neplatíte za vnitřní Prahu (P) a někdy ani za pásmo 0. Aplikace vám to řekne. A řidič by měl taky.
        </p>
        <br />
        <p>
          Budete hodně přestupovat? Pohlídejte si pásma, která navštívíte a dobu platnosti. Vyplatí se většinou koupit jízdenku až do cíle, ne kupovat při každém přestupu. Aplikace vám cenu rovnou spočítá a při takovém nákupu obvykle nejde udělat chybu. Pokud jdete "přes řidiče" a nemáte jízdenku přes aplikaci, řekněte cílové místo. Měl by vám umět poradit a prodat správný lístek. Odpovědnost ale nesete vy.
        </p>
        <br />
        <p>
          Ve špičce si dejte větší rezervu na přestup mezi spoji. Ráno bývají zácpy a zpoždění v Berouně i na D5. Pokud vám přípoj ujede, mohlo by se stát, že vám propadne čas platnosti jízdenky. Pokud jste ale ve zpožděném spoji a čas vypršel, nebojte se, zásadní je doba jízdy podle jízdního řádu.
        </p>
        <br />
        <p>
          Když nastupujete -  a nekupujete jízdenku u řidiče - je potřeba mít jízdenku v aplikaci aktivovanou.
        </p>
        <br />
        <p>
          Pokud máte předplatné např. pro "berounské" pásmo 4 (ti, kteří jezdí po městě NHD často) a jedete kupříkladu nárazově do Prahy, tak si stačí aktivovat jen pásma 3,2,1, B (případně 0 a P) a nastavit na čas, kdy autobus opouští podle jízdního řádu zastávku Brožíkova. Podobně  to platí, když vyrazíte za hranice "našeho" pásma i do dalších směrů.
        </p>
        <br />
        <p>
          Využít lze i celodenní jízdenky nebo třeba rodinné.
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Train} title="Vlaky">
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
      </SectionWithIcon>
    </main>
  );
}
