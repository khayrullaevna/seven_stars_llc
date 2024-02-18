import React from "react";

export default function ContactHead() {
  return (
    <div className="contactHeader">
      <h1 className="contactHeader__title">Let's Stay in Touch</h1>
      <div className="contactHeader__card">
        <p className="contactHeader__name">Gmail:</p>
        <p className="contactHeader__answer">
          <a href="mailto:hr@7starsllc.com">hr@7starsllc.com</a>
        </p>
        <p className="contactHeader__name">Telegram Link:</p>
        <p className="contactHeader__answer">
          <a href="https://t.me/alexegamov">Alex Egamov</a>
        </p>
        <p className="contactHeader__name">Phone Number:</p>
        <p className="contactHeader__answer">
          <a href="tel:+1-800-470-0804">+1-800-470-0804</a>{" "}
        </p>
      </div>
    </div>
  );
}
