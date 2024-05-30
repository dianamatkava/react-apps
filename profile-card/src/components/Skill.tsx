import { React } from "react";

export function Skill({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      {skill.skill}
      <span>
        {skill.level === "advanced" && "💪"}
        {skill.level === "intermediate" && "👍"}
        {skill.level === "beginner" && "👶"}
      </span>
    </div>
  );
}
