//hooks
import { useState } from "react";

//context
import FiltersContext from "./FiltersContext";

const CarsFiltersProvider = (props) => {
  const [filtersState, setFiltersState] = useState({
    name: "",
    isPromo: false,
    mark: "",
    model: "",
    minPrice: 0,
    maxPrice: 10000,
    minProdYear: 1970,
    maxProdYear: 2022,
  });

  const filtersContextValue = {
    name: filtersState.name,
    isPromo: filtersState.isPromo,
    mark: filtersState.mark,
    model: filtersState.model,
    minPrice: filtersState.minPrice,
    maxPrice: filtersState.maxPrice,
    minProdYear: filtersState.minProdYear,
    maxProdYear: filtersState.maxProdYear,
    setFiltersState,
  };

  return (
    <FiltersContext.Provider value={filtersContextValue}>
      {props.children}
    </FiltersContext.Provider>
  );
};

export default CarsFiltersProvider;
