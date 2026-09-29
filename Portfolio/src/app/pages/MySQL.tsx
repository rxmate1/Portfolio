import { FaInstagram, FaLinkedin } from "react-icons/fa";

export function MySQL() {
  return (
    <>
    <main>
      <a href="/">← Tilbake</a>

      <h1>Skismøring-database</h1>
      <p>
        Eksamensprosjekt i databasesystemer ved Høgskolen i Østfold, laget
        sammen med Victor Tønneberg.
      </p>

      <h2>Mål</h2>
      <p>
        Vi skulle lage en godt strukturert database som hjelper brukeren å velge
        riktig skismøring ut fra forholdene og egne behov. Fokuset var lite
        duplisert data, god dataintegritet og fleksible spørringer.
      </p>

      <h2>Løsningen</h2>
      <p>
        En normalisert MySQL-database med seks tabeller, der skismøring kobles
        til kategori, snøtype og ferdighetsnivå.
      </p>
      <ul>
        <li>Normalisert helt opp til BCNF</li>
        <li>Mange-til-mange-relasjoner løst med koblingstabeller</li>
        <li>View som samler data fra alle tabellene i ett søk</li>
        <li>Eget view som kun viser produkter for nybegynnere</li>
      </ul>

      <h2>Teknologi</h2>
      <p>MySQL og MySQL Workbench.</p>

      <h2>Arbeidsmåte</h2>
      <p>
        Vi startet med én stor tabell og normaliserte den steg for steg. ER-modellen
        ble tegnet i Workbench og databasen generert med Forward Engineering.
        Til slutt la vi inn testdata og verifiserte løsningen med views og
        spørringer.
      </p>

      <h2>Veien videre</h2>
      <ul>
        <li>Flere views for andre ferdighetsnivåer</li>
        <li>Flere produkter og snøtyper i datasettet</li>
        <li>Et brukergrensesnitt som bruker databasen</li>
      </ul>
    </main>
    
    <footer>
    <a href="https://www.linkedin.com/in/marius-larsen-6a28171a1/" aria-label="LinkedIn"><FaLinkedin size={28} />LinkedIn</a>
    <a href="https://www.instagram.com/mariuslarsen03/" aria-label="Instagram" ><FaInstagram size={28}/>Instagram</a>
    </footer>
</>
  );
}