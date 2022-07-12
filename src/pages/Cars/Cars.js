//hooks
import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios";

//components
import Navigation from "../../components/Navigation/Navigation";
import SearchBar from "../../components/SearchBar/SearchBar";
import CarsList from "../../components/Cars/CarsList";
import CarsFiltersProvider from "../../store/FiltersProvider";

const Cars = () => {
  const [cars, setCars] = useState([]);

  const { response, loading, error } = useAxios({
    method: "get",
    url: "/cars",
  });

  useEffect(() => {
    if (response !== null) {
      setCars(response);
    }
  }, [response]);

  return (
    <>
      <Navigation />
      <CarsFiltersProvider>
        <SearchBar items={cars} />
        <CarsList items={cars} />
      </CarsFiltersProvider>
    </>
  );
};

export default Cars;
