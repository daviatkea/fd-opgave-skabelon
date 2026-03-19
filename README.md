Ida og Rosas opgave.

# Ida og Rosas projekt: Fra Figma til Kode

I denne opgave har vi arbejdet med transformationen fra en færdigdesignet Figma-løsning til en fuldt funktionel hjemmeside, med særligt fokus på avanceret CSS og Astro-frameworket. Efter 14 dages intens undervisning i teknikker som `@container`, Defensiv CSS og kodeorganisering, har vi brugt denne opgave til at teste og konsolidere vores nye evner.

## Refleksion over løsningen

Der har været mange udfordringer undervejs. Vi har løbende refaktoreret vores kode, efterhånden som vi fik en dybere forståelse for struktur. Eksempelvis i sektionerne **Hero** og **WhatToExpect**, hvor vi i de tidlige stadier havde et komplekst og gentagende grid-hierarki, har vi nu implementeret **Subgrid** for at skabe en mere ren og overskuelig kodebase.

En stor succes har været overgangen fra faste værdier til et professionelt system af **Design Tokens**, hvilket har gjort flowet i vores arbejde markant bedre.

---

## Udvalgte kodestumper og teknikker

### 1. Globalt Grid-system med Subgrid

Vi har opbygget et "Full-bleed" grid på `body`, som gør det muligt for alle sektioner at flugte perfekt, uanset om indholdet skal centreres eller gå fra kant til kant.

CSS
header, main, footer {
grid-column: full-bleed;
display: grid;
grid-template-columns: subgrid;
}

### 2.

I vores Experience-sektion har vi implementeret animerede **tal-tællere** udelukkende ved hjælp af CSS.

CSS
@property --animatedNumber {
syntax: "<number>";
initial-value: 0;
inherits: true;
}

.stat-circle {
animation: countUp 2.5s ease-out forwards;
}
Hvorfor det er brugbart, er fordi det giver en god performativ animation, hvor browseren selv forstår og tæller talværdier.

### 3. Popover API & Anchor Positioning

Til vores login-dashboard har vi brugt de helt nye browser-API'er til positionering.

CSS
[popover] {
position-area: bottom span-left;
position-try: flip-inline;
}
Det gør at browseren selv håndtere, at elementet ligger i "Top Layer". Med position-try sørger vi for, at boksen automatisk "flipper" side, hvis der ikke er plads til venstre.

#### Defensiv CSS

Vi har tænkt defensivt for at sikre, at layoutet aldrig går i stykker ved uventet indhold:

_Fluid Typography_ her bruger vi clamp() (f.eks. --step-0) så tekststørrelser skalerer trinløst mellem mobil og desktop uden brug af utallige media queries.

_Flex-wrap & Aspect-ratio_ her bruger vi flex-wrap: wrap på vores cards og aspect-ratio: 1 på vores grafer for at sikre, at proportionerne holder, uanset skærmstørrelse.

_Safe Padding med Math_ I vores slider har vi brugt padding-inline: max(1rem, (100% - var(--content-width)) / 2); for at sikre, at indholdet altid flugter med teksten, men aldrig rammer kanten på mobil.

##### Progressive Enhancement

Løsningen er bygget til at fungere for alle, men giver ekstra lækkerhed i moderne browsere:

View Transitions: Vi har implementeret @view-transition { navigation: auto; } for bløde overgange mellem sider.

Scroll Snapping: Vores slider bruger scroll-snap-type, som giver en "app-agtig" følelse på touch-enheder, men stadig fungerer som almindelig scroll i ældre browsere.

###### Organisering af CSS

Vores CSS er organiseret i tre niveauer:

Globalt _(Primitives & Tokens)_: Alle grundfarver og rå værdier defineres først, hvorefter de tildeles funktionelle navne som --color-action. Som også gør det nemmere for flere personer at læse og forstå vores kode, a vores tokens og variabler har ret indikerende navne for deres funktioner.
Eksempelvis vores font classes, som er struktureret efter 1. Fontfamilt 2. fontsize 3. fontweight og 4. color. --lato-18-semibold-white.

Komponent-specifitet bruger vi Astros Scoped CSS, så stylingen i f.eks. CoreValues.astro ikke påvirker andre elementer på siden.

_Data-drevet_ Ved at mappe over JSON-filer (f.eks. financialProjections.json) adskiller vi indhold fra design, hvilket gør koden DRY (Don't Repeat Yourself) og let at vedligeholde og mere bæredygtig.

I denne opgave har vi arbejdet med hvordan man går fra en færdig designet figmaløsning til en færdigkodet hjemmeside, med fokus på CSS. Efter omkring 14 dages intens undervisning i @containers, Defensiv Css, kode organiserig og massere af løsninger til CSS, stod denne opgave til at udfordre og bruge vores evner og nylærte teknikker.

# Reflekter kort men fagligt over jeres løsning med henblik på udfordringerne og successerne ved opgaven.

Der har været mange udfordriner i gennem denne opgave. Nogen vi har måtte give afkald på i slutspurten og andre vi har løst med stolthed.
Et par punkter, vi fælles har rykket os på, er stæder som at forstå CSS og læse kode bedere, på generelt plan. Vores forståelse af kodeopsætningen og strukturen er noget som vi, bare på denne uge, har lavet om i flere gange, fordi vi indervejs i processen, har fundet en berede sturktur, som gjore koden mere overkuelig at arbejde med og flowet bedere.

Eksempelvis i hero-sectionen og WhatToExpect, kan man i tidligere brances se en masse uoverskuelig hieraki og grid, som i virkeligheden gentager sig selv mere end nødvendig. Her har vi været inde og restrukturere nogle punkter, for at udnytte subgrid og generelle hieraki principper.

# Fremhæv specifikke kodestumper, der illustrerer brugen af forskellige teknikker og principper fra undervisningen, samt hvorfor de er brugbare.

# Fremhæv steder, hvor Defensive CSS er tænkt ind.

# Reflekter over, hvor i løsningen, der er brugt progressive enhancement og gennemgå kort, hvordan det er løst.

# Forklar, hvordan du har organiseret din CSS; hvornår er det globalt, og hvornår er det komponent-specifikt.
