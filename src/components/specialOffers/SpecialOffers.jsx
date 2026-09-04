import { useState } from "react";
import urusImg from "../../assets/img/svg/lamborghini.svg";
import romaImg from "../../assets/img/svg/ferrari.svg";
import ghostImg from "../../assets/img/svg/ghost-white.svg";
import porscheImg from "../../assets/img/svg/porsche-911.svg";
import styles from "./SpecialOffers.module.css";
import AllCarsModal from "../AllCarsModal/AllCarsModal";

const tabs = ["Special Offer", "New car", "Most popular", "Daily"];

const carsByTab = {
  "Special Offer": [
    { id: 1, name: "Lamborghini Urus", image: urusImg },
    { id: 2, name: "Ferrari Roma", image: romaImg },
    { id: 3, name: "Rolls-Royce Ghost", image: ghostImg },
    { id: 4, name: "Porsche 911 Turbo S", image: porscheImg },
  ],
  "New car": [
    { id: 5, name: "Porsche 911 Turbo S", image: porscheImg },
    { id: 6, name: "Rolls-Royce Ghost", image: ghostImg },
    { id: 7, name: "Lamborghini Urus", image: urusImg },
  ],
  "Most popular": [
    { id: 8, name: "Ferrari Roma", image: romaImg },
    { id: 9, name: "Lamborghini Urus", image: urusImg },
    { id: 10, name: "Porsche 911 Turbo S", image: porscheImg },
    { id: 11, name: "Rolls-Royce Ghost", image: ghostImg },
  ],
  Daily: [
    { id: 12, name: "Rolls-Royce Ghost", image: ghostImg },
    { id: 13, name: "Ferrari Roma", image: romaImg },
  ],
};

const SpecialOffers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Special Offer");
  const cars = carsByTab[activeTab] || [];

  return (
    <section className={styles.section}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`${styles.tab} ${
              tab === activeTab ? styles.tabActive : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {cars.map((car) => (
          <div key={car.id} className={styles.card}>
            <img src={car.image} alt={car.name} className={styles.cardImage} />
            <div className={styles.cardOverlay}>
              <span className={styles.cardName}>{car.name}</span>
              <button type="button" className={styles.rentBtn}>
                RENT
              </button>
            </div>
          </div>
        ))}
      </div>

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
    </section>
  );
};

export default SpecialOffers;
