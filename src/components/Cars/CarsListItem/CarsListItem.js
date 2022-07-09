import { useState } from "react";
import styles from "./CarsListItem.module.scss";
import CarsListItemModal from "./CarsListItemModal/CarsListItemModal";

import gearboxIcon from "../../../assets/icons/gearbox-icon.svg";
import dropIcon from "../../../assets/icons/drop-icon.svg";
import personIcon from "../../../assets/icons/person-icon.svg";
import Modal from "../../UI/Modal/Modal";

const CarsListItem = ({ basic, performance, engine, opinions, rent }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOPen] = useState(false);
  //const avgScore = console.log(opinions.length);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleModalOpen = () => {
    setIsModalOPen(true);
  };

  const handleModalClose = () => {
    setIsModalOPen(false);
  };

  return (
    <>
      <li className={styles.carItem}>
        <div
          className={`${styles.imageContainer}  ${
            isHovered ? styles.active : ""
          }`}
        >
          <img
            className={styles.img}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleModalOpen}
            src={basic["photo_url"]}
            alt={basic.mark + " " + basic.model}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3>
              {" "}
              {basic.mark.toUpperCase() + " " + basic.model.toUpperCase()}
            </h3>

            {rent.promo.isPromo ? (
              <p className={styles.price}>
                <del>{rent.costPerDay}</del>
                <span> {rent.promo.promoCost}$ / day</span>
              </p>
            ) : (
              <p className={styles.price}> {rent.costPerDay}$ / day</p>
            )}
          </div>
          <ul className={styles.basicInfo}>
            <li>
              <img src={personIcon} alt="number of seats" />
              <span>{basic["seats_number"]}</span>
            </li>
            <li>
              <img src={dropIcon} alt="type of fuel" />
              <span>{performance["fuel_type"].toUpperCase()}</span>
            </li>
            <li>
              <img src={gearboxIcon} alt="type of gearbox" />
              <span>{basic.gearbox.toUpperCase()}</span>
            </li>
          </ul>
          <div className={styles.actions}>
            <button className={styles.details} onClick={handleModalOpen}>
              Show details
            </button>
            <button className={styles.rent}>Rent</button>
          </div>
        </div>
      </li>
      {isModalOpen && (
        <Modal closeModal={handleModalClose}>
          <CarsListItemModal
            {...{ basic, performance, engine, opinions, rent }}
            onCloseModal={handleModalClose}
          />
        </Modal>
      )}
    </>
  );
};

export default CarsListItem;
