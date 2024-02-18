import React from "react";
// import ReactPlayer from "react-player"; // Remove ReactPlayer import

export default function AboutInfo() {
  return (
    <main className="about-section">
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          height: "auto",
        }}
      >
        <img
          src="img/about.png"
          alt="Video"
          style={{ width: "100%", height: "auto" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), hsla(228, 65%, 21%, 0.6))",
          }}
        />
        <div
          style={{
            position: "absolute",
            padding: "10vw",
            top: "22%",
            left: "50%",
            right: "-40%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            fontSize: "3vw",
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
            animation: "fadeInUpward 1s ease-out forwards",
            transition: "color 0.5s ease, transform 0.5s ease",
          }}
        >
          At Seven Stars LLC, we don't just deliver goods; we deliver on our
          promise to provide comfort, care, and freedom every step of the way.
        </div>
        <div
          style={{
            position: "absolute",
            top: "83%",
            left: "50%",
            width: "100vw",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            fontSize: "4vw",
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
            animation: "fadeInUpward 1s ease-out forwards",
            transition: "color 0.5s ease, transform 0.5s ease",
          }}
        >
          Experience the difference with us today.
        </div>
      </div>

      <section className="section-about">
        <div className="u-center-text u-margin-bottom-8">
          <h2 className="heading-secondary">
            About{" "}
            <span className="heading-secondary-span">
              Seven Stars Logistics LLC
            </span>
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <p className="about-paragraph">
              We take satisfaction in adopting a comprehensive strategy when
              tackling assignments, experimenting with novel workflow solutions
              for our internal staff, truck driver team, and partners.
            </p>
            <p className="about-paragraph">
              Our team's expertise dates back to 2020, when we entered the
              market with passion and curiosity, aiming to achieve new heights
              and develop a fresh vision. This vision focuses on delivering
              exceptional freight transport operations and implementing creative
              solutions to accomplish this goal.
            </p>
            <p className="about-paragraph">
              Beginning with a team of 5 individuals in a small office located
              in Livonia, MI, we have expanded to over 20 employees and
              established 2 offices within the last 4 years. Despite fluctuating
              market conditions, we have successfully persevered by leveraging
              the collective skills of our expert team and implementing
              innovative strategies developed through years of industry
              experience.
            </p>
          </div>
          <div className="col-1-of-2 section-about__pics">
            <div className="composition">
              <img
                src="img/red.jpg"
                alt="photo1"
                className="composition__photo composition__photo--p2"
              />
              <img
                src="img/blue_full.jpg"
                alt="photo2"
                className="composition__photo composition__photo--p1"
              />
              <img
                src="img/white1.jpg"
                alt="photo3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
