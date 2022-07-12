//hooks
import { useState, useEffect } from "react";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { useFilters } from "../../../../hooks/useFilters";

//styles
import styles from "./FiltersForm.module.scss";

//components
import FiltersInput from "../../../UI/Input/Input";
import Select from "../../../UI/Select/Select";
import Checkbox from "../../../UI/Checkbox/Checkbox";

const FiltersForm = ({ items }) => {
  const { isPromo: isPromoCtx, setFiltersState } = useFilters();
  const [isPromo, setIsPromo] = useState(isPromoCtx);
  const [selectedMark, setSelectedMark] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [minPrice, setMinPrice] = useState(0);
  const [minProductionYear, setMinProductionYear] = useState(1970);
  const [maxProductionYear, setMaxProductionYear] = useState(2022);
  const isDesktop = useMediaQuery("(min-width:896px)");

  useEffect(() => {
    setFiltersState({
      isPromo: isPromo,
      mark: selectedMark,
      model: selectedModel,
      minPrice: minPrice,
      maxPrice: maxPrice,
      minProdYear: minProductionYear,
      maxProdYear: maxProductionYear,
    });
  }, [
    isPromo,
    selectedMark,
    selectedModel,
    minPrice,
    maxPrice,
    minProductionYear,
    maxProductionYear,
  ]);

  //get unique marks and sort them alphabetically
  const marksList = [...new Set(items.map((item) => item.basic.mark))].sort(
    (a, b) => (a > b ? 1 : -1)
  );

  //get unique models from selected mark and sort them alphabetically
  const modelsList = [
    ...new Set(
      items
        .filter((item) => Object.values(item.basic).includes(selectedMark))
        .map((item) => item.basic.model)
    ),
  ].sort((a, b) => (a > b ? 1 : -1));

  const handlePromoClick = () => {
    setIsPromo((prev) => !prev);
  };

  return (
    <>
      <form className={!isDesktop ? styles.form : styles.formDesktop}>
        <div className={styles.filter}>
          {!isDesktop && (
            <Checkbox
              label="Promo"
              toggleValue={handlePromoClick}
              checked={isPromoCtx}
            />
          )}
          {!isDesktop && (
            <label className={styles.label} htmlFor="mark-names">
              Mark
            </label>
          )}
          <Select
            handleValue={setSelectedMark}
            title="Select mark name"
            name="mark-names"
            id="mark-names"
            options={marksList}
          ></Select>
        </div>
        <div className={styles.filter}>
          {!isDesktop && (
            <label className={styles.label} htmlFor="model-names">
              Model
            </label>
          )}
          <Select
            handleValue={setSelectedModel}
            title="Select model name"
            name="model-names"
            id="model-names"
            options={modelsList}
          ></Select>
        </div>
        <div className={styles.label}>
          <fieldset>
            {!isDesktop && (
              <legend className={styles.legend}>Price range</legend>
            )}
            <FiltersInput
              handleValue={setMinPrice}
              type="number"
              id="price-from"
              placeholder={!isDesktop ? "From" : "Price from"}
              size="small"
              step="10"
              min="0"
            />
            <FiltersInput
              handleValue={setMaxPrice}
              type="number"
              id="price-to"
              placeholder={!isDesktop ? "To" : "Price to"}
              size="small"
              min="100"
              step="10"
            />
          </fieldset>
        </div>
        <div className={styles.label}>
          <fieldset>
            {!isDesktop && (
              <legend className={styles.legend}>Production year</legend>
            )}
            <FiltersInput
              handleValue={setMinProductionYear}
              type="number"
              id="production-year-from"
              placeholder={!isDesktop ? "From" : "Year from"}
              size="small"
              min="1970"
              max="2022"
              step="1"
            />
            <FiltersInput
              handleValue={setMaxProductionYear}
              type="number"
              id="production-year-to"
              placeholder={!isDesktop ? "To" : "Year to"}
              size="small"
              min="1970"
              max="2022"
              step="1"
            />
          </fieldset>
        </div>
      </form>
    </>
  );
};

export default FiltersForm;
