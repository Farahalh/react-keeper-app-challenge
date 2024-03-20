import React from "react";

export default function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&#169;{currentYear}</p>
    </footer>
  );
}
