import React from "react";
import { useSelector, useDispatch } from "react-redux"

import { fetchTeachersStart } from "store/search/search-actions";

import styles from "./pagination.module.scss";

const PaginationComponent = () => {
    const { page, teachersCount, limit } = useSelector(state => state.search);
    const userLocation = useSelector((state) => state.mapData.userLocation);

    console.log(userLocation)

    const numberOfPages =
        teachersCount % limit === 0
            ? Math.floor(teachersCount / limit)
            : Math.floor(teachersCount / limit) + 1;

    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            {[...Array(numberOfPages)].map((data, index) => (
                <div
                    key={index}
                    className={`${styles.page_number} ${page === index + 1 && styles.active}`}
                    onClick={() =>
                        page !== index + 1 &&
                        dispatch(fetchTeachersStart({ page: index + 1, limit, userLocation }))
                    }
                >
                    {index + 1}
                </div>
            ))}
        </div>
    )
}

export default PaginationComponent