import React from "react";
import "./introduction.css";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <div className="block">
      <div className="block__2">
        <h1 className="logo">Thrivetalk</h1>
        <div className="helping">HELPING YOU THRIVE IN ALL AREAS OF LIFE</div>
        <div className="issues">
          Our highly talented therapists can help you with a range of issues
          including relationships, sex, PTSD, depression, social anxiety, or
          even just caring for yourself more.
        </div>
        <div className="block__who">
          <div className="border__who">
            <Link to="/who" className="who__am">
              WHO AM I
            </Link>
          </div>
          <Link to="/what" className="what">
            WHAT DO I DO
          </Link>
        </div>
      </div>
      <div className="block__3"></div>
    </div>
  );
}
