import React from "react";
import { menu } from "../menuData";
import "./Menu.css";

const categories = [
  ...new Set(menu.map((item) => item.category)),
];

export default function Menu() {
  return (
    <section className="menu-section">
      <h2>Menu</h2>
      <div className="menu-categories">
        {categories.map((cat) => (
          <div key={cat} className="menu-category">
            <h3>{cat}</h3>
            <ul>
              {menu
                .filter((item) => item.category === cat)
                .map((item) => (
                  <li key={item.name}>
                    <span className="menu-item-name">{item.name}</span>
                    <span className="menu-item-price">{item.price}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 