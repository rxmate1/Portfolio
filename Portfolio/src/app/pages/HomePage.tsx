"use client"

import {skills } from "@/data/skills";
import {Skills} from "@/app/pages/Skills";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

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
          <h1>Marius Walberg Larsen</h1>
        </section>

        <section className="Velkommen">
          <p>Studieretning: Informatikk</p>
          <p>Velkommen til portfolioen min.</p>
          <a href="/Kontakt">Trykk her for kontaktinformasjon</a>
        </section>

        <section>
          <a href="https://github.com/rxmate1">GitHub</a>
          <h2>Prosjekter</h2>
          <h3><a href="/Bussruteplanlegger" className="project-card">Bussruteplanlegger</a></h3 >
          <h3><a href="/MySQL" className="project-card">mySQL Prosjekt</a></h3>
          <h3> <a href="/Nettside" className="project-card"> Nettside </a></h3>
        </section>
        <section>
          <h2>Ferdigheter</h2>
          <p>Ferdighetene er basert på nivåer 1-5 </p>
          <Skills Skills={skills}/>
        </section>
      </main>

      <footer>
        <a href="https://www.linkedin.com/in/marius-larsen-6a28171a1/" aria-label="LinkedIn"><FaLinkedin size={28} />LinkedIn</a>
        <a href="https://www.instagram.com/mariuslarsen03/" aria-label="Instagram" ><FaInstagram size={28}/>Instagram</a>
      </footer>
    </>
  );
}