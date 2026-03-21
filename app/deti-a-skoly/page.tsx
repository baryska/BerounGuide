import { SectionWithIcon } from '../components/SectionWithIcon';
import { Box } from '../components/Box';
import { BackToTop } from '../components/BackToTop';
import { Baby, School, Building2, Trophy } from 'lucide-react';

function SchoolCard({
  type,
  title,
  desc,
  director,
  web,
  address,
  badge,
}: {
  type: string;
  title: string;
  desc: string;
  director?: string;
  web?: string | string[];
  address?: string;
  badge?: string;
}) {
  return (
    <article className="school-card">
      {badge && <span className="school-card-badge">{badge}</span>}
      <span className="school-card-type">{type}</span>
      <h3>{title}</h3>
      <p className="school-card-desc">{desc}</p>
      <div className="school-card-meta">
        {director && (
          <div className="school-card-meta-item">
            <span className="school-card-meta-icon" role="img" aria-hidden>👤</span>
            <span><span className="school-card-meta-label">Ředitel/ka:</span> {director}</span>
          </div>
        )}
        {address && (
          <div className="school-card-meta-item">
            <span className="school-card-meta-icon" role="img" aria-hidden>📍</span>
            <span>{address}</span>
          </div>
        )}
        {web && (
          <div className="school-card-meta-item">
            <span className="school-card-meta-icon" role="img" aria-hidden>🌐</span>
            <span>
              {Array.isArray(web) ? (
                web.map((url, i) => (
                  <span key={url}>
                    {i > 0 && ' · '}
                    <a href={`https://${url.replace(/^https?:\/\//, '')}`} target="_blank" rel="noopener noreferrer">
                      {url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                  </span>
                ))
              ) : typeof web === 'string' && !web.startsWith('není') ? (
                <a href={`https://${web.replace(/^https?:\/\//, '')}`} target="_blank" rel="noopener noreferrer">
                  {web.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </a>
              ) : (
                <><span className="school-card-meta-label">Web: </span>{web}</>
              )}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

export default function DetiASkolyPage() {
  return (
    <main>
      <h1>Školy v Berouně</h1>

      <p className="perex">
        Mateřské a základní školy – přehled 2025/26. Státní, soukromé i církevní.
      </p>

      <SectionWithIcon icon={Baby} title="Mateřské školy (státní / obecní)">
        <div className="schools-grid">
          <SchoolCard
            type="MŠ"
            title="MŠ Beroun, Tovární 44"
            desc="Menší komunitní školka v blízkosti centra. Tři třídy (Koťata, Medvědi, Sluníčka), provoz 6:30–16:30. Příjemné prostředí s důrazem na pravidelný řád a sezónní témata."
            director="Bc. Gabriela Hirnerová"
            web="www.mstovarni.cz"
          />
          <SchoolCard
            type="MŠ"
            title="MŠ Sluníčko Beroun"
            desc="Dvě budovy – hlavní na Vančury (4 třídy, 103 dětí) a odloučené pracoviště v Husově ul. na Zavadilce (2 třídy, 42 dětí). Kapacita celkem 145 dětí, provoz 6:30–17:00. Pravidelné atletické závody i kulturní akce."
            director="Dagmar Fuksová"
            web="ms-slunicko-beroun.cz"
          />
          <SchoolCard
            type="MŠ"
            title="MŠ Beroun, Drašarova 1447"
            desc="Školka v klidné lokalitě Hlinek. Odloučené pracoviště v Bezručově ulici. Vzdělávací program ‚Po celý rok … poznáváme svět kolem sebe'. Provoz 6:30–17:00."
            director="Bc. et Bc. Marcela Dlouhá"
            web="www.duhovaskolkaberoun.cz"
          />
          <SchoolCard
            type="MŠ"
            title="MŠ Pod Homolkou 1601, Beroun"
            desc="Větší školka s kapacitou 165 dětí, s odloučeným pracovištěm ve Vrchlického ul. Nabízí výuku angličtiny, zobcovou flétnu, klavír, pohybový, pěvecký a výtvarný kroužek. Divadla a výlety v přírodě."
            director="Jitka Marešová"
            web="www.mspodhomolkou.cz"
          />
          <SchoolCard
            type="MŠ speciální"
            title="Dětský domov a MŠ Beroun, Mládeže 1102"
            desc="Speciální mateřská škola součástí komplexního zařízení, které zahrnuje i dětský domov a SPC (speciálně pedagogické centrum). Zaměřena na děti se speciálními vzdělávacími potřebami."
            director="Mgr. Jana Müllerová"
            web="www.ddmsberoun.cz"
          />
        </div>
      </SectionWithIcon>

      <SectionWithIcon icon={Building2} title="Mateřské školy (soukromé / církevní)">
        <div className="schools-grid">
          <SchoolCard
            type="MŠ + ZŠ · soukromá"
            title="VIA Beroun – MŠ a ZŠ, Na Dražkách 2142"
            desc="Moderní soukromá česko-anglická škola zřízená v roce 2020 pod záštitou Nadace Tipsport. Od září 2025 sídlí v novém kampusu za ~1 miliardu Kč. Zahrnuje MŠ (50 dětí), ZŠ (třídy po 16 žácích) i čtyřleté gymnázium. Stipendia pro sociálně potřebné rodiny přiděluje algoritmus. Velká sportovní hala, prosklené třídy, systém čipů."
            director="Mgr. Petr Hopfinger"
            web="viaberoun.cz"
            badge="soukromá"
          />
          <SchoolCard
            type="MŠ + ZŠ · soukromá"
            title="Baltimore – MŠ a ZŠ, Švýcarská 2124"
            desc="Česko-americká komunitní škola a školka založená v roce 2021 manželi Klikovými. ZŠ nabízí výuku 1.–5. ročníku, skupiny max. 6 žáků, angličtina jako přirozená součást výuky každý den. MŠ má dvě třídy (3–4 a 5–6 let), kroužky zahrnuty ve školném. Nový kampus v Berouně se připravuje, MŠ zatím částečně v Králově Dvoře."
            director="Mgr. Aneta Kliková (Ředitelka ZŠ)"
            web={['zsbaltimore.cz', 'msbaltimore.cz']}
            badge="soukromá"
          />
          <SchoolCard
            type="MŠ + ZŠ · soukromá"
            title="MŠ Montessori Beroun a ZŠ, V Zahradách 1874"
            desc="Soukromá škola fungující od roku 2012, zapsána v rejstříku MŠMT. Vzdělávání dle pedagogiky Marie Montessori od předškolního věku až po ZŠ. Důraz na samostatnost, respektující přístup a svobodnou volbu činnosti. Odpolední kroužky v ceně programu."
            director="Mgr. Petra Illnerová, DiS."
            web="www.montessori-beroun.cz"
            badge="soukromá"
          />
          <SchoolCard
            type="MŠ · soukromá"
            title="MŠ Nemo – Rehabilitační nemocnice Beroun"
            desc="Školka otevřená v září 2022 v areálu Rehabilitační nemocnice Beroun. Primárně pro děti zaměstnanců, provoz přizpůsoben směnnému režimu. Dvě třídy, kapacita 48 dětí, rodinné prostředí. ŠVP ‚Skřítek Nemo a jeho pohádkový svět'."
            director="Aneta Bašková, DiS."
            web="www.ms-nemo.cz/beroun"
            badge="soukromá"
          />
          <SchoolCard
            type="MŠ · soukromá"
            title="MŠ Kytka s.r.o., Pod Šibencem 844"
            desc="Soukromá školka v části Beroun-Závodí. Komornější prostředí, rodinný přístup."
            address="Pod Šibencem 844, Beroun-Závodí"
            web="není veřejně dostupný"
            badge="soukromá"
          />
          <SchoolCard
            type="MŠ · církevní"
            title="Katolická mateřská škola, Seydlovo nám. 24/5"
            desc="Mateřská škola zřizovaná církví v centru Berouna. Vzdělávání s křesťanským hodnotovým rámcem."
            address="Seydlovo nám. 24/5, Beroun-Centrum"
            badge="církevní"
          />
        </div>
      </SectionWithIcon>

      <SectionWithIcon icon={School} title="Základní školy">
        <div className="schools-grid">
          <SchoolCard
            type="ZŠ + MŠ"
            title="2. ZŠ a MŠ Beroun, Preislerova 1335"
            desc="Velká sídlištní škola s cca 800 žáky, v provozu od roku 1961. Silné zázemí v informatice, TV a přírodovědných oborech. Součástí je MŠ (88 dětí, od 2010) a školní družina. V únoru 2026 otevřena nově rekonstruovaná družina."
            director="Mgr. Dagmar Kolářová"
            web="www.2zsberoun.cz"
          />
          <SchoolCard
            type="ZŠ"
            title="ZŠ Beroun, Wagnerovo náměstí 458 (Wagnerka)"
            desc="Škola pro cca 820 žáků s bohatou mimoškolní nabídkou – kroužky, sportovní a kulturní aktivity, multifunkční hřiště. Přezdívka ‚Wagnerka'. Odpolední hřiště přístupné i veřejnosti."
            director="Mgr. Eva Drbalová"
            web="www.zswagnerka.cz"
          />
          <SchoolCard
            type="ZŠ"
            title="Jungmannova základní škola Beroun"
            desc="Škola v centru města na Plzeňské ul., zaměřena na výuku jazyků a informatiku. Žáci od 1. do 9. ročníku. Tablety ve výuce, zahraniční zájezdy, lyžařský kurz. Ředitel ve funkci od roku 2004."
            director="Mgr. Ivan Souček"
            web="www.jzs.cz"
          />
          <SchoolCard
            type="ZŠ"
            title="ZŠ Beroun – Závodí, Komenského 249"
            desc="Menší škola (cca 400 žáků) v části Závodí se školní družinou. Komunitní charakter, aktivní školní parlament, adventní a kulturní akce. Spádová škola pro Závodí a okolí."
            director="Mgr. Hana Kozohorská"
            web="zavodi.eu"
          />
          <SchoolCard
            type="ZŠ · soukromá"
            title="ZŠ VIA Beroun, Na Dražkách 2142"
            desc="Součást kampusu VIA Beroun (zřizovatel Nadace Tipsport). Česko-anglická výuka, třídy po 16 žácích (max. 20), prosklené prostory po vzoru holandských škol. Od září 2025 ve zcela novém kampusu. Gymnázium Via Beroun na stejném místě."
            director="Mgr. Petr Hopfinger"
            web="viaberoun.cz"
            badge="soukromá"
          />
          <SchoolCard
            type="ZŠ · soukromá"
            title="ZŠ Baltimore, Švýcarská 2124"
            desc="Soukromá česko-americká základní škola (1.–5. ročník), skupiny max. 6 žáků. Výuka angličtiny jako přirozené součásti každodenního vzdělávání. Škola funguje od roku 2021. V roce 2026 rozšíří činnost o novou Střední školu Baltimore."
            director="Mgr. Aneta Kliková"
            web="zsbaltimore.cz"
            badge="soukromá"
          />
          <SchoolCard
            type="ZŠ · speciální"
            title="ZŠ speciální Beroun, Mládeže 1102"
            desc="Škola pro žáky se speciálními vzdělávacími potřebami (narušená komunikace, mentální postižení). Vzdělávání dle upravených ŠVP ‚Ostrov řeči', ‚Podaná ruka' a dalších. V roce 2020 slavila 100 let od založení. Zřizovatel: Středočeský kraj."
            director="Mgr. Ivana Ečerová"
            web="www.zss-beroun.cz"
          />
        </div>
      </SectionWithIcon>

      <SectionWithIcon icon={Trophy} title="Kroužky pro děti">
        <p>
          <strong>DDM (Dům dětí a mládeže):</strong>
        </p>
        <ul>
          <li>Široká nabídka kroužků – výtvarné, sportovní, hudební, technické</li>
          <li>Cenově dostupné, většina kroužků je do 2000 Kč/rok</li>
        </ul>
        <p>
          <strong>Kala (Berounský dům dětí a mládeže):</strong>
        </p>
        <ul>
          <li>Podobná nabídka jako DDM, jiná lokalita</li>
          <li>Oblíbené jsou keramika a divadlo</li>
        </ul>
        <p>
          <strong>Tip:</strong> Zápisy do kroužků jsou v září, sleduj web DDM a Kaly. Zápisy do MŠ a ZŠ – sleduj <strong><a href="https://www.mesto-beroun.cz" target="_blank" rel="noopener noreferrer">web města</a></strong> nebo <strong><a href="https://beroun.munipolis.cz" target="_blank" rel="noopener noreferrer">Munipolis</a></strong>.
        </p>
      </SectionWithIcon>

      <Box type="note" title="O datech">
        Data ze zdrojů: město-beroun.cz, weby škol, SeznamŠkol.eu. Přehled sestavený k 3/2026. Informace doporučujeme ověřit přímo na webech škol.
      </Box>

      <BackToTop />
    </main>
  );
}
