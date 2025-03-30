import React from "react";
import Card from "react-bootstrap/Card";
import { FaBasketball } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";
import { IoMdFitness } from "react-icons/io";




function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, Je suis<span className="">Williams KOUTON </span>
            du <span className=""> Bénin.</span>
            <br />
            Je suis actuellement en recherche d'alternance pour septembre 2025.
            <br />
            Je suis en formation à la web académie epitech en développemnt web full stack.
            <br />
            <br />
            A part le code mes hobbies sont entre autre !
          </p>
          <ul>
            <li className="about-activity">
            <FaBasketball />
            Jouer au Basket ball
            </li>
            <li className="about-activity">
            <GiBookmarklet />
            Lire des scans
            </li>
            <li className="about-activity">
              <IoMdFitness /> Musculation
            </li>
          </ul>

          <p style={{ color: "#e7895d" }}>
            "J'aspire à développer des produits qui font la différence!"{" "}
          </p>
          <footer className="blockquote-footer">Williams</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
