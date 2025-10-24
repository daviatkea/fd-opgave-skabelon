# Refleksion af opgave forløb

I projektet har jeg taget udgangspunkt i teknikker som vi har lært i undervisningen. Det har været en spændende udfordring at skulle designe siden efter et forudbestemt design, med en deadline på.

## Teknikker brugt i projektet

### Flow-space og custom properties

Spacing og styling gennem hele sitet er blevet erklæret via custom properties i `global.css`:

```css
:root {
  /* farver */
  --primary-yellow: #ffcc4a;
  --primary-green: #4eaf4e;
  --primary-black: #181818;

  /* flow space */
  --flow-xs: 0.25rem;
  --flow-sm: 0.625rem;
  --flow-md: 1.25rem;
  --flow-lg: 2.875rem;
  --flow-xl: 3.125rem;
  --flow-xxl: 5rem;
}
```

På denne måde kan koden nemt ændres på tværs af hele sitet, ved bare at ændre i custom properties.

### Container Queries

For at gøre sitet responsivt, så har jeg gjort brug af container queries i stedet for media queries.

Sitet er blevet kodet efter mobile first princippet.

På den måde så bliver sitets responsivitet ikke defineret ud fra viewporten, men udfra hvor meget plads der er til containerne. I gennem hele sitet har jeg kun defineret 1 breakpoint (1200px), for at gøre sitet mere responsivt kan man eventuelt definerer flere breakpoints.

Eksempel på brug af container queries:

```css
.wrapper {
  container-type: inline-size;
  container-name: container;
}

@container team (width > 1200px) {
  .grid {
    grid-template-columns: var(--gtc-1200);
  }
}
```

Her kigger den efter om containeren er mere end 1200px, hvis ja så træder stylingen i kræft.

### Cascade Layers (@layer)

Alle komponent styles ligger i `@layer components`:

```css
@layer components {
  .team-wrapper {
    /* styles */
  }
}
```

På den måde kan jeg definerer hierakiet af css, så jeg nemt kan overskrive eventuelle stylings.

Projektets hieraki er defineret således:

```css
@layer reset, global, components, overrides;
```

Lavest er reset, så global, så components og til sidst overrides.

### Nesting

For at gøre koden så strukturert som muligt, så har jeg brugt nesting gennem hele projektet.

Eksempel:

```css
.team-header {
  display: flex;

  & .title {
    color: var(--primary-black);
  }

  & h2 {
    font-size: var(--h2);
  }
}
```

I mit faq komponent bruger jeg nesting til at style åben og lukket tilstand:

```css
details {
  & summary {
    cursor: pointer;
  }

  &[open] .vertical {
    opacity: 0;
  }
}
```

## Scroll Animations

Experience komponentet bruger @property og animation-timeline: view() til at animere procenterne med scroll:

```css
@property --percentAnimation {
  syntax: "<number>";
  initial-value: 0;
  inherits: false;
}

.stat {
  animation: percentAnimation linear both;
  animation-timeline: view();
  animation-range: entry 25% cover 50%;
}
```

@property gør at CSS kan animere tal. animation-timeline: view() starter animationen når cirklen scroller ind. counter-reset med round() viser 85% i stedet for decimaler.

Counter-komponenten gør det samme, bare med hele tal i stedet for procent.

## Grid

For at beholde samme struktur i gennem sitet, så har jeg brugt grid-template-columns: 1fr minmax(0, 1200px) 1fr i gennem største delen af projektet.

```css
.team-container {
  display: grid;
  grid-template-columns: var(--gtc-1200);
}

.team-header {
  grid-column: 2;
}
```

På den måde får jeg centreret indhold gennem hele sitet, med white space i siderne.

Der er også flere steder på sitet, hvor jeg bruger grid til at stable billeder, svg'er og div'er:

```css
.image-stack {
  display: grid;
}

.image-stack > * {
  grid-area: 1 / 1;
}
```

Her styler jeg alle children til at ligge i samme kolonne og række.

## Props

Både til mit Layout.astro og Section.astro har jeg brugt props til at styre nogle parametre.

I mit layout har jeg brugt props til at styre titlen på siden.

```astro
---
interface Props {
  title?: string;
}
const { title = "AskExperts" } = Astro.props;
---

<html lang="en">
  <head>
    <title>{title}</title>
  </head>
```

Her kalder jeg den property som er givet på Layout-tag på hver side `<Layout title="About Us - AskExperts">`

I Section.astro komponentet har jeg brugt props til at styre baggrundsfarverne af hver sektion.

```astro
---
interface Props {
  background?: "dark" | "light" | "grey" | "yellow";
}

const { background = "dark" } = Astro.props;
---

<section class:list={["section", background]}>
  <slot />
</section>
```

## Udfordringer

**Subgrid**: Prøvede at bruge subgrid i flere komponenter, men det virkede kun i CaseStudyArticle. I TeamSingle gav det mærkelige resultater så jeg droppede det. Generelt har det været svært at få grid layouttet til at gøre, som jeg gerne ville have at det skulle gøre.

Det er først længere inde i min proces, at jeg begynder at forstå pointen med det. Jeg kunne have brugt subgrid mere konsekvent gennem hele layoutet, hvis jeg havde sat grid-template-columns: var(--gtc-1200) på en global wrapper-komponent, kunne child-komponenter have arvet layouttet via subgrid i stedet for at definere var(--gtc-1200) flere gange

**Scroll animations**: animation-range var svær at få til at gøre som jeg ville have. Skulle eksperimentere meget for at få den rigtige animation.

Jeg eksperimenterede også med scroll-state queries, men kunne få den rigtige styling på de kort jeg prøvede at lave, så jeg fik AI til at generere noget simpelt javaScript til at håndtere disse animationer.

**Container queries**: Det var svært at forstå opstilling af container queries til at starte med, da jeg flere gange glemte at bruge en wrapper til at definerer container-type og container-name. Efter at have brugt den flere gange, så synes jeg at have fået meget bedre styr på funktionaliteten af det.

## Links

Live site: https://askexpert-opgave.netlify.app/
GitHub: https://github.com/buchhavee/fd-opgave-skabelon
