# Průvodce pro nové obyvatele Berouna

Statický obsahový web v Next.js připravený na doplnění obsahu a export do PDF.

## Struktura projektu

```
app/
├── layout.tsx              # Sdílený layout (header + footer + navigace)
├── globals.css             # Globální styly
├── page.tsx                # Homepage (rozcestník)
├── zakladni-veci/
│   └── page.tsx
├── parkovani-a-pohyb/
│   └── page.tsx
├── jak-funguje-mesto/
│   └── page.tsx
├── verejny-prostor/
│   └── page.tsx
├── deti-a-skoly/
│   └── page.tsx
├── sport/
│   └── page.tsx
├── knihovna/
│   └── page.tsx
├── kultura/
│   └── page.tsx
├── jidlo-a-obchody/
│   └── page.tsx
├── mistni-kontext/
│   └── page.tsx
└── komunity/
    └── page.tsx
```

## Jak spustit projekt

### Instalace

```bash
npm install
```

### Vývoj

```bash
npm run dev
```

Web bude dostupný na [http://localhost:3000](http://localhost:3000)

### Build a statický export

```bash
npm run build
```

Statický web bude vygenerován do složky `out/`

## Přidání obsahu

Každá kapitola má stejnou strukturu:

```tsx
<main>
  <h1>Název kapitoly</h1>

  <p className="perex">
    Krátký úvodní text
  </p>

  <section>
    <h2>Jak to funguje</h2>
    <p>...</p>
  </section>

  <section>
    <h2>Co je dobré vědět</h2>
    <p>...</p>
  </section>

  <section>
    <h2>Praktické informace</h2>
    <p>...</p>
  </section>

  <section>
    <h2>Tipy / poznámky</h2>
    <p>...</p>
  </section>

  <section>
    <h2>Odkazy</h2>
    <ul>
      <li>...</li>
    </ul>
  </section>
</main>
```

## Export do PDF

Web je navržen pro snadný tisk:

1. Otevřete stránku v prohlížeči
2. Použijte funkci tisku (Ctrl+P / Cmd+P)
3. Vyberte "Uložit jako PDF"

Print styly automaticky skryjí navigaci a upraví layout pro tisk.

## Technologie

- Next.js 16 (App Router)
- TypeScript
- CSS (bez frameworků)
- Statický export bez databáze

## Další kroky

1. Doplňte obsah do jednotlivých kapitol
2. Upravte styly dle potřeby v `app/globals.css`
3. Spusťte `npm run build` pro finální export
