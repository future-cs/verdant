import React, { useState } from "react";
import "./CTA.css";

function CTA() {
  const [ctaMessage, setCtaMessage] = useState(false);

  return (
    <section className="cta-section" id="signup">
      <div className="cta-div">
        <div className="cta-inner-div">
          <div className={ctaMessage === false ? "footer-cta-left" : "hidden"}>
            <h3 className="cta-h3">
              Sign up to receive an daily email from us.
            </h3>
            <div className="footer-cta-signup">
              <input placeholder="john.smith@email.com"></input>
              <button
                className="footer-cta--btn"
                onClick={() => setCtaMessage(!ctaMessage)}
              >
                SIGN UP
              </button>
            </div>
          </div>
          <div className={ctaMessage === true ? "footer-cta-left" : "hidden"}>
            <span className="cta-greets">Thank you!</span>
          </div>
          <div className="footer-cta-right">
            <div className="footer-cta-inner-right">
              <img
                className="cta-img"
                src="img/2.webp"
                alt="Computer Drawing"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
