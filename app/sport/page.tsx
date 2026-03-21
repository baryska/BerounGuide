"use client";

import { useState } from "react";
import { Box } from "../components/Box";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type BadgeVariant = "age" | "gold" | "blue" | "green";
type CardAccent = "orange" | "blue" | "green" | "purple" | "red" | "teal";

interface Badge {
  text: string;
  variant: BadgeVariant;
}

interface MetaItem {
  icon: string;
  content: string;
  href?: string;
  highlight?: boolean;
}

interface Club {
  tag: string;
  name: string;
  description: string;
  badges?: Badge[];
  meta?: MetaItem[];
  accent: CardAccent;
  isPrivate?: boolean;
}

interface Venue {
  icon: string;
  name: string;
  description: string;
  badges?: Badge[];
  meta?: MetaItem[];
}

interface Tab {
  id: string;
  label: string;
  emoji: string;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TABS: Tab[] = [
  { id: "sportovist", label: "Sportoviště", emoji: "🏟" },
  { id: "fotbal", label: "Fotbal", emoji: "⚽" },
  { id: "hokej", label: "Hokej & Hokejbal", emoji: "🏒" },
  { id: "florbal", label: "Florbal", emoji: "🏑" },
  { id: "softball", label: "Softball", emoji: "🥎" },
  { id: "tanec", label: "Tanec", emoji: "💃" },
  { id: "biatlon", label: "Biatlon", emoji: "🎯" },
  { id: "bojove", label: "Bojové sporty", emoji: "🥋" },
  { id: "voda", label: "Voda & příroda", emoji: "🚣" },
  { id: "ostatni", label: "Ostatní sporty", emoji: "🎾" },
  { id: "ddm", label: "DDM kroužky", emoji: "🎪" },
];

const VENUES: Venue[] = [
  {
    icon: "🏊",
    name: "Tipsport Laguna – Aquapark & plavecký bazén",
    description:
      "Sportovní bazén 25 m, 6 drah (hloubka 120–160 cm). Rekreační bazén s atrakcemi, 3 tobogány (nejdelší venkovní 78 m), vířivka, parní sauna. Hned vedle zimního stadionu. Sídlo plaveckého oddílu Lokomotivy.",
    badges: [
      { text: "Otevřeno celoročně", variant: "age" },
      { text: "Út–Pá 7:00–22:00", variant: "blue" },
    ],
    meta: [{ icon: "🌐", content: "tipsportlaguna.cz", href: "https://www.tipsportlaguna.cz" }],
  },
  {
    icon: "🏖",
    name: "Venkovní koupaliště na Velkém sídlišti",
    description:
      "Kompletně rekonstruovaný areál otevřený v červenci 2020. Bazén se 4 plaveckými drahami, velký relaxační bazén, tobogán, kamikadze skluzavka, proudový kanál (divoká řeka), dětské brouzdaliště s herními prvky, 2 opalovací louky, ping-pong a bistro. Provozovatel: Berounská sportovní. Sezóna červen–září (dle počasí).",
    badges: [
      { text: "Červen–Září", variant: "age" },
      { text: "Červen: Po–Pá 12–19, So–Ne 10–19", variant: "blue" },
      { text: "Červenec–Srpen: denně 10–20", variant: "blue" },
      { text: "Dospělí 150 Kč / Děti & senioři 80 Kč", variant: "green" },
      { text: "Od 17:00 zlevněné vstupné", variant: "green" },
    ],
    meta: [
      { icon: "📍", content: "Velké sídliště, Beroun" },
      { icon: "🌐", content: "tipsportlaguna.cz/koupaliste", href: "https://www.tipsportlaguna.cz/koupaliste" },
    ],
  },
  {
    icon: "🏒",
    name: "Zimní stadion Beroun",
    description:
      "Ledová plocha 58 × 28 m, kapacita 2 272 diváků, v provozu od roku 1950 (zastřešen 1985). Domov HC Berounští Medvědi. Veřejné bruslení dle rozpisu, brusírna bruslí. Součástí komplexu je hotel a restaurace.",
    badges: [
      { text: "Srpen–Březen", variant: "age" },
      { text: "Domácí hokej + bruslení pro veřejnost", variant: "blue" },
    ],
    meta: [{ icon: "🌐", content: "tipsportlaguna.cz/zimni-stadion", href: "https://www.tipsportlaguna.cz/zimni-stadion" }],
  },
  {
    icon: "🏃",
    name: "Tyršův stadion – TJ Lokomotiva",
    description:
      "Atletická dráha 400 m s tartanovým povrchem, atletické sektory (skok do dálky, výšky, vrh koulí apod.), fotbalové trávníkové hřiště. Krytá tribuna až pro 2 000 diváků. Základna atletiky, fotbalu a dalších oddílů Lokomotivy. Dějiště Dětského dne Piranhas (cca 900 návštěvníků).",
    badges: [{ text: "Venkovní, celosezónní", variant: "age" }],
    meta: [
      { icon: "📍", content: "Tyršova 85, Beroun" },
      { icon: "🌐", content: "lokomotivaberoun.cz", href: "https://lokomotivaberoun.cz" },
    ],
  },
  {
    icon: "🎾",
    name: "Tenisový areál Na Ostrově – TJ Lokomotiva",
    description:
      "8 tenisových kurtů (7 standardní + 1 malý), antukový i umělý povrch, odrazová stěna, hřiště pro nohejbal. Vnitřní tenisová hala (2 kurty) pro celoroční hru. Zázemí, občerstvení, parkoviště.",
    badges: [{ text: "Pronájem: 100–150 Kč/hod", variant: "blue" }],
    meta: [{ icon: "🌐", content: "lokomotivaberoun.cz", href: "https://lokomotivaberoun.cz" }],
  },
  {
    icon: "🧗",
    name: "Horolezecká & boulderingová stěna – TJ Lokomotiva",
    description:
      "Vnitřní lezecká stěna a boulderingová stěna v areálu Lokomotivy (Tyršova 85). Jeden z nejaktivnějších oddílů – horolezectví/lezení má přes 186 členů.",
    meta: [{ icon: "🌐", content: "hoberoun.cz", href: "https://www.hoberoun.cz" }],
  },
  {
    icon: "🏑",
    name: "Hokejbalové hřiště – Berounská sportovní",
    description:
      "Venkovní hřiště se speciálním plastovým povrchem pro hokejbal. Základna SK Kelti. Po–Pá od 15:00 pro veřejnost, dopoledne slouží školám.",
    badges: [{ text: "Po–Pá 15:00+, So–Ne 9:00+", variant: "age" }],
    meta: [{ icon: "🌐", content: "berounskasportovni.cz", href: "http://www.berounskasportovni.cz" }],
  },
  {
    icon: "⛸",
    name: "Inline dráha podél Berounky",
    description:
      "Asfaltová inline dráha na břehu Berounky v centru města. Vhodná pro inline bruslení, koloběžky i chůzi. Volný přístup celoročně.",
    badges: [{ text: "Zdarma, volný přístup", variant: "green" }],
  },
  {
    icon: "⛳",
    name: "Sportovní centrum Eden, Pod Homolkou 1482",
    description:
      "Největší multifunkční sportovní centrum v Berouně (9 700 m²). Indoor golf (2 simulátory), Crazygolf – první 18jamkové pohádkové hřiště v ČR, florbal, futsal, badminton, padel (s osvětlením), beachvolejbal, 4 venkovní + 1 indoor tenisový kurt, lukostřelba (od 10 let), pickleball, horolezecká stěna, pilates, jóga, fitness. Restaurace, narozeninové oslavy, příměstské tábory.",
    badges: [
      { text: "Celoroční provoz", variant: "age" },
      { text: "Příměstské tábory", variant: "blue" },
      { text: "Dětská tenisová akademie", variant: "green" },
    ],
    meta: [
      { icon: "📍", content: "Pod Homolkou 1482, Beroun" },
      { icon: "📞", content: "724 774 353" },
      { icon: "🌐", content: "sporteden.cz", href: "https://www.sporteden.cz" },
    ],
  },
  {
    icon: "🌿",
    name: "Park Homolka – nový komunitní areál",
    description:
      "Nový park dokončený v létě 2025. Travnatá plocha pro sport a venkovní akce, moderní dětské hřiště, outdoor tréninkové hřiště, inline dráha pro bruslaře, běžce a koloběžky. Sadové úpravy v dalších etapách.",
    badges: [
      { text: "Zdarma, volný přístup", variant: "age" },
      { text: "Otevřeno 2025", variant: "green" },
    ],
    meta: [{ icon: "📍", content: "Pod Homolkou, Beroun" }],
  },
  {
    icon: "🏋",
    name: "Sportovní hala, fitcentrum, squash – TJ Lokomotiva",
    description:
      "Víceúčelová sportovní hala, fitness centrum, squash, gymnasticko-judistický sál, spinning, wellness, bowling. Konferenční místnost. Rezervace online.",
    meta: [{ icon: "🌐", content: "lokomotivaberoun.cz", href: "https://lokomotivaberoun.cz" }],
  },
];

const CLUBS: Record<string, Club[]> = {
  fotbal: [
    {
      tag: "Fotbal · Beroun centrum",
      name: "FK Český lev – Union Beroun",
      description:
        "Historicky nejstarší berounský fotbalový klub, vznik 1910 (SK Závodí), sloučení do dnešní podoby 2007. Hraje Přebor Středočeského kraje. Největší úspěch – účast v divizi v 70. letech. Trenérem byl slavný František Plánička. Mládežnické kategorie: přípravka, žáci (U11), dorost (U17+).",
      badges: [
        { text: "U7 – dospělí", variant: "age" },
        { text: "Přebor Středočeského kraje", variant: "gold" },
      ],
      meta: [
        { icon: "📍", content: "Areál Na Máchovně, Beroun" },
        { icon: "🌐", content: "cluberoun.cz", href: "https://cluberoun.cz" },
      ],
      accent: "green",
    },
    {
      tag: "Fotbal · Závodí",
      name: "SK Cembrit Beroun – Závodí",
      description:
        "Komunitní fotbalový klub s historií od roku 1969. Hřiště na levém břehu Berounky, přezdívané Maracaná pod mostem. Silná mládežnická základna: přípravky až dorost, přes 100 hráčů a 20 trenérů. Každoroční soustředění mládeže.",
      badges: [
        { text: "Přípravka – dorost", variant: "age" },
        { text: "100+ mládežnických hráčů", variant: "green" },
      ],
      meta: [{ icon: "🌐", content: "skcembrit.cz", href: "https://www.skcembrit.cz" }],
      accent: "green",
    },
  ],
  hokej: [
    {
      tag: "Lední hokej",
      name: "HC Berounští Medvědi",
      description:
        "Klub s tradicí od roku 1933. Téměř 20 let hrál 1. ligu (do sezóny 2013/14). Dnes Krajská soutěž mužů. Cca 200 aktivních sportovců včetně mládeže – přípravka (nar. 2018 a mladší), žáci A+B, dorost, junioři. Z mládeže vzešla reprezentantka ČR žen U18. Nábor každé pondělí od 16:00.",
      badges: [
        { text: "Od 5 let (nar. 2018+)", variant: "age" },
        { text: "Krajská soutěž", variant: "blue" },
        { text: "Odchovankyně v rep. U18", variant: "gold" },
      ],
      meta: [
        { icon: "📍", content: "Zimní stadion, Tipsport Laguna" },
        { icon: "👤", content: "Trenér mládeže: Petr Třinecký" },
        { icon: "🌐", content: "medvedi.cz", href: "https://www.medvedi.cz" },
      ],
      accent: "blue",
    },
    {
      tag: "Hokejbal",
      name: "SK Kelti 2008",
      description:
        "Jediný zástupce berounského okresu v soutěžích Českomoravského svazu hokejbalu. Hraje 1. ligu (dospělí). Silné mládežnické i dívčí oddíly (Fretky v ženské lize). Letní soustředění v Nižboru, příměstský tábor. Pořádá memoriál Karla Abraháma.",
      badges: [
        { text: "Od 6 let", variant: "age" },
        {
          text: "🥇 Mistři světa U16 (2025) – Hasal & Buroň",
          variant: "gold",
        },
      ],
      meta: [
        {
          icon: "🏆",
          content:
            "Martin Hasal & Jakub Buroň – zlaté medaile MS hokejbalistů U16, Hradec Králové 2025. Natálie Faitová – ocenění za MS hokejbal.",
          highlight: true,
        },
        { icon: "🌐", content: "skkelti.cz", href: "https://skkelti.cz" },
      ],
      accent: "blue",
    },
  ],
  florbal: [
    {
      tag: "Florbal · SC Eden",
      name: "Sport Eden Beroun",
      description:
        "Největší florbalový oddíl v Berouně. Tréninky út a čt 17:00–21:00 v hale SC Eden (mantinely 40×20 m, certifikace na světové turnaje, povrch Conipur HG). Všechna družstva startují v ligových soutěžích ČFbU. Bezplatná zkušební tréninková hodina.",
      badges: [
        { text: "Elévové (2014 a ml.)", variant: "age" },
        { text: "Mladší žáci (2011 a ml.)", variant: "age" },
        { text: "Starší žáci (2008 a ml.)", variant: "age" },
        { text: "Dorost · Muži", variant: "age" },
        { text: "Registrace ČFbU", variant: "green" },
      ],
      meta: [
        { icon: "📍", content: "Sportovní centrum Eden, Beroun" },
        { icon: "✉️", content: "florbal@sporteden.cz" },
        { icon: "🌐", content: "sporteden.cz/florbal", href: "https://www.sporteden.cz/florbal" },
      ],
      accent: "green",
    },
    {
      tag: "Florbal · závodní",
      name: "Florbal Pro Beroun",
      description:
        "Závodní florbalový klub registrovaný u ČFbU od roku 2012. Sezóna 2024/25: dorostenci hrají 3. ligu dorostenců – skupina 3 (FBC Slavia Praha, Medojedi Sedlčany a další). Domácí zápasy v SH Králův Dvůr.",
      badges: [
        { text: "Dorost a starší", variant: "age" },
        { text: "3. liga dorostenců", variant: "blue" },
      ],
      meta: [
        {
          icon: "🌐",
          content: "Florbal Pro Beroun na ceskyflorbal.cz",
          href: "https://www.ceskyflorbal.cz/club/detail/overview/1116",
        },
      ],
      accent: "green",
    },
    {
      tag: "Florbal",
      name: "Gladiator Team Beroun",
      description:
        "Třetí berounský florbalový subjekt registrovaný u Českého florbalu. Zápasy v regionálních soutěžích Středočeského kraje.",
      badges: [
        { text: "Mládež i dospělí", variant: "age" },
        { text: "Registrace ČFbU", variant: "green" },
      ],
      accent: "green",
    },
  ],
  softball: [
    {
      tag: "Softball / Baseball",
      name: "Piranhas Beroun",
      description:
        "Mládežnický softballový klub, vznik 2015 (kroužek Medvídci od 2012). Dnes přes 300 dětských hráčů. Kategorie: U7, U8, U9, U10, U11, žáci/žákyně (U13), kadeti/kadetky, junioři/juniorky. Nábory pro děti od 5 do 10 let vždy v září. Celoroční halové tréninky v SC Eden. Chystá se výstavba vlastního softballového hřiště.",
      badges: [
        { text: "Od 5 let", variant: "age" },
        { text: "🥇 Mistři ČR U13 (2024, 2025)", variant: "gold" },
        { text: "🥇 Mistři ČR juniorky U18 (2025)", variant: "gold" },
        { text: "🥉 Bronz U11 MČR (2025)", variant: "gold" },
      ],
      meta: [
        {
          icon: "🏆",
          content:
            "Od 2019 celkem 8+ medailí z MČR. Trenér Tomáš Horáček – Trenér mládeže roku ČSA 2023. 11 medailí v sezóně 2025. Ocenění starostkou Chalupovou 2024 i 2025.",
          highlight: true,
        },
        { icon: "📍", content: "U Židovského hřbitova 373 + SC Eden (hala)" },
        { icon: "👤", content: "Předseda: Michal Maryška" },
        { icon: "🌐", content: "piranhas.cz", href: "https://www.piranhas.cz" },
      ],
      accent: "orange",
    },
  ],
  tanec: [
    {
      tag: "Taneční sport",
      name: "TC R.A.K. Beroun",
      description:
        "Největší taneční centrum v Berouně, jedno z největších na Středočesku. Zakladatel Jan Liška (choreograf, od 1992). Berounská pobočka: 575 členů, 17 lektorů. Styly: Show Dance, Disco Dance, Hip Hop, Street Dance, Break Dance, Jazz Dance, Balet, Akrobacie, Gymnastika. Tři profi sály (90 m², 60 m², 119 m²) s povrchem Baletisol. Pobočky na Kladně, Slaném a v Příbrami.",
      badges: [
        { text: "Od 4 let – dospělí", variant: "age" },
        { text: "🥇 Mistři ČR Show Dance (2017, 2018)", variant: "gold" },
        { text: "🥉 3. místo MS děti (2024)", variant: "gold" },
        { text: "5. místo MS dospělí (2024)", variant: "gold" },
      ],
      meta: [
        {
          icon: "🏆",
          content:
            "Dětská skupina téměř každoročně na MS, TOP 15 světa. Skupina 5–8 let s choreografií ‚Na požární stanici' – opakovaně 1. místo.",
          highlight: true,
        },
        { icon: "📍", content: "Česká 56, Beroun-Centrum" },
        { icon: "👤", content: "Zakladatel: Jan Liška" },
        { icon: "🌐", content: "tcrak.cz/beroun", href: "https://tcrak.cz/beroun" },
      ],
      accent: "purple",
    },
    {
      tag: "Společenský tanec",
      name: "Taneční klub Romany Chvátalové",
      description:
        "Výuka společenského tance pro děti, mládež i dospělé. Základní i pokračovací kurzy, individuální výuka, příprava závodních párů. Působí v Berouně, Zdicích a Žebráku.",
      badges: [
        { text: "Děti – dospělí", variant: "age" },
        { text: "Závodní páry", variant: "blue" },
      ],
      meta: [{ icon: "🌐", content: "tanecberoun.cz", href: "https://www.tanecberoun.cz" }],
      accent: "purple",
    },
  ],
  biatlon: [
    {
      tag: "Letní a zimní biatlon",
      name: "Klub biatlonu Beroun (KB Beroun)",
      description:
        "Tradice od roku 1970 (původně KBS Beroun – Klub branných sportů). Letní biatlon: běh + střelba ze vzduchovky na 10 m. Kategorie: žáci (od 9–10 let), dorost, dospělí. Celoroční tréninky 2× týdně, střelnice Na Máchovně. Letní soustředění v Krušných horách. Historické úspěchy: mistři ČSSR Pavel Šmíd, Dáša Bartošová. Žáci na 6. místě celostátního hodnocení (z 38 klubů).",
      badges: [
        { text: "Od 9–10 let", variant: "age" },
        { text: "6. místo v ČR žáci (2023/24)", variant: "gold" },
        { text: "10 medailí MČR a pohár 2024", variant: "green" },
      ],
      meta: [
        {
          icon: "🏆",
          content:
            "Hanka Pacnerová (žákyně 12 let) – 5. místo ankety Sportovec roku 2024 okresu Beroun, 2. místo ČR žebříček žákyň letního biatlonu 2024. Nella Valdmanová – 8. místo ankety.",
          highlight: true,
        },
        { icon: "📍", content: "Na Máchovně 116, Beroun" },
        { icon: "🌐", content: "biatlonberoun.cz", href: "https://www.biatlonberoun.cz" },
      ],
      accent: "teal",
    },
  ],
  bojove: [
    {
      tag: "Judo · TJ Lokomotiva",
      name: "Oddíl Judo Beroun",
      description:
        "Oddíl TJ Lokomotiva Beroun s 79 členy. Celoroční nábor od 6 let. Kategorie: přípravka, žáci, dorost, junioři, dospělí. Tréninky v judo sále Lokomotivy (Tyršova 85). Závodní skupina soutěží po celé ČR, letní soustředění. Důraz na základy gymnastiky, akrobacie a pádovou techniku.",
      badges: [
        { text: "Od 6 let", variant: "age" },
        { text: "79 členů", variant: "blue" },
      ],
      meta: [{ icon: "🌐", content: "judoberoun.cz", href: "https://judoberoun.cz" }],
      accent: "red",
    },
    {
      tag: "MMA / Sambo",
      name: "MMA & Combat SAMBO klub Beroun",
      description:
        "Klub zabývající se MMA a sportovním/bojovým SAMBO. Tréninky pro děti, mládež i dospělé, přípravka od 4 let. Žáci se účastní mezinárodních turnajů i ME a MS.",
      badges: [
        { text: "Od 4 let", variant: "age" },
        { text: "Účast MS a ME", variant: "gold" },
      ],
      accent: "red",
    },
    {
      tag: "Kickbox / Krav Maga / CrossFit",
      name: "Centrum bojových a aerobních sportů Beroun",
      description:
        "Centrum zaměřené na Kickbox, Krav-Magu, judo, CrossFit a Kettlebell. Podpora závodníků, rozvoj talentů, sportovní výchova mládeže.",
      badges: [{ text: "Mládež i dospělí", variant: "age" }],
      accent: "red",
    },
    {
      tag: "Karate",
      name: "Karate klub Beroun",
      description:
        "Sportovní klub se zaměřením na karate. Jedno z poslání: prevence kriminality dětí a mládeže.",
      badges: [{ text: "Děti i dospělí", variant: "age" }],
      accent: "red",
    },
  ],
  voda: [
    {
      tag: "Plavání · TJ Lokomotiva",
      name: "Plavecký oddíl Lokomotiva Beroun",
      description:
        "147 členů. Tréninky v bazénu Tipsport Laguna (25 m, 6 drah). Závodní plavání, mládežnické kategorie. Sofie Koníčková – 3. místo ankety Sportovec roku 2024 okresu. Tituly na zimním MČR na 100 a 200 m volný způsob. 4 nejúspěšnější sportovci Olympiády dětí a mládeže za Středočeský kraj.",
      badges: [
        { text: "Mládež – dospělí", variant: "age" },
        { text: "Tituly MČR 100 a 200 m v.z.", variant: "gold" },
        { text: "147 členů", variant: "green" },
      ],
      meta: [{ icon: "🌐", content: "lokomotivaberoun.cz", href: "https://lokomotivaberoun.cz" }],
      accent: "teal",
    },
    {
      tag: "Veslování · TJ Lokomotiva",
      name: "Veslařský oddíl Beroun",
      description:
        "96 členů. Trénink na Berounce. Mládežnická kategorie. Lada Rozalie Straková – 4. místo ankety Sportovec roku 2024.",
      badges: [
        { text: "Mládež – dospělí", variant: "age" },
        { text: "96 členů", variant: "blue" },
      ],
      meta: [{ icon: "🌐", content: "vesloberoun.cz", href: "https://www.vesloberoun.cz" }],
      accent: "teal",
    },
    {
      tag: "Rychlostní kanoistika",
      name: "Kanoistický oddíl – Vodmar Beroun",
      description:
        "60 členů. Rychlostní kanoistika. Výsledky juniorů: bronz MS juniorů K1 5000 m (Plovdiv), bronz Olympijských nadějí K1 1000 m, 2. místo Český pohár dorost.",
      badges: [
        { text: "Mládež – dospělí", variant: "age" },
        { text: "Bronz MS juniorů (Plovdiv)", variant: "gold" },
      ],
      meta: [{ icon: "🌐", content: "vodmar-beroun.cz", href: "https://www.vodmar-beroun.cz" }],
      accent: "teal",
    },
    {
      tag: "Horolezectví / Sportovní lezení",
      name: "Horolezecký oddíl Beroun",
      description:
        "186 členů, jeden z nejsilnějších oddílů Lokomotivy. Lezení na stěně v areálu Tyršovy 85 (horolezecká i boulderingová stěna). Závodní i rekreační lezení.",
      badges: [
        { text: "Děti – dospělí", variant: "age" },
        { text: "186 členů", variant: "green" },
      ],
      meta: [{ icon: "🌐", content: "hoberoun.cz", href: "https://www.hoberoun.cz" }],
      accent: "teal",
    },
    {
      tag: "Turistika",
      name: "Turistický oddíl TOM BoBr Beroun",
      description:
        "130 členů, turistický oddíl dětí a mládeže při TJ Lokomotiva. Pěší turistika, výlety, tábory.",
      badges: [
        { text: "Děti – dospělí", variant: "age" },
        { text: "130 členů", variant: "blue" },
      ],
      meta: [{ icon: "🌐", content: "tombobr.cz", href: "https://www.tombobr.cz" }],
      accent: "teal",
    },
  ],
  ostatni: [
    {
      tag: "Basketbal",
      name: "BK Beroun",
      description:
        "Basketbal v Berouně od roku 1934. Hraje Středočeskou basketbalovou ligu mužů (A tým) a Krajský přebor mužů (B tým). Zápasy: tělocvična ZŠ Preislerova. Silná mládežnická sekce (žáci, žákyně, dorost). Historický vrchol – muži 1977: přeborníci kraje, postup do II. ligy.",
      badges: [
        { text: "Mládež – dospělí", variant: "age" },
        { text: "Středočeská liga", variant: "blue" },
      ],
      meta: [
        { icon: "📍", content: "Slavašovská 18, Beroun" },
        { icon: "🌐", content: "bkberoun.cz", href: "https://www.bkberoun.cz" },
      ],
      accent: "blue",
    },
    {
      tag: "Tenis",
      name: "LTC Beroun",
      description:
        "Tenisový oddíl při TJ Lokomotiva, primárně zaměřený na děti a mládež do 21 let. Přijímá od 5 let. Závodní i začátečnická sekce, sportovní olympiády pro děti okresu, soustředění, tábory. Tenisový areál Na Ostrově (8 kurtů).",
      badges: [
        { text: "Od 5 let", variant: "age" },
        { text: "Závodní i rekreační", variant: "green" },
      ],
      meta: [{ icon: "🌐", content: "ltcberoun.cz", href: "https://www.ltcberoun.cz" }],
      accent: "blue",
    },
    {
      tag: "Tenis – akademie",
      name: "Tenisová škola Loko Beroun / RSST Beroun",
      description:
        "Tenisová akademie TJ Lokomotiva. Trenér Radek Pozděna (USA, Německo, 15+ let, 6× krajský přeborník, mistři ČR). Přípravka od 3 let. RSST Beroun navazuje mládežnickou ligou stolního tenisu a tenisu.",
      badges: [
        { text: "Od 3 let", variant: "age" },
        { text: "Mistři ČR z akademie", variant: "gold" },
      ],
      meta: [
        {
          icon: "🌐",
          content: "tenisovaskolaberoun.cz",
          href: "https://www.tenisovaskolaberoun.cz",
        },
      ],
      accent: "blue",
    },
    {
      tag: "Atletika · TJ Lokomotiva",
      name: "Atletický oddíl – Berounské Tygrice",
      description:
        "267 členů – největší oddíl TJ Lokomotiva co do počtu. Tréninky na Tyršově stadionu. Skupiny: 8–9 let (St 17–18:30), 10–11 let (Po + St 17–18:30). Samuel Holiček – 2. místo ankety Sportovec roku 2024 okresu.",
      badges: [
        { text: "Od 8 let", variant: "age" },
        { text: "267 členů", variant: "green" },
      ],
      meta: [{ icon: "🌐", content: "lokomotivaberoun.cz", href: "https://lokomotivaberoun.cz" }],
      accent: "blue",
    },
    {
      tag: "Moderní pětiboj",
      name: "Iron Stars Beroun",
      description:
        "Klub moderního pětiboje (plavání, šerm, jezdectví, střelba, běh). Spolupráce se Spartakem Hořovice. Samuel Holiček a Lea Holičková – 2. a 9. místo ankety Sportovec roku okresu Beroun 2024.",
      badges: [
        { text: "Mládež", variant: "age" },
        { text: "Medaile z národních soutěží", variant: "gold" },
      ],
      accent: "blue",
    },
    {
      tag: "Stolní tenis",
      name: "Oddíl stolního tenisu Beroun",
      description:
        "Oddíl v rámci TJ Lokomotiva s 24 členy. Kontakt: Jiří Kopřiva. Mládežnická sekce, krajské soutěže.",
      badges: [{ text: "Mládež – dospělí", variant: "age" }],
      accent: "blue",
    },
  ],
};

const DDM_ITEMS = [
  {
    name: "Aerobik & tanec pro děti",
    detail: "Pohybové a taneční sestavy, jogínská relaxace; různé věkové skupiny",
  },
  {
    name: "Sportovní kroužky",
    detail: "Míčové hry, pohybové hry, všestrannost; pro MŠ i ZŠ věk",
  },
  {
    name: "Příměstské tábory",
    detail: "Zimní i letní tábory v termínech prázdnin MŠMT",
  },
  {
    name: "Výlety a soustředění",
    detail: "Jednodenní i víkendové výlety na zajímavá místa ČR",
  },
  {
    name: "Akce pro školy a školky",
    detail: "Otevřené akce pro třídy, družiny i volnou veřejnost",
  },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function BadgePill({ text, variant }: Badge) {
  return <span className={`sport-badge sport-badge--${variant}`}>{text}</span>;
}

function MetaRow({ item }: { item: MetaItem }) {
  return (
    <div className={`sport-meta-row ${item.highlight ? "highlight" : ""}`}>
      <span className="sport-meta-icon">{item.icon}</span>
      {item.href ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {item.content}
        </a>
      ) : (
        <span>{item.content}</span>
      )}
    </div>
  );
}

function ClubCard({ club }: { club: Club }) {
  return (
    <div className={`sport-card sport-card-accent sport-card-accent--${club.accent}`}>
      {club.isPrivate && <span className="sport-card-badge-private">soukromá</span>}
      <span className="sport-card-tag">{club.tag}</span>
      <h3 className="sport-card-name">{club.name}</h3>
      <p className="sport-card-desc">{club.description}</p>
      {club.badges && club.badges.length > 0 && (
        <div className="sport-card-badges">
          {club.badges.map((b, i) => (
            <BadgePill key={i} {...b} />
          ))}
        </div>
      )}
      {club.meta && club.meta.length > 0 && (
        <div className="sport-card-meta">
          {club.meta.map((m, i) => (
            <MetaRow key={i} item={m} />
          ))}
        </div>
      )}
    </div>
  );
}

function VenueCard({ venue }: { venue: Venue }) {
  return (
    <div className="sport-card">
      <span className="sport-venue-icon">{venue.icon}</span>
      <h3 className="sport-card-name">{venue.name}</h3>
      <p className="sport-card-desc">{venue.description}</p>
      {venue.badges && venue.badges.length > 0 && (
        <div className="sport-card-badges">
          {venue.badges.map((b, i) => (
            <BadgePill key={i} {...b} />
          ))}
        </div>
      )}
      {venue.meta && venue.meta.length > 0 && (
        <div className="sport-card-meta">
          {venue.meta.map((m, i) => (
            <MetaRow key={i} item={m} />
          ))}
        </div>
      )}
    </div>
  );
}

function HighlightBox({ children }: { children: React.ReactNode }) {
  return <div className="sport-highlight-box">{children}</div>;
}

function SectionTitle({ label }: { label: string }) {
  return <h2 className="sport-section-title">{label}</h2>;
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function SportBerounPage() {
  const [activeTab, setActiveTab] = useState("sportovist");

  const renderContent = () => {
    switch (activeTab) {
      case "sportovist":
        return (
          <>
            <SectionTitle label="Sportoviště" />
            <HighlightBox>
              Beroun disponuje nadstandardní sportovní infrastrukturou pro město své velikosti –
              zimní stadion, aquapark s plaveckým bazénem, Tyršův atletický stadion, tenisový areál,
              horolezecká stěna, inline dráha podél Berounky a řada multifunkčních hřišť.
            </HighlightBox>
            <div className="sport-cards-grid">
              {VENUES.map((v, i) => (
                <VenueCard key={i} venue={v} />
              ))}
            </div>
          </>
        );

      case "softball":
        return (
          <>
            <SectionTitle label="Softball & Baseball" />
            <HighlightBox>
              <strong className="text-[#f5a623] font-semibold">Piranhas Beroun</strong> jsou
              jednoznačně nejúspěšnějším mládežnickým sportovním klubem v Berouně – v roce 2025
              získali{" "}
              <strong className="text-[#f5a623] font-semibold">11 medailí</strong> na vrcholných
              soutěžích mládeže, ocenění od starostky města a v roce 2026 spouštějí sbírku na
              vlastní softballové hřiště.
            </HighlightBox>
            <div className="sport-cards-grid">
              {CLUBS.softball.map((c, i) => (
                <ClubCard key={i} club={c} />
              ))}
            </div>
          </>
        );

      case "florbal":
        return (
          <>
            <SectionTitle label="Florbal" />
            <HighlightBox>
              V Berouně působí{" "}
              <strong className="text-[#f5a623] font-semibold">tři florbalové subjekty</strong>{" "}
              registrované u Českého florbalu – Sport Eden Beroun (největší, kompletní mládežnická
              struktura), Florbal Pro Beroun (dorostenecká 3. liga) a Gladiator Team Beroun. Zázemí
              mají všechny v multifunkční hale SC Eden.
            </HighlightBox>
            <div className="sport-cards-grid">
              {CLUBS.florbal.map((c, i) => (
                <ClubCard key={i} club={c} />
              ))}
            </div>
          </>
        );

      case "ddm":
        return (
          <>
            <SectionTitle label="Dům dětí a mládeže – sportovní kroužky" />
            <HighlightBox>
              DDM Beroun pořádá celoroční zájmové kroužky, zimní a letní tábory, výlety a otevřené
              akce pro školy i veřejnost.
            </HighlightBox>
            <ul className="sport-ddm-list">
              {DDM_ITEMS.map((item, i) => (
                <li key={i} className="sport-ddm-item">
                  <strong>{item.name}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
            <div className="sport-meta-row">
              <span className="sport-meta-icon">🌐</span>
              <a href="https://www.ddmberoun.cz" target="_blank" rel="noopener noreferrer">
                ddmberoun.cz
              </a>
            </div>
          </>
        );

      default: {
        const clubs = CLUBS[activeTab];
        const tab = TABS.find((t) => t.id === activeTab);
        if (!clubs || !tab) return null;
        return (
          <>
            <SectionTitle label={tab.label} />
            <div className="sport-cards-grid">
              {clubs.map((c, i) => (
                <ClubCard key={i} club={c} />
              ))}
            </div>
          </>
        );
      }
    }
  };

  return (
    <main className="sport-page">
      <h1>Sport v Berouně</h1>
      <p className="perex">
        Kluby, sportoviště, kroužky pro děti – přehled 2025/26.
      </p>

      <nav className="sport-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`sport-tab ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.emoji} {tab.label}
          </button>
        ))}
      </nav>

      {renderContent()}
    </main>
  );
}
