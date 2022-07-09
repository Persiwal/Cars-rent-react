import styles from "./NoResults.module.scss";
import emptyRoad from "../../../assets/images/empty-road.jpg";

const NoResults = () => {
  return (
    <div className={styles.wrapper}>
      <img src={emptyRoad} alt="" />
      <div className={styles.description}>
        <h3>
          Sorry ! <br /> No results found :(
        </h3>
        <p>We couldn't find what you're looking for.</p>
      </div>
    </div>
  );
};

export default NoResults;
