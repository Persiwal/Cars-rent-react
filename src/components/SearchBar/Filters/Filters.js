import { useState } from "react";
import FiltersForm from "./FiltersForm/FiltersForm";
import styles from "./Filters.module.scss";

const Filters = (props) => {
  return (
    <>
      {props.showMobileFilters && (
        <div className={styles.opened}>
          <div className={styles.header}>
            <h2>Filters</h2>
            <div
              className={styles.closed}
              onClick={props.handleMobileFiltersClose}
            >
              <span></span>
              <span></span>
            </div>
          </div>
          <FiltersForm items={props.items} renderFor="mobile" />
        </div>
      )}

      {props.showDesktopFilters && (
        <FiltersForm items={props.items} renderFor="desktop" />
      )}
    </>
  );
};

export default Filters;
