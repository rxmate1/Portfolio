"use client"
import { useState } from "react";


export type category = "Rammeverk" | "Språk" | "Verktøy" | "Andre erfaringer";

export interface SkillProps {
    Name: string
    Level: number;
    Category: category;
}



export function Skills({ Skills }: { Skills: SkillProps[] }) {

    
  const [openCategories, setOpenCategories] = useState<category[]>([]);

  function toggleCategory (cat: category) {
  if (openCategories.includes(cat)) {
    setOpenCategories(openCategories.filter(c => c != cat))
  } 
  else {
    setOpenCategories([...openCategories, cat]);
  }
}

  const språkSkills = Skills.filter(skill => skill.Category === "Språk");
  const rammeverkSkills = Skills.filter(skill => skill.Category === "Rammeverk");
  const verktøySkills = Skills.filter(skill => skill.Category === "Verktøy");
  const andreErfaringerSkills = Skills.filter(skill => skill.Category === "Andre erfaringer");

  return (
    <>
      <button aria-expanded={openCategories.includes("Språk")} onClick={() => toggleCategory("Språk")}>Språk</button>
      {openCategories.includes("Språk") && (
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
      <button aria-expanded={openCategories.includes("Rammeverk")} onClick={() => toggleCategory("Rammeverk")}>Rammeverk</button>
      {openCategories.includes("Rammeverk") && (
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

      <button aria-expanded={openCategories.includes("Verktøy")} onClick={() => toggleCategory("Verktøy")}>Verktøy</button>
      {openCategories.includes("Verktøy") && (
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

      <button aria-expanded={openCategories.includes("Andre erfaringer")} onClick={() => toggleCategory("Andre erfaringer")}>Andre erfaringer</button>
      {openCategories.includes("Andre erfaringer") && (
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