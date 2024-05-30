import { React } from "react";

interface IntroProps {
  name: string;
  description: string;
}

export function Intro({ name, description }) {
  return (
    <div className="data">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}
