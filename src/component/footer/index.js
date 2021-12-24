import React from "react";
import { Link } from "react-router-dom";

import woman from "../../assets/woman.png";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="foter">
      <div className="Rectangle_1">
        <div className="Rectangle_2">
          <img src={woman} alt="Peoples" />
        </div>
        <div className="Rectangle">
          <h2>SOME INFO</h2>
          <div>
            <br />
            <br />
            <br />
            <br />
            <div className="Rectangle_0">
              Lorem ipsum dolor sit amet,
              <br /> consectetuer adipiscing elit.
              <br /> Aenean commodo ligula
            </div>
          </div>
        </div>
        <div className="Rectangle">
          <h2>ENFOLD HEALTH</h2>
          <div>
            <br />
            <br />
            <br />
            <div className="Rectangle_0">
              Main Street 1, Olcott <br /> Buffalo, United States <br /> +555
              283 784 333 <br />
              <Link to="/https://www.google.com.ua/?hl=ru" className="office">
                office@enfold-health.com
              </Link>
            </div>
          </div>
        </div>
        <div className="Rectangle">
          <h2>OFFICE HOURS</h2>
          <div>
            <br />
            <br />
            <br />
            <br />
            <div className="Rectangle_0">
              Mo-Fr: 8:00-19:00 <br /> Sa: 8:00-14:00 <br /> Su: closed
            </div>
          </div>
        </div>
      </div>
      <div className="Rectangle_21">
        <div className="Copyright">Copyright - ThriveTalk 2017</div>
      </div>
    </footer>
  );
}
