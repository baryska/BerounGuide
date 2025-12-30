# Design System – Průvodce Berounem

Hravý, moderní design inspirovaný civilními městskými průvodci.

## Vizuální principy

- **Hravý a přívětivý** – tučná typografie, velké ikony jako kotvy
- **Teplý a civilní** – béžové pozadí, černobílý kontrast
- **Vizuálně strukturovaný** – ikony jako dominantní prvek struktury
- **Čitelný a přímočarý** – jedna informace = jeden jasný blok

## Barevná paleta

### Hlavní barvy
- **Béžové pozadí**: `#f5ebe0` – teplý, přívětivý základ
- **Bílá**: `#ffffff` – pro boxy, navigaci a ikony
- **Černá**: `#000000` – pro text, nadpisy a ohraničení

### Filosofie
- Vysoký kontrast (černá na béžové, černá na bílé)
- Bez barevných akcentů – struktura = ikony + typografie
- Tisknutelné bez ztráty informace

## Typografie

### Font
**Inter** – moderní humanistický sans-serif
- Váhy: 400 (regular), 600 (semibold), 700 (bold), 900 (black)

### Hierarchie
- **H1**: 3rem (48px), weight 900, letter-spacing -0.03em
- **H2**: 1.75rem (28px), weight 900, letter-spacing -0.02em
- **Perex**: 1.25rem (20px)
- **Body**: 1.0625rem (17px) – větší než standardních 16px pro lepší čitelnost

### Charakter
- Tučné nadpisy (weight 900) = důraz a struktura
- Dostatek prostoru mezi sekcemi
- Čitelný dlouhý text

## Layout

- **Max width**: 800px
- **Béžové pozadí** celé stránky
- **Bílé boxy** pro navigaci a sekce
- **Ostrohranné prvky** (border-radius: 0) – modernější, méně "designérské"

## Komponenty

### 1. SectionWithIcon

Hlavní strukturální prvek – sekce s velkou ikonou.

```tsx
import { SectionWithIcon } from '../components/SectionWithIcon';

<SectionWithIcon icon="☕" title="Kde pracovat na laptopu">
  <ul>
    <li><strong>Název místa</strong> – Popisek s příjemným tónem</li>
  </ul>
</SectionWithIcon>
```

**Vlastnosti:**
- Grid layout: ikona (56×56px) + obsah
- Ikona v bílém boxu s černým rámečkem
- H2 nadpis vedle ikony (weight 900)

**Ikony:**
Použijte emoji nebo Unicode symboly:
- ☕ – káva, kavárny
- 🍔 – jídlo, restaurace
- ♡ – romantika, rande
- 🍺 – pivo, hospody
- 🏫 – školy
- 🏃 – sport
- 📚 – knihovna
- 🎭 – kultura

### 2. Box komponenta

Jednoduchý box pro zvýraznění informací.

```tsx
import { Box } from '../components/Box';

<Box type="tip" title="Užitečný tip">
  <p>Text...</p>
</Box>
```

**Vlastnosti:**
- Bílé pozadí, černý rámeček 2px
- Nadpis uppercase, letter-spacing 0.05em
- Používejte střídmě – ikony jsou hlavní struktura

### 3. Navigace

- Bílé tlačítka s černým rámečkem
- Hover: inverzní (černé pozadí, bílý text)
- Font-weight 600

### 4. Header & Footer

- **Header**: tučný nadpis (weight 900), spodní černý border 3px
- **Footer**: horní černý border 3px, béžové pozadí

## Tón hlasu v obsahu

Podle vzoru ze screenshotu:

- **Civilní, ne úřednický**: "nikdo nekoukne kysele" místo "vhodné pro práci"
- **Subjektivní, užitečný**: "ne turistická past" místo "oblíbené mezi místními"
- **Konkrétní**: "když tam sedíš tři hodiny s MacBookem" místo "vhodné pro delší pobyt"
- **Přímý**: "není to pajzl" místo "příjemné prostředí"

## Struktura seznamů

```tsx
<ul>
  <li>
    <strong>Název místa</strong> – Popisek v civilním tónu, konkrétní benefit
  </li>
</ul>
```

- **Strong** pro název
- **Pomlčka** jako oddělovač
- **Dash (–)** jako custom bullet místo standardní odrážky

## Responsive design

### Mobile (< 640px):
- Ikony zmenšené na 48×48px
- H1: 2.25rem
- H2: 1.5rem
- Menší spacing

## Print styles

- Ikony zmenšené a inline
- Černobílý kontrast zachován
- Boxy pouze s černým rámečkem
- Navigace a footer skryté

## Jak používat

### Vytvoření stránky s ikonami

```tsx
import { SectionWithIcon } from '../components/SectionWithIcon';

export default function MojePage() {
  return (
    <main>
      <h1>Název kapitoly</h1>
      <p className="perex">Krátký úvod</p>

      <SectionWithIcon icon="☕" title="První sekce">
        <ul>
          <li><strong>Položka</strong> – Popisek</li>
        </ul>
      </SectionWithIcon>

      <SectionWithIcon icon="🍔" title="Druhá sekce">
        <p>Obsah...</p>
      </SectionWithIcon>
    </main>
  );
}
```

### Bez ikon (pro jednoduché sekce)

```tsx
<section>
  <h2>Nadpis sekce</h2>
  <p>Obsah...</p>
</section>
```

## Příklad

Viz [app/jidlo-a-obchody/page.tsx](app/jidlo-a-obchody/page.tsx) pro kompletní ukázku nového designu.

## Co nedělat

- ❌ Nepřidávat barevné akcenty (kromě béžové a černobílé)
- ❌ Nepoužívat malé ikonky inline v textu
- ❌ Nepoužívat kulaté rohy (border-radius)
- ❌ Nepřidávat stíny (box-shadow)
- ❌ Nepsát formálně – buďte civilní a konkrétní
- ❌ Nepoužívat víc než 2 hierarchické úrovně nadpisů (H1, H2)
