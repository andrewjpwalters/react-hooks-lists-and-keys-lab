import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const hrefs = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ))

  return <nav>{hrefs}</nav>;
}

export default NavBar;
