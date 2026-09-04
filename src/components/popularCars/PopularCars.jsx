import { useState } from "react";
import heroCarDefault from "../../assets/img/svg/huracan-sto.svg";
import searchIcon from "../../assets/icons/svg/search.svg";
import arrowIcon from "../../assets/icons/svg/arrow-right.svg";
import audiLogo from "../../assets/img/svg/audi.svg";
import lamboLogo from "../../assets/img/svg/lamborghini.svg";
import ferrariLogo from "../../assets/img/svg/ferrari.svg";
import rangeRoverLogo from "../../assets/img/svg/range-rover.svg";
import audiCar from "../../assets/img/svg/audi.svg";
import urusCar from "../../assets/img/svg/lamborghini.svg";
import ferrariCar from "../../assets/img/svg/ferrari.svg";
import rangeRoverCar from "../../assets/img/svg/range-rover.svg";

import AllCarsModal from "../AllCarsModal/AllCarsModal";

import styles from "./PopularCars.module.css";

const cars = [
  {
    id: 1,
    logo: audiLogo,
    brand: "Audi",
    model: "Huracan EVO Spyder RS4",
    price: "1 800$",
    images: [audiCar],
  },
  {
    id: 2,
    logo: lamboLogo,
    brand: "Lamborghini",
    model: "Urus",
    price: "2 100$",
    images: [urusCar],
  },
  {
    id: 3,
    logo: lamboLogo,
    brand: "Lamborghini",
    model: "Huracan EVO Spyder",
    price: "2 400$",
    images: [heroCarDefault],
  },
  {
    id: 4,
    logo: ferrariLogo,
    brand: "Ferrari",
    model: "Roma",
    price: "2 600$",
    images: [ferrariCar],
  },
  {
    id: 5,
    logo: rangeRoverLogo,
    brand: "Range Rover",
    model: "Autobiography New 2022",
    price: "1 950$",
    images: [rangeRoverCar],
  },
];

const PopularCars = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState(3);
  const [imgIndex, setImgIndex] = useState(0);

  const activeCar = cars.find((c) => c.id === activeId);

  const filteredCars = cars.filter((car) => {
    const query = search.trim().toLowerCase();
    if (!query) return true;
    return (
      car.brand.toLowerCase().includes(query) ||
      car.model.toLowerCase().includes(query)
    );
  });

  const handleSelectCar = (id) => {
    setActiveId(id);
    setImgIndex(0);
  };

  const handlePrevImg = () => {
    setImgIndex((prev) =>
      prev === 0 ? activeCar.images.length - 1 : prev - 1,
    );
  };

  const handleNextImg = () => {
    setImgIndex((prev) =>
      prev === activeCar.images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <img
          src={activeCar.images[imgIndex]}
          alt={`${activeCar.brand} ${activeCar.model}`}
          className={styles.heroImage}
        />

        {activeCar.images.length > 1 && (
          <>
            <button
              type="button"
              className={`${styles.sliderArrow} ${styles.sliderArrowPrev}`}
              onClick={handlePrevImg}
              aria-label="Previous image"
            >
              <img src={arrowIcon} alt="" className={styles.arrowIconLeft} />
            </button>
            <button
              type="button"
              className={`${styles.sliderArrow} ${styles.sliderArrowNext}`}
              onClick={handleNextImg}
              aria-label="Next image"
            >
              <img src={arrowIcon} alt="" />
            </button>

            <div className={styles.dots}>
              {activeCar.images.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.slideDot} ${
                    i === imgIndex ? styles.slideDotActive : ""
                  }`}
                  onClick={() => setImgIndex(i)}
                />
              ))}
            </div>
          </>
        )}

        <div className={styles.heroOverlay}>
          <h2 className={styles.heroTitle}>
            Rent {activeCar.brand} <br /> {activeCar.model}
          </h2>
          <div className={styles.heroPrice}>
            <span className={styles.heroPriceLabel}>Rent is from oed</span>
            <span className={styles.heroPriceValue}>{activeCar.price}</span>
            <span className={styles.heroPricePeriod}>per day</span>
          </div>
        </div>
      </div>

      <div className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Most Popular</h3>

        <div className={styles.searchWrap}>
          <input
            type="text"
            placeholder="Car search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
          <img src={searchIcon} alt="" className={styles.searchIcon} />
        </div>

        <ul className={styles.list}>
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <li
                key={car.id}
                className={styles.listItem}
                onClick={() => handleSelectCar(car.id)}
              >
                <span
                  className={`${styles.dot} ${
                    car.id === activeId ? styles.dotActive : ""
                  }`}
                />
                <div className={styles.listContent}>
                  <p
                    className={`${styles.brand} ${
                      car.id === activeId ? styles.brandActive : ""
                    }`}
                  >
                    {car.brand}
                  </p>
                  <p className={styles.model}>{car.model}</p>
                </div>
              </li>
            ))
          ) : (
            <li className={styles.noResults}>Ничего не найдено</li>
          )}
        </ul>

        <button
          type="button"
          className={styles.viewAllBtn}
          onClick={() => setIsModalOpen(true)}
        >
          VIEW ALL
        </button>

        {isModalOpen && (
          <AllCarsModal
            cars={cars}
            onClose={() => setIsModalOpen(false)}
            onSelectCar={handleSelectCar}
          />
        )}
      </div>
    </section>
  );
};

export default PopularCars;
