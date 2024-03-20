import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

export default function App() {
  return (
    <div id="root" className="root">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}
