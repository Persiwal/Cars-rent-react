import { useEffect, useState } from "react";
import { useFilters } from "../../hooks/useFilters";
import useMediaQuery from "../../hooks/useMediaQuery";

import SearchBarInput from "../UI/SearchBarInput/SearchBarInput";
import Filters from "./Filters/Filters";
import Checkbox from "../UI/Checkbox/Checkbox";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { isPromo: isPromoCtx, setFiltersState } = useFilters();
  const isDesktop = useMediaQuery("(min-width:896px)");
  const [inputValue, setInputValue] = useState("");
  const [isPromo, setIsPromo] = useState(isPromoCtx);
  const [isAvailableNow, setIsAvailableNow] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showDesktopFilters, setShowDesktopFilters] = useState(false);

  useEffect(() => {
    setFiltersState({
      name: inputValue.trim(),
      isPromo: isPromo,
      isAvailableNow: isAvailableNow,
    });
  }, [inputValue, isPromo, isAvailableNow]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handlePromoClick = () => {
    setIsPromo((prev) => !prev);
  };

  const handleAvailableNowClick = () => {
    setIsAvailableNow((prev) => !prev);
  };

  const handleMobileFiltersShow = () => {
    setShowMobileFilters(true);
  };

  const handleMobileFiltersClose = () => {
    setShowMobileFilters(false);
  };

  const handleDekstopFiltersShow = () => {
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
        <button onClick={handleDekstopFiltersShow}>
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
          items={props.items}
          showMobileFilters={showMobileFilters}
          showDesktopFilters={showDesktopFilters}
          handleMobileFiltersClose={handleMobileFiltersClose}
        ></Filters>
      </div>
    </div>
  );
};

export default SearchBar;
