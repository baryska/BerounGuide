import { SectionWithIcon } from '../components/SectionWithIcon';
import { Coffee } from 'lucide-react';

export default function JidloAObchodyPage() {
  return (
    <main>
      <h1>Jídlo a obchody</h1>

      <p className="perex">
        Kde jíst, pít dobrou kávu a nakupovat. Tipy od místních.
      </p>

      <SectionWithIcon icon={Coffee} title="Kavárny">
        <ul>
          <li>
            <strong>Budka café</strong> – větší kavárna, pobočky v BE i KD
          </li>
          <li>
            <strong>Kavárna mezi dvorky</strong> – malá, komorní kavárna, klidné prostředí
          </li>
          <li>
            <strong>Da Italia (Česká ulice)</strong> – menší kavárna, součást italského konceptu
          </li>
          <li>
            <strong>Bonte (Pražská brána)</strong> – větší kavárna, vlastní výroba dortů, v létě široký výběr domácí zmrzliny
          </li>
          <li>
            <strong>Cafe &amp; Wine Český dvůr</strong> – přímo na náměstí, vedle stejnojmenné restaurace, kombinace kavárny a vinárny
          </li>
          <li>
            <strong>Šťastná koza (náměstí)</strong> – zaměření na zdravější receptury, dorty a koláče
          </li>
          <li>
            <strong>Cukrárna u sv. Jakuba</strong> – velmi malá cukrárna, klasický lokální podnik
          </li>
          <li>
            <strong>Cafe Květiny (Kostelní ulice)</strong> – malá kavárna, součást květinářství
          </li>
          <li>
            <strong>CafeMi (Wagnerovo náměstí)</strong> – kavárna na centrálním náměstí
          </li>
          <li>
            <strong>Bistro Kafejn</strong> – kavárna / bistro
          </li>
          <li>
            <strong>Bistro u Sýkorky</strong> – nově otevřené bistro, celodenní brunch, vlastní pečení koláčů
          </li>
        </ul>
      </SectionWithIcon>

    </main>
  );
}
