import { StrictMode, React } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Profile } from "./components/Profile.tsx";

const profiles = [
  {
    name: "Diana Matkava",
    description:
      "I'm a Backend Developer specialized in writing server side web application logic, develop, debug and implement application projects, automation and creating API's using Django, FastAPI, Flask (REST API, GraphQL). Writing frontend using TS, React.",
    skills: [
      {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA",
      },
      {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D",
      },
      {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF",
      },
      {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33",
      },
      {
        skill: "React",
        level: "advanced",
        color: "#60DAFB",
      },
      {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00",
      },
    ],
    avatarImg: "./avatar_1.jpg",
  },
];

function App() {
  return (
    <>
      {profiles.map((profile) => {
        return <Profile profile={profile} />;
      })}
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
