//styles
import styles from "./Filters.module.scss";

//components
import FiltersForm from "./FiltersForm/FiltersForm";

const Filters = ({
  showMobileFilters,
  showDesktopFilters,
  handleMobileFiltersClose,
  items,
}) => {
  return (
    <>
      {showMobileFilters && (
        <div className={styles.opened}>
          <div className={styles.header}>
            <h2>Filters</h2>
            <div className={styles.closed} onClick={handleMobileFiltersClose}>
              <span></span>
              <span></span>
            </div>
          </div>
          <FiltersForm items={items} renderFor="mobile" />
        </div>
      )}

      {showDesktopFilters && <FiltersForm items={items} renderFor="desktop" />}
    </>
  );
};

export default Filters;
