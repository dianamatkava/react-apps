import { React } from "react";
import { Skill } from "./Skill.tsx";

export function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}
