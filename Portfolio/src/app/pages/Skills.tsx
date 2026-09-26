"use client"
import { useState } from "react";


export type category = "Rammeverk" | "Språk" | "Verktøy" | "Andre erfaringer";

export interface SkillProps {
    Name: string
    Level: number;
    Category: category;
}

export function Skills({ Skills }: { Skills: SkillProps[] }) {

    
   const [openCategory, setOpenCategory] = useState<category | null>(null);

  const språkSkills = Skills.filter(skill => skill.Category === "Språk");
  const rammeverkSkills = Skills.filter(skill => skill.Category === "Rammeverk");
  const verktøySkills = Skills.filter(skill => skill.Category === "Verktøy");
  const andreErfaringerSkills = Skills.filter(skill => skill.Category === "Andre erfaringer");

  return (
    <>
      <button onClick={() => setOpenCategory("Språk")}>Språk</button>
      {openCategory === "Språk" && (
      <ul className="skills-list">
        {språkSkills.map(skill => (
          <li key={skill.Name} className="skill-item">
            <span className="skill-name">{skill.Name}</span>
            <span className="skill-level">Nivå {skill.Level}/5</span>
            <span className="skill-category">{skill.Category}</span>
          </li>
        ))}
      </ul>
    )}
      <button onClick={() => setOpenCategory("Rammeverk")}>Rammeverk</button>
      {openCategory === "Rammeverk" && (
      <ul className="skills-list">
        {rammeverkSkills.map(skill => (
          <li key={skill.Name} className="skill-item">
            <span className="skill-name">{skill.Name}</span>
            <span className="skill-level">Nivå {skill.Level}/5</span>
            <span className="skill-category">{skill.Category}</span>
          </li>
        ))}
      </ul>
      )}

      <button onClick={() => setOpenCategory("Verktøy")}>Verktøy</button>
      {openCategory === "Verktøy" &&(
      <ul className="skills-list">
        {verktøySkills.map(skill => (
          <li key={skill.Name} className="skill-item">
            <span className="skill-name">{skill.Name}</span>
            <span className="skill-level">Nivå {skill.Level}/5</span>
            <span className="skill-category">{skill.Category}</span>
          </li>
        ))}
      </ul>
      )}

      <button onClick={() => setOpenCategory ("Andre erfaringer")}>Andre erfaringer</button>
      {openCategory === "Andre erfaringer" && (
      <ul className="skills-list">
        {andreErfaringerSkills.map(skill => (
          <li key={skill.Name} className="skill-item">
            <span className="skill-name">{skill.Name}</span>
            <span className="skill-level">Nivå {skill.Level}/5</span>
            <span className="skill-category">{skill.Category}</span>
          </li>
        ))}
      </ul>
      )}
    </>
  );
}