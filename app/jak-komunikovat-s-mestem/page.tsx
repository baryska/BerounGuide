import { SectionWithIcon } from '../components/SectionWithIcon';
import { Globe, Building2, Wrench, Users } from 'lucide-react';

export default function JakFungujeMestoPage() {
  return (
    <main>
      <h1>Jak komunikovat s městem</h1>

      <p className="perex">
        Orientace v systému, ne politika. Kam se obrátit, když něco potřebuješ.
      </p>

      <SectionWithIcon icon={Globe} title="Web a Munipolis">
        <p>
          <strong>Web města:</strong> <strong><a href="https://www.mesto-beroun.cz" target="_blank" rel="noopener noreferrer">www.mesto-beroun.cz</a></strong> – oficiální informace, úřední deska, úřední hodiny, kontakty. Obrňte se trpělivostí, web je nepřehledný a je velmi těžké tam cokoliv najít. Chyba není na vašem přijímači.
        </p>
        <br />
        <p>
          <strong>Munipolis:</strong> <strong><a href="https://beroun.munipolis.cz" target="_blank" rel="noopener noreferrer">beroun.munipolis.cz</a></strong> – Pokud se vám nechce dobrovolně bloudit v hlubinách městského webu, tohle je vaše „zkratka“ k informacím. Munipolis (dříve Mobilní rozhlas) funguje jako přímá linka mezi radnicí a vaším telefonem. Po registraci (která je zdarma) vám budou chodit upozornění na uzavírky, havárie vody nebo pozvánky na akce rovnou do mailu nebo aplikace, takže nemusíte nic sami lovit. Velkou vychytávkou je modul „Závady a podněty“ – když někde v Berouně narazíte na nesvítící lampu, černou skládku nebo díru v chodníku, prostě to přes aplikaci vyfotíte a ono se to s GPS souřadnicemi pošle rovnou těm, kdo to mají na starosti. Ideální pro ty, kdo chtějí být stále v obraze.
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Building2} title="Zastupitelstvo a rada">
        <p>
          Když vás něco trápí nebo se chcete na něco zeptat, nebojte se obrátit se na vaše volené zástupce.
          Berounská radnice funguje na klasickém principu „vlády a parlamentu“. Stává se i to, co znáte z velké politiky: ne vždy ten, kdo vyhraje volby, nakonec vládne. To se stalo i po posledních volbách, kdy zvítězilo sdružení nezávislých kandidátů Beroun sobě, ale i tak skončilo v opozici.
        </p>
        <br />
        <p>
          <strong>Zastupitelstvo:</strong> To je ten nejvyšší orgán, takový náš lokální parlament. Má 21 členů a schvaluje ty nejzásadnější věci, jako je rozpočet nebo územní plán. Zasedání jsou veřejná a konají se zhruba každé tři měsíce (většinou ve středu od 15:00). Pokud chcete vidět politiku v přímém přenosu, vyrazte do Kulturního domu Plzeňka. Termíny a program jsou k nalezení na <strong><a href="https://www.mesto-beroun.cz/mesto-a-urad/rada-a-zastupitelstvo-mesta/" target="_blank" rel="noopener noreferrer">na webu města</a></strong>.
        </p>
        <br />
        <p>
          <strong>Rada města:</strong> Užší vedení, berounská vláda - máme 7 radních. Ti se scházejí jednou za dva týdny a řeší běžný provoz města. Jejich schůze jsou sice uzavřené, ale výsledky (usnesení) si můžete zpětně dohledat <strong><a href="https://www.mesto-beroun.cz/mesto-a-urad/rada-a-zastupitelstvo-mesta/usneseni/" target="_blank" rel="noopener noreferrer">na webu města</a></strong>.
        </p>
        <br />
        <p>
          <strong>Kdo stojí v čele (koalice):</strong>
        </p>
        <p>
          Aktuálně město vede koalice složená z ODS, ANO a Nezávislých Berouňáků.
        </p>
        <br />
        <p>
          <strong>Starostka:</strong> Soňa Chalupová (ODS) 
        </p>
        <br />
        <p>
          <strong>Místostarostové:</strong> Michal Mišina (ANO) a Dušan Tomčo (Nezávislí Berouňáci)
        </p>
        <br />
        <p>
          <strong>Politické barvy v zastupitelstvu:</strong>
        </p>
        <p>
          V berounských lavicích sedí zástupci celkem 7 subjektů. Aby v tom byl pořádek, tady je seznam:
        </p>
        <ul>
          <li>ODS (v koalici)</li>
          <li>Nezávislí Berouňáci (v koalici)</li>
          <li>ANO 2011 (v koalici)</li>
          <li>Beroun sobě - v opozici</li>
          <li>Společně pro Beroun (STAN, TOP 09, KDU-ČSL) – v opozici</li>
          <li>Lepší Beroun (Svobodní) – v opozici</li>
          <li>Lidé pro Beroun (SPD, Trikolóra) - v opozici</li>
        </ul>
        <br />
        <p>
          <strong>Tip:</strong> Pokud se v tom chcete opravdu „povrtat“ a vědět, kdo pro co hlasoval, město z každého zastupitelstva zveřejňuje <strong><a href="https://www.mesto-beroun.cz/mesto-a-urad/rada-a-zastupitelstvo-mesta/videoprenosy/archiv/" target="_blank" rel="noopener noreferrer">videozáznamy</a></strong>. Je to ideální kulisa k žehlení nebo vaření. Když si to pustíte, rychle pochopíte, že vztahy mezi opozicí a vládnoucí koalicí bývají občas docela napjaté. Pro nově přistěhovalé je to nejlepší způsob, jak se rychle zorientovat v tom, co město pálí.

        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Wrench} title="Kam hlásit poruchy">
        <p>
          Nevyvezli vám popelnice, štve vás rozbitá lavička nebo špatné dopravní značení? Málo se to ví, ale existuje několik kanálů, kterými můžete na město snadno nahlásit nějakou závadu, problém nebo návrhy na zlepšení:
        </p>
        <br />
        <p>
          <strong>Munipolis:</strong> Své podněty můžete hlásit přes Munipolis, je to snadné a rychlé a dostanete informaci o tom, jak s vaším podnětem město <strong><a href="https://mesto-beroun.munipolis.cz/vypis-podnetu-a-zavad" target="_blank" rel="noopener noreferrer">naložilo</a></strong>.
        </p>
        <br />
        <p>
          <strong>Podněty na webu města:</strong> Podobně funguje <strong><a href="https://www.mesto-beroun.cz/pro-obcany/dotazy-obcanu/" target="_blank" rel="noopener noreferrer">stránka podnětů</a></strong> na webu města, zde můžete klást i jakékoliv dotazy, které na vedení města nebo úřad máte.
        </p>
        <br />
        <p>
          <strong>Vybrané odpovědi:</strong> Vybrané odpovědi pak město <strong><a href="https://www.mesto-beroun.cz/pro-obcany/dotazy-obcanu/odpovedi/" target="_blank" rel="noopener noreferrer">zveřejňuje</a></strong>.
        </p>
        <br />
        <p>
          <strong>Odvoz odpadu, úklid, seč:</strong> Problém s vyvážením popelnic, odklízením sněhu, sečením trávy apod. můžete hlásit na <strong><a href="mailto:beroun@ave.cz">beroun@ave.cz</a></strong>, pokud je záležitost urgentní, volejte na následující čísla: 311 548 210, 311 548 200.
        </p>
        <br />
        <p>
          <strong>Veřejné osvětlení:</strong> Nefunkční veřejné osvětlení můžete hlásit na nonstop telefonní lince 259 259 266. Je vhodné oznámit číslo sloupu veřejného osvětlení, pokud je samozřejmě na příslušné lampě tento údaj umístěn. Majitelé chytrých telefonů si mohou načíst QR kód uvedený na štítku na sloupu veřejného osvětlení a prostřednictvím aplikace nahlásit problém.
        </p>
      </SectionWithIcon>
    </main>
  );
}
