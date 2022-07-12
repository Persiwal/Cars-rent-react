//hooks
import { useEffect, useState } from "react";
import { useFilters } from "./useFilters";

export const useCars = (items) => {
  const [filteredCars, setFilteredCars] = useState([]);
  const filtersContext = useFilters();
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  const filterByName = (item, name) => {
    const itemName = item.basic.mark + " " + item.basic.model;
    return itemName.toLowerCase().includes(name.toLowerCase());
  };

  const filterByPromo = (item) => {
    return item.rent.promo.isPromo === true;
  };

  const filterByMark = (item, mark) => {
    return item.basic.mark === mark;
  };

  const filterByModel = (item, model) => {
    return item.basic.model === model;
  };

  const filterByMinPrice = (item, minPrice) => {
    return item.rent.costPerDay >= minPrice;
  };

  const filterByMaxPrice = (item, maxPrice) => {
    return item.rent.costPerDay <= maxPrice;
  };

  const filterByMinProdYear = (item, minProductionYear) => {
    return item.basic["production_year"] >= minProductionYear;
  };

  const filterByMaxProdYear = (item, maxProductionYear) => {
    return item.basic["production_year"] <= maxProductionYear;
  };

  useEffect(() => {
    let cars = items;

    if (filtersContext.name) {
      // filter by text input
      console.log(filtersContext.name);
      cars = cars.filter((item) => filterByName(item, filtersContext.name));
    }
    if (filtersContext.isPromo === true) {
      // filter by promo checkbox
      cars = cars.filter((item) => filterByPromo(item));
    }
    if (filtersContext.mark) {
      cars = cars.filter((item) => filterByMark(item, filtersContext.mark));
    }
    if (filtersContext.model) {
      cars = cars.filter((item) => filterByModel(item, filtersContext.model));
    }
    if (filtersContext.minPrice) {
      cars = cars.filter((item) =>
        filterByMinPrice(item, filtersContext.minPrice)
      );
    }
    if (filtersContext.maxPrice) {
      cars = cars.filter((item) =>
        filterByMaxPrice(item, filtersContext.maxPrice)
      );
    }
    if (filtersContext.minProdYear) {
      cars = cars.filter((item) =>
        filterByMinProdYear(item, filtersContext.minProdYear)
      );
    }
    if (filtersContext.maxProdYear) {
      cars = cars.filter((item) =>
        filterByMaxProdYear(item, filtersContext.maxProdYear)
      );
    }

    setFilteredCars(cars);
  }, [filtersContext]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredCars.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredCars.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredCars]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredCars.length;
    setItemOffset(newOffset);
  };

  return { cars: currentItems, handlePageClick, pageCount };
};
