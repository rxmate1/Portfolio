import {kontakt } from "@/data/kontakt";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export interface KontaktProps {
    navn: string;
    telefonnummer: string;
    epost: string;
}

export function Kontakt ({navn, telefonnummer, epost}: KontaktProps) {
    return (
        <>
        <main >
            <a href="/">← Tilbake</a>
            <h1>Kontaktinformasjon</h1>
            <p>Navn: {navn}</p>
            <p>Telefonnummer: {telefonnummer}</p>
            <p>E-post: {epost}</p>
            <section className="Fiks-ikoner">
                <a className="Fiks-ikoner-1" href="https://www.linkedin.com/in/marius-larsen-6a28171a1/" aria-label="LinkedIn"><FaLinkedin size={28} />LinkedIn</a>
                <a className="Fiks-ikoner-1" href="https://www.instagram.com/mariuslarsen03/" aria-label="Instagram" ><FaInstagram size={28}/>Instagram</a>
            </section>
        </main>
        </>
    )
}