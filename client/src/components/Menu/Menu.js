import React, { useState } from "react";
import { cow } from "../../assets";
// import "./Menu.css"

function Menu() {
  const nav = [
    { img: cow, link: "#", text: "Line Item 1" },
    { img: cow, link: "#", text: "Line Item 2" },
    { img: cow, link: "#", text: "Line Item 3" },
    { img: cow, link: "#", text: "Line Item 4" },
    { img: cow, link: "#", text: "Line Item 5" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false)
  const show = () => setIsOpen(true)

  return (
    <nav>
      <button onClick={toggle}>
        {isOpen ? 'close' : 'open'}
      </button>
      {isOpen && <ul>
        {nav.map((navigation) => (
          <li key={navigation.text}>
            <img src={nav.img} alt="icon"/>
            <a href={nav.link} onClick={toggle} onBlur={hide} onFocus={show}>{navigation.text}</a>
          </li>
        ))}
      </ul>}
    </nav>
  );
}

export default Menu;
