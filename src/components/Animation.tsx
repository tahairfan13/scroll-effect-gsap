import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function ScrollTriggerAnimations() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: containerRef.current,
    });

    var color1 =
      "linear-gradient(135deg,  rgba(255,174,39,1) 0%,rgba(222,73,109,1) 100%)";
    var color2 =
      "linear-gradient(135deg,  rgba(222,73,109,1) 0%,rgba(171,73,222,1) 100%)";
    var color3 =
      "linear-gradient(135deg,  rgba(171,73,222,1) 0%,rgba(73,84,222,1) 100%)";

    gsap.from(".container", {
      backgroundImage: color1,
      duration: 1,
      ease: "power0.inOut",
    });

    gsap.fromTo(
      ".container",
      {
        background: color1,
        scrollTrigger: {
          trigger: ".fistSection",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          toggleActions: "restart pause reverse pause",
          onEnter: () => setActiveSection(0),
        },
      },
      {
        backgroundImage: color2,
        duration: 1,
        ease: "power0.inOut",
        scrollTrigger: {
          trigger: ".secondSection",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          toggleActions: "restart pause reverse pause",
          onEnter: () => setActiveSection(1),
        },
      }
    );

    gsap.fromTo(
      ".container",
      {
        backgroundImage: color2,
        scrub: 1,
      },
      {
        backgroundImage: color3,
        duration: 1,
        ease: "power0.inOut",
        scrollTrigger: {
          trigger: ".thirdSection",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          toggleActions: "restart pause reverse pause",
          onEnter: () => setActiveSection(2),
        },
      }
    );

    gsap.to(".secondSection", {
      scrollTrigger: {
        trigger: ".secondSection",
        toggleActions: "restart pause reverse pause",
      },
      duration: 1,
      ease: "power0.inOut",
    });
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {/* Timeline */}
      <div className="timeline">
        <a
          className={`timeline__item ${activeSection === 0 && "active"}`}
          href="#fistSection"
          onClick={() => {
            setActiveSection(0);
          }}
        >
          <span className="timeline__item__dot"></span>
        </a>
        <a
          className={`timeline__item ${activeSection === 1 && "active"}`}
          href="#secondSection"
          onClick={() => {
            setActiveSection(1);
          }}
        >
          <span className="timeline__item__dot"></span>
        </a>
        <a
          className={`timeline__item ${activeSection === 2 && "active"}`}
          href="#thirdSection"
          onClick={() => {
            setActiveSection(2);
          }}
        >
          <span className="timeline__item__dot"></span>
        </a>
      </div>
      <section className="panel fistSection" id="fistSection">
        <p>This is Section 1</p>
      </section>
      <section className="panel secondSection" id="secondSection">
        <p>TThis is Section 2</p>
      </section>
      <section className="panel blue thirdSection" id="thirdSection">
        <p>This is Section 3</p>
      </section>
    </div>
  );
}

export default ScrollTriggerAnimations;
