import { useContext } from "react";
import FiltersContext from "../store/FiltersContext";

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error("FiltersContext must be within FiltersProvider");
  }

  return context;
};
