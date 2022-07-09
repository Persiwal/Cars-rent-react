import ReactPaginate from "react-paginate";
import { useCars } from "../../hooks/useCars";

import styles from "./CarsList.module.scss";
import CarsListItem from "./CarsListItem/CarsListItem";
import NoResults from "../UI/NoResults/NoResults";

const CarsList = ({ items }) => {
  const { cars, handlePageClick, pageCount } = useCars({ items });

  return (
    <div className={styles.container}>
      <ul className={styles.carsList}>
        {cars.length > 0 &&
          cars.map((car, index) => {
            return <CarsListItem {...car} key={index} />;
          })}
        {cars.length === 0 && (
          <li>
            <NoResults />
          </li>
        )}
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination}
        pageLinkClassName={styles.pageNum}
        previousLinkClassName={styles.pageNum}
        nextLinkClassName={styles.pageNum}
        activeLinkClassName={styles.active}
      />
    </div>
  );
};

export default CarsList;
