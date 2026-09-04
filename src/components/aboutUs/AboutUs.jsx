import { useEffect, useRef, useState } from "react";
import "./AboutUs.css";
import aboutImg from "./1.png";

function Counter({ end, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const startTime = performance.now();

          const animate = (currentTime) => {
            const progress = Math.min(
              (currentTime - startTime) / duration,
              1
            );

            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={counterRef} className="about__number">
      {count}
    </span>
  );
}

function AboutUs() {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">About Us</h2>

        <div className="about__stats">
          <div className="about__stat">
            <div className="about__stat-top">
              <Counter end={8} />
              <span className="about__unit">year</span>
            </div>

            <p className="about__stat-text">
              We've come a long way from a 1-people company to winning at Webby.
            </p>
          </div>

          <div className="about__stat">
            <div className="about__stat-top">
              <Counter end={72} duration={2000} />
              <span className="about__unit">cars</span>
            </div>

            <p className="about__stat-text">
              We've come a long way from a 2-people company to winning at Webby.
            </p>
          </div>

          <div className="about__stat">
            <div className="about__stat-top">
              <Counter end={190} duration={2200} />
              <span className="about__unit">people</span>
            </div>

            <p className="about__stat-text">
              We've come a long way from a 2-people company to winning at Webby.
            </p>
          </div>
        </div>

        <div className="about__quote">
          <p className="about__quote-text">
            I’m with cars for over 18 years. My auto passion
            <br />
            and <span>attention to details</span> will make your
            <br />
            experience with us second to none. Guaranteed.
          </p>

          <div className="about__author">
            <h4>Kirill Aliev, MBA</h4>
            <p>CEO Trinity car rental boutique</p>
          </div>
        </div>
      </div>

      <div className="about__image-wrapper">
        <img
          className="about__image"
          src={aboutImg}
          alt="Trinity luxury car rental"
        />
      </div>
    </section>
  );
}

export default AboutUs;