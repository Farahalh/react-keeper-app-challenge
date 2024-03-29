import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import CreateNote from "./CreateNote";

export default function App() {
  return (
    <div id="root" className="root">
      <Header />
      {notes.map(CreateNote)}
      <Footer />
    </div>
  );
}
