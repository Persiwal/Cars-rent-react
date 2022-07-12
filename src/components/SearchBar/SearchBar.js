//hooks
import { useEffect, useState } from "react";
import { useFilters } from "../../hooks/useFilters";
import { useMediaQuery } from "../../hooks/useMediaQuery";

//styles
import styles from "./SearchBar.module.scss";

//components
import SearchBarInput from "../UI/SearchBarInput/SearchBarInput";
import Filters from "./Filters/Filters";
import Checkbox from "../UI/Checkbox/Checkbox";

const SearchBar = ({ items }) => {
  const { isPromo: isPromoCtx, setFiltersState } = useFilters();
  const [isPromo, setIsPromo] = useState(isPromoCtx);
  const isDesktop = useMediaQuery("(min-width:896px)");
  const [inputValue, setInputValue] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showDesktopFilters, setShowDesktopFilters] = useState(false);

  useEffect(() => {
    setFiltersState({
      name: inputValue.trim(),
      isPromo: isPromo,
    });
  }, [inputValue, isPromo]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handlePromoClick = () => {
    setIsPromo((prev) => !prev);
  };

  const handleMobileFiltersShow = () => {
    setShowMobileFilters(true);
  };

  const handleMobileFiltersClose = () => {
    setShowMobileFilters(false);
  };

  const handleDesktopFiltersShow = () => {
    setShowDesktopFilters((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.basicSearch}>
        <SearchBarInput
          type="text"
          placeholder="Search"
          renderMagnifier={true}
          valueHandler={handleInputChange}
          value={inputValue}
        />
        <div className={styles.hamburger} onClick={handleMobileFiltersShow}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button onClick={handleDesktopFiltersShow}>
          {!showDesktopFilters ? "Show filters" : "Hide filters"}
        </button>
        {isDesktop && (
          <Checkbox
            label="Promo"
            toggleValue={handlePromoClick}
            checked={isPromoCtx}
          />
        )}
      </div>

      <div className={styles.filtersSearch}>
        <Filters
          items={items}
          showMobileFilters={showMobileFilters}
          showDesktopFilters={showDesktopFilters}
          handleMobileFiltersClose={handleMobileFiltersClose}
        ></Filters>
      </div>
    </div>
  );
};

export default SearchBar;
