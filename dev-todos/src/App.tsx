import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Todos from "./components/Todos";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
