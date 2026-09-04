import { useState } from "react";
import closeIcon from "../../assets/icons/svg/close.svg";
import searchIcon from "../../assets/icons/svg/search.svg";
import styles from "./AllCarsModal.module.css";

const AllCarsModal = ({ cars, onClose, onSelectCar }) => {
  const [search, setSearch] = useState("");
  const [activeBrand, setActiveBrand] = useState("All");

  const brands = ["All", ...new Set(cars.map((c) => c.brand))];

  const filteredCars = cars.filter((car) => {
    const query = search.trim().toLowerCase();
    const matchesSearch =
      !query ||
      car.brand.toLowerCase().includes(query) ||
      car.model.toLowerCase().includes(query);
    const matchesBrand = activeBrand === "All" || car.brand === activeBrand;
    return matchesSearch && matchesBrand;
  });

  const handleCardClick = (id) => {
    onSelectCar(id);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>All Cars</h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            <img src={closeIcon} alt="" />
          </button>
        </div>

        <div className={styles.controls}>
          <div className={styles.searchWrap}>
            <input
              type="text"
              placeholder="Search car..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
            <img src={searchIcon} alt="" className={styles.searchIcon} />
          </div>

          <div className={styles.brandFilters}>
            {brands.map((brand) => (
              <button
                key={brand}
                type="button"
                className={`${styles.brandBtn} ${
                  brand === activeBrand ? styles.brandBtnActive : ""
                }`}
                onClick={() => setActiveBrand(brand)}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div
                key={car.id}
                className={styles.card}
                onClick={() => handleCardClick(car.id)}
              >
                <div className={styles.cardImageWrap}>
                  <img
                    src={car.images[0]}
                    alt={`${car.brand} ${car.model}`}
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardInfo}>
                  <div>
                    <p className={styles.cardBrand}>{car.brand}</p>
                    <p className={styles.cardModel}>{car.model}</p>
                  </div>
                  <div className={styles.cardPriceWrap}>
                    <span className={styles.cardPrice}>{car.price}</span>
                    <span className={styles.cardPricePeriod}>/ day</span>
                  </div>
                </div>
                <button type="button" className={styles.rentBtn}>
                  RENT
                </button>
              </div>
            ))
          ) : (
            <p className={styles.noResults}>Ничего не найдено</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCarsModal;
