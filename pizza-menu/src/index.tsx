import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./pages/Home.tsx";
import { Header } from "./components/shared/Header.tsx";
import { Footer } from "./components/shared/Footer.tsx";

import "./index.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
