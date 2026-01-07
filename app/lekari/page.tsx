import { SectionWithIcon } from '../components/SectionWithIcon';
import { Stethoscope, Baby, Laugh, Hospital, Building2 } from 'lucide-react';

export default function LekariPage() {
  return (
    <main>
      <h1>Lékaři & zdravotnická zařízení</h1>

      <p className="perex">
        Přehled zdravotnických služeb v Berouně. Praktičtí lékaři, specialisté a nemocnice.
      </p>

      <SectionWithIcon icon={Stethoscope} title="Praktičtí lékaři">
        <p>
          <strong>Praktický lékař pro dospělé:</strong>
        </p>
        <ul>
          <li>
            V Berouně je více soukromých ordinací, většina má plnou kapacitu pacientů
          </li>
          <li>
            Najdi si lékaře co nejdříve po příchodu – čekací doby na nové pacienty jsou často dlouhé
          </li>
          <li>
            Doporučuje se telefonovat a ptát se na volnou kapacitu
          </li>
        </ul>
        <p>
          <strong>Tip:</strong> Seznam lékařů najdeš na webu <a href="https://www.znamylekar.cz" target="_blank" rel="noopener noreferrer">ZnámýLékař.cz</a> nebo na stránkách města
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Baby} title="Pediatři">
        <p>
          <strong>Dětský lékař:</strong>
        </p>
        <ul>
          <li>
            Většina pediatrů má také plné kapacity
          </li>
          <li>
            Zařiď si pediatra ještě před narozením dítěte nebo co nejdříve po příchodu do města
          </li>
          <li>
            Některé ordinace mají čekací listiny na nové pacienty
          </li>
        </ul>
        <p>
          <strong>Pohotovost:</strong> Dětská pohotovost je v nemocnici Beroun, v provozu 24/7
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Laugh} title="Zubaři">
        <p>
          <strong>Zubní ordinace:</strong>
        </p>
        <ul>
          <li>
            V Berouně je několik zubních ordinací, kapacity jsou variabilní
          </li>
          <li>
            Doporučuje se registrovat u zubaře co nejdříve
          </li>
          <li>
            Některé ordinace nabízejí akutní ošetření i pro neregistrované pacienty
          </li>
        </ul>
        <p>
          <strong>Pohotovost:</strong> Stomatologická pohotovost funguje o víkendech a svátcích – sleduj web města nebo volej nemocnici
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Hospital} title="Medicentrum Beroun">
        <p>
          <strong>Poliklinika:</strong>
        </p>
        <ul>
          <li>
            Velké zdravotnické centrum v centru města – Tyršova ulice
          </li>
          <li>
            Najdeš zde řadu specialistů: gynekologie, ortopedi, ORL, oční, kožní, neurologie
          </li>
          <li>
            Laboratoře a odběrové místo – objednej se předem
          </li>
          <li>
            Většina ordinací vyžaduje objednání dopředu
          </li>
        </ul>
        <p>
          <strong>Tip:</strong> Na Medicentrum se můžeš objednat online přes jejich web nebo telefonicky
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Building2} title="Nemocnice Beroun">
        <p>
          <strong>Oblastní nemocnice:</strong>
        </p>
        <ul>
          <li>
            Moderní nemocnice na okraji města – ulice Dr. Roberta Záruby
          </li>
          <li>
            Pohotovost: interní, chirurgická, dětská – v provozu 24/7
          </li>
          <li>
            Ambulance: chirurgie, ortopedie, interna, gynekologie, ARO
          </li>
          <li>
            Parkoviště: placené u nemocnice, zdarma na parkovišti u hlavní silnice
          </li>
        </ul>
        <p>
          <strong>Pohotovost:</strong>
        </p>
        <ul>
          <li><strong>Dospělí:</strong> Lékařská pohotovost pro dospělé Po–Pá 16:00–22:00, So–Ne a svátky 8:00–20:00</li>
          <li><strong>Děti:</strong> Dětská pohotovost 24/7</li>
        </ul>
        <p>
          <strong>Kontakt:</strong> Tel.: 311 622 111 (ústředna)
        </p>
      </SectionWithIcon>
    </main>
  );
}
