import { useEffect, useRef, useState } from "react";
import "./Reviews.css";

import img1 from "./imgs/1.png";
import img2 from "./imgs/2.png";
import img3 from "./imgs/3.png";
import img4 from "./imgs/4.png";

const reviews = [
  {
    id: 1,
    image: img1,
    name: "Luxury Experience",
  },
  {
    id: 2,
    image: img2,
    name: "Dubai Supercars",
    video: true,
  },
  {
    id: 3,
    image: img3,
    name: "Premium Service",
  },
  {
    id: 4,
    image: img4,
    name: "VIP Rental",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

  const openReview = (index) => {
    setActiveIndex(index);
  };

  const closeReview = () => {
    setActiveIndex(null);
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const previousReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 5;
    const rotateX = (y / rect.height - 0.5) * -5;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const resetCard = (event) => {
    const card = event.currentTarget;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("reviews--visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (activeIndex === null) return;

      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (prev) => (prev - 1 + reviews.length) % reviews.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <section className="reviews" ref={sectionRef}>
        <div className="reviews__header">
          <span className="reviews__eyebrow">TRINITY EXPERIENCE</span>
          <h2 className="reviews__title">Reviews</h2>
        </div>

        <div className="reviews__grid">
          {reviews.map((review, index) => (
            <button
              className="reviews__item"
              key={review.id}
              type="button"
              onClick={() => openReview(index)}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetCard}
              style={{
                "--delay": `${index * 100}ms`,
              }}
            >
              <div className="reviews__card-inner">
                <img
                  className="reviews__image"
                  src={review.image}
                  alt={review.name}
                />

                <div className="reviews__shade" />
                <div className="reviews__spotlight" />

                <div className="reviews__number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="reviews__content">
                  <span>Customer review</span>
                  <h3>{review.name}</h3>
                </div>

                {review.video && (
                  <div className="reviews__play">
                    <span className="reviews__play-icon" />
                  </div>
                )}

                <div className="reviews__open">
                  <span>View</span>
                  <span className="reviews__open-arrow">↗</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div className="review-modal" onClick={closeReview}>
          <button
            className="review-modal__close"
            type="button"
            onClick={closeReview}
            aria-label="Close review"
          >
            ×
          </button>

          <button
            className="review-modal__arrow review-modal__arrow--left"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousReview();
            }}
            aria-label="Previous review"
          >
            ←
          </button>

          <div
            className="review-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={reviews[activeIndex].image}
              alt={reviews[activeIndex].name}
            />

            <div className="review-modal__info">
              <span>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(reviews.length).padStart(2, "0")}
              </span>

              <h3>{reviews[activeIndex].name}</h3>
            </div>
          </div>

          <button
            className="review-modal__arrow review-modal__arrow--right"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextReview();
            }}
            aria-label="Next review"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}