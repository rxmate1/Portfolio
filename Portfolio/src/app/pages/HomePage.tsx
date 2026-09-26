"use client"

import {skills } from "@/data/skills";
import {Skills} from "@/app/pages/Skills";

export function HomePage() {
  return (
    <>
      <header>
        <img
          src="/Profil.jpg"
          alt="Profilbilde av meg selv"
          className="img-size-profile"
        />
      </header>

      <main>
        <section className="colorred">
          <h1>Hei, jeg heter Marius Walberg Larsen</h1>
        </section>

        <section>
          <p>Jeg studerer Informatikk ved Høgskolen i Østfold</p>
          <p>Velkommen til portfolioen min.</p>
        </section>

        <section>
          <a href="https://github.com/rxmate1">GitHub</a>
          <h2>Prosjekter</h2>
          <h3>Bussruteplanlegger - Software Engineering og Testing</h3>
          <h3>mySQL database med skismøringsdata - Databaser</h3>
          <h3>Nettside - Webutvikling</h3>
        </section>
        <section>
          <h2>Ferdigheter</h2>
          <p>Ferdighetene er basert på nivåer 1-5 </p>
          <Skills Skills={skills}/>
        </section>
      </main>

      <footer>

      </footer>
    </>
  );
}