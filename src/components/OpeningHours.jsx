import React from "react";
import { hours } from "../menuData";
import "./OpeningHours.css";

export default function OpeningHours() {
  return (
    <section className="hours-section">
      <h2>Opening Hours</h2>
      <table className="hours-table">
        <tbody>
          {hours.map((row) => (
            <tr key={row.days}>
              <td>{row.days}</td>
              <td>{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="contact-info">
        <p>123 Main St, Your City</p>
        <p>Phone: (555) 123-4567</p>
        <p>Email: hello@localcafe.com</p>
      </div>
    </section>
  );
} 