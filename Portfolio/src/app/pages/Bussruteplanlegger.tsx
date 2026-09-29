import { FaInstagram, FaLinkedin } from "react-icons/fa";

export function Bussruteplanlegger() {
  return (
    <>
    <main>
      <a href="/">← Tilbake</a>

      <h1>Kollektivløsning for Norge</h1>
      <a href="https://github.com/Jan-Fredrik/SET-9">Se koden på Github</a>
      <p>
        Skoleprosjekt i Software Engineering & Testing ved Høgskolen i Østfold,
        laget sammen med Mahruhk, Aron, Per Anders og Jan Fredrik.
      </p>

      <h2>Mål</h2>
      <p>
        Vi ville øve på en hel utviklingsprosess i gruppe, og samtidig vise hvordan
        kollektivtransport kan bli enklere og mer forutsigbar for flere brukergrupper,
        som rullestolbrukere, eldre og de som ikke snakker norsk.
      </p>

      <h2>Løsningen</h2>
      <p>
        En Java-prototype som kjører i terminalen og samler ruter, avganger og
        billettkjøp på ett sted.
      </p>
      <ul>
        <li>Reiseplanlegging med filter for tilgjengelighet</li>
        <li>Billetter lagres lokalt i en tekstfil, uten eksterne tjenester</li>
        <li>Enkelt tastaturstyrt grensesnitt</li>
        <li>Flere språk (norsk, engelsk, polsk) var planlagt, men er ikke implementert</li>
      </ul>

      <h2>Teknologi</h2>
      <p>Java, MySQL, IntelliJ og Maven. Bygget med MVC-arkitektur.</p>

      <h2>Arbeidsmåte</h2>
      <p>
        GitHub med en branching-strategi inspirert av Git Flow, og Azure DevOps
        til backlog og sprintplanlegging.
      </p>

      <h2>Veien videre</h2>
      <ul>
        <li>Sanntidsdata fra Entur sitt API</li>
        <li>Sikker betaling</li>
        <li>Grafisk brukergrensesnitt</li>
        <li>Kart og GPS</li>
        <li>Mer robust datalagring i database eller sky</li>
      </ul>
    </main>


    <footer>
    <a href="https://www.linkedin.com/in/marius-larsen-6a28171a1/" aria-label="LinkedIn"><FaLinkedin size={28} />LinkedIn</a>
    <a href="https://www.instagram.com/mariuslarsen03/" aria-label="Instagram" ><FaInstagram size={28}/>Instagram</a>
    </footer>
    </>
  );
}