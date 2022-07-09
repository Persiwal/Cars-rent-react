import styles from "./CarsListItemModal.module.scss";

const CarsListItemModal = ({
  basic,
  performance,
  engine,
  opinions,
  rent,
  onCloseModal,
}) => {
  return (
    <>
      <div className={styles.modalHeader}>
        <img
          className={styles.modalImg}
          src={basic["photo_url"]}
          alt={basic.mark + " " + basic.model}
        />
        <div className={styles.modalDescription}>
          <h3>{basic.mark + " " + basic.model}</h3>
          {rent.promo.isPromo ? (
            <p className={styles.price}>
              <del>{rent.costPerDay}</del>
              <span> {rent.promo.promoCost}$ / day</span>
            </p>
          ) : (
            <p className={styles.price}> {rent.costPerDay}$ / day</p>
          )}
        </div>
      </div>
      <ul className={styles.modalInfo}>
        <li>
          <p>Body type</p> <p>{basic["body_type"]}</p>
        </li>
        <li>
          <p>Generation</p> <p>{basic.generation}</p>
        </li>
        <li>
          <p>Seats number</p> <p>{basic["seats_number"]}</p>
        </li>
        <li>
          <p>Production year</p> <p>{basic["production_year"]}</p>
        </li>
        <li>
          <p>Gearbox</p> <p>{basic.gearbox}</p>
        </li>
        <li>
          <p>Fuel type</p> <p>{performance["fuel_type"]}</p>
        </li>
        <li>
          <p>Fuel consumption</p> <p>{performance["fuel_consumption"]}</p>
        </li>
        <li>
          <p>0-100</p> <p>{performance["acceleration_to_hundred"]}</p>
        </li>
        <li>
          <p>Max speed</p> <p>{performance["max_speed"]}</p>
        </li>
        <li>
          <p>Horsepower</p> <p>{engine.power}</p>
        </li>
        <li>
          <p>Torque</p> <p>{engine.torque}</p>
        </li>
        <li>
          <p>Capacity</p> <p>{engine.capacity}</p>
        </li>
      </ul>
      <div className={styles.modalActions}>
        <button className={styles.cancel} onClick={onCloseModal}>
          CANCEL
        </button>
        <button className={styles.rentNow}>RENT NOW</button>
      </div>
    </>
  );
};

export default CarsListItemModal;
