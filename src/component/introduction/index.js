import React from "react";
import { Link } from "react-router-dom";

import max from '../../assets/max.png';
import "./introduction.css";

export default function Introduction() {
  return (
    <section className="section-help">
      <div>
        <div className="logo">Thrivetalk</div>
        <h1 className="page__title">HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
        <div className="issues">
          Our highly talented therapists can help you with a range of issues
          including relationships, sex, PTSD, depression, social anxiety, or
          even just caring for yourself more.
        </div>
        <div className="block__who">
          <Link to="/who" className="primaryButton">
            WHO AM I
          </Link>

          <Link to="/what" className="primaryButton">
            WHAT DO I DO
          </Link>
        </div>
      </div>
      <div className="block__3">
        <img src={max} alt="Student" />
      </div>
    </section>
  );
}
