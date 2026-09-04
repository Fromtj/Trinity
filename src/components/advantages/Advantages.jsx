import { useEffect, useRef } from "react";
import "./Advantages.css";

import img1 from "./imgs/1.png";
import img2 from "./imgs/2.png";
import img3 from "./imgs/3.png";
import img4 from "./imgs/4.png";
import img5 from "./imgs/5.png";
import img6 from "./imgs/6.png";

const advantages = [
  {
    id: 1,
    image: img1,
    title: "40+ unique cars for rent from our fleet",
    description: "Choose from an exclusive collection of premium vehicles.",
  },
  {
    id: 2,
    image: img2,
    title: "Delivery and return of cars in Dubai 24/7",
    description: "Your vehicle can be delivered exactly when you need it.",
  },
  {
    id: 3,
    image: img3,
    title: "Insurance without a deductible for each car",
    description: "Premium protection designed for a worry-free experience.",
  },
  {
    id: 4,
    image: img4,
    title: "No video or audio recording in the car",
    description: "Complete privacy throughout your entire rental.",
  },
  {
    id: 5,
    image: img5,
    title: "24/7 technical support",
    description: "Professional support is available around the clock.",
  },
  {
    id: 6,
    image: img6,
    title: "All models have a premium package",
    description: "Every vehicle comes prepared to our premium standard.",
  },
];

export default function Advantages() {
  const sectionRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("advantages--visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="advantages" ref={sectionRef}>
      <div className="advantages__header">
        <span className="advantages__eyebrow">WHY TRINITY</span>
        <h2 className="advantages__title">Advantages</h2>
      </div>

      <div className="advantages__grid">
        {advantages.map((advantage, index) => (
          <article
            className="advantages__card"
            key={advantage.id}
            onMouseMove={handleMouseMove}
            style={{
              "--delay": `${index * 90}ms`,
            }}
          >
            <img
              className="advantages__image"
              src={advantage.image}
              alt={advantage.title}
            />

            <div className="advantages__overlay" />
            <div className="advantages__spotlight" />

            <span className="advantages__number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="advantages__content">
              <p className="advantages__text">{advantage.title}</p>

              <p className="advantages__description">
                {advantage.description}
              </p>

              <div className="advantages__more">
                <span>Explore</span>
                <span>↗</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}