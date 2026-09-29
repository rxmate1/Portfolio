import { FaInstagram, FaLinkedin } from "react-icons/fa";

export function Nettside() {
  return (
    <>
    <main>
      <a href="/">← Tilbake</a>

      <h1>Nettbutikk – webutvikling</h1>
        <a href="https://github.com/rxmate1/Eksamen2024Webutvikling">
          Se koden på GitHub </a>
      <p>
        Eksamensprosjekt i webutvikling ved Høgskolen i Østfold, laget alene.
      </p>

      <h2>Mål</h2>
      <p>
        Bygge en responsiv og tilgjengelig nettbutikk fra bunnen av med HTML og
        CSS, uten rammeverk, med fokus på semantisk struktur og god brukeropplevelse
        på både mobil og desktop.
      </p>

      <h2>Løsningen</h2>
      <p>En nettbutikk-mal med tre sider:</p>
      <ul>
        <li>Forside med toppbilde, produktkort, populære kategorier og anmeldelser</li>
        <li>Produktside med størrelsesvelger og lignende produkter</li>
        <li>Kasseside med handlekurv og skjema for leveringsadresse og kontaktinfo</li>
        <li>Tilgjengelighetserklæring lenket fra bunnteksten</li>
      </ul>

      <h2>Teknologi</h2>
      <p>
        HTML, CSS (Flexbox, Grid og media queries for flere skjermstørrelser) og
        Font Awesome for ikoner.
      </p>

      <h2>Arbeidsmåte</h2>
      <p>
        Semantiske elementer som header, main, nav, article og footer, alt-tekster
        på alle bilder, og skjemaer med labels og validering (required og riktige
        input-typer for e-post og telefon). Bildene er hentet fra Pixabay og
        kreditert i koden.
      </p>

      <h2>Veien videre</h2>
      <ul>
        <li>JavaScript for bildeslider, handlekurv og søk</li>
        <li>Ekte produktdata i stedet for plassholdertekst</li>
        <li>Backend og betaling</li>
      </ul>
    </main>
    
    <footer>
    <a href="https://www.linkedin.com/in/marius-larsen-6a28171a1/" aria-label="LinkedIn"><FaLinkedin size={28} />LinkedIn</a>
    <a href="https://www.instagram.com/mariuslarsen03/" aria-label="Instagram" ><FaInstagram size={28}/>Instagram</a>
    </footer>
    </>
  );
}