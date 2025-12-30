import { SectionWithIcon } from '../components/SectionWithIcon';
import { BookOpen, Baby, Theater, CreditCard } from 'lucide-react';

export default function KnihovnaPage() {
  return (
    <main>
      <h1>Knihovna</h1>

      <p className="perex">
        Proč má samostatnou kapitolu? Protože berounská knihovna je skvělá a měl bys o ní vědět.
      </p>

      <SectionWithIcon icon={BookOpen} title="Co knihovna nabízí">
        <ul>
          <li>
            <strong>Půjčování knih</strong> – Klasika, ale s moderním katalogem a online rezervacemi
          </li>
          <li>
            <strong>E-knihy a audioknihy</strong> – Půjčuj si digitálně přes app, nemusíš chodit do knihovny
          </li>
          <li>
            <strong>Časopisy a noviny</strong> – Denní tisk, časopisy, čítárna
          </li>
          <li>
            <strong>Internet a tisk</strong> – Počítače k dispozici zdarma, tisk za 2 Kč/strana
          </li>
        </ul>
      </SectionWithIcon>

      <SectionWithIcon icon={Baby} title="Knihovna pro děti">
        <ul>
          <li>
            <strong>Dětské oddělení</strong> – Oddělená místnost s knihami pro děti, pohádky, deskové hry
          </li>
          <li>
            <strong>Čtení pro nejmenší</strong> – Pravidelná akce pro rodiče s dětmi, vyprávění pohádek
          </li>
          <li>
            <strong>Prázdninové akce</strong> – V létě knihovna pořádá akce pro děti (workshopy, hry)
          </li>
        </ul>
        <p>
          <strong>Tip:</strong> Děti do 15 let mají registraci zdarma
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={Theater} title="Akce a programy">
        <ul>
          <li>
            <strong>Přednášky a besedy</strong> – Pravidelně pořádá knihovna přednášky na různá témata
          </li>
          <li>
            <strong>Výstavy</strong> – V prostorách knihovny jsou pravidelně výstavy (fotografie, malby)
          </li>
          <li>
            <strong>Autorská čtení</strong> – Občas přijede zajímavý spisovatel
          </li>
        </ul>
        <p>
          <strong>Tip:</strong> Program knihovny najdeš na webu nebo na Facebooku
        </p>
      </SectionWithIcon>

      <SectionWithIcon icon={CreditCard} title="Jak se zaregistrovat">
        <p>
          <strong>Co potřebuješ:</strong> Doklad totožnosti
        </p>
        <p>
          <strong>Kolik to stojí:</strong> 100 Kč/rok (děti do 15 let zdarma)
        </p>
        <p>
          <strong>Kde:</strong> Městská knihovna Beroun, Husovo náměstí
        </p>
        <p>
          <strong>Tip:</strong> Registrace trvá 5 minut, hned si můžeš půjčit knihy
        </p>
      </SectionWithIcon>
    </main>
  );
}
