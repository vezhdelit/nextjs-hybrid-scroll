import React from "react";
import styles from "./Header.module.scss";
import { NAV_ITEMS } from "@/constants";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a onClick={() => scrollToSection(item.id)}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
