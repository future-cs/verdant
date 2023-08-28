import "./How.css";

import { GiMonsteraLeaf, GiOakLeaf, GiZigzagLeaf } from "react-icons/gi";

export default function How() {
  return (
    <div className="section-how" id="how">
      <div className="how" id="how">
        <div className="how-header">
          <span className="how-subhead">
            The Best Databade in the Whole World
          </span>
          <h2>Celebrate the Builty of Plants</h2>
        </div>
        <div className="section-how-content">
          <div className="section-how-img-div">
            <img
              className="section-how-img"
              src="img/how--1.webp"
              alt="Potted Plant."
            ></img>
          </div>
          <div className="section-how-text">
            <div className="section-how-icon-div">
              <GiMonsteraLeaf className="section-how-icon" />
            </div>
            <h3>Dive into Technical Expertise</h3>
            <p>
              Explore our website's goldmine of plant information, perfect for
              beginners and experts alike. Discover the secrets of plant anatomy
              and the captivating world of photosynthesis through our
              easy-to-understand articles. Whether you're identifying plant
              types or learning advanced growing methods, our carefully selected
              content satisfies your curiosity for plant knowledge.
            </p>
          </div>{" "}
          <div className="section-how-text">
            <GiOakLeaf className="section-how-icon" />
            <h3>FAQs for Curious Minds</h3>
            <p>
              Ever thought about why your succulent isn't doing well? Or maybe
              you're unsure about how much light and water your indoor plants
              need? Our FAQ has answers. With help from experienced plant
              experts, we've gathered practical solutions for your plant
              questions. Say goodbye to confusion and grow your plant care
              confidence.
            </p>
          </div>
          <div className="section-how-img-div faq">
            <img
              className="section-how-img"
              src="img/how--4.webp"
              alt="Potted Plant."
            ></img>
          </div>
          <div className="section-how-img-div">
            <img
              className="section-how-img"
              src="img/how--3.webp"
              alt="Potted Plant."
            ></img>
          </div>
          <div className="section-how-text">
            <GiZigzagLeaf className="section-how-icon" />
            <h3>Insightful Articles for Green Inspiration</h3>
            <p>
              Dive into engaging articles that highlight plant beauty and
              complexity. Whether demystifying carnivorous plants or sharing
              gardening's calming benefits, our articles aim to inspire and
              educate, fueling your passion for all things botanical. Carefully
              crafted, they blend science, history, and useful tips to deepen
              your plant knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
