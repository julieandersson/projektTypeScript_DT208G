# Moment 5 PROJEKT - DT208G - Programmering i TypeScript
## Projektwebbplats
Denna uppgift ingår i moment 5 i kursen DT208G och innefattar en projektwebbplats. Webbplatsen är skapad för ett fiktivt universitet som heter "Stjärnklara Universitet". På webbplatsen kan besökare läsa ut en lista med tillgängliga kurser samt skapa ett eget ramschema av en uppsättning kurser. 

Utöver detta finns totalt 7 andra undersidor på webbplatsen med information om universitetet. 

## Sidinformation
- **Startsid**a - information om universitetet
- **Utbildning** - där kurslistan visas
- **Ramschema** - där användaren kan hitta sitt eget ramschema
- **Kontakt** - kontaktinformation
- **Anmälan** - information om anmälan till universitetet
- **Bibliotek** - information om universitetets bibliotek
- **Studentkår** - information om universitetets studentkåt och vad det innebär att bli medlem
- **Campus** - information om universitetets campus
- **Stipendier** - information om stipedier

## Funktionalitet
Användaren kan...
- Läsa ut en lista med alla tillgängliga kurser
- Söka på kurskod eller kursnamn
- Filtrera kurser baserat på valt ämne
- Sortera kurskod, kursnamn, poäng och ämne genom att klicka på rubriken i tabellen. 
- Skapa ett eget ramschema genom att klicka på "Lägg till" i listan med kurser. (alla tillagda kurser lagras i LocalStorage)
- Ta bort kurser från sitt ramschema genom att klicka på knappen "Ta bort" i tabellen.
- Bläddra mellan olika sidor för att se fler kurser med hjälp av paginering. På varje sida visas 30 kurser. 

## Använda tekniker
Denna projektwebbplats är skapat med ramverket Angular för att bygga en dynamisk och responsiv webbapplikation där innehållet uppdateras effektivt. Routing, databindning, NgxPagination, interface och services är verktyg som har använts för att navigera mellan sidor, jobba med data och få komponenter att kommunicera med varandra. Databindning ser till att data automatiskt uppdateras mellan det som syns och det som händer i bakgrunden, och services sköter kommunikationen med extern data.

Typescript har använts för funktionaliteten och HTML och SCSS har använts för innehåll och tydlig CSS- struktur. Parcel har använts för en automatiserad utvecklingsmiljö och Github har använts för regelbundna commits av arbetet. Webbplatsen är publicerad via Netlify.

## Skapad av:
- Julie Andersson
- Webbutvecklingsprogrammet på Mittuniversitetet i Sundsvall
- Moment 5 Projektwebbplats - kurs DT208G - Programmering i TypeScript