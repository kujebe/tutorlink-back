import React from "react";
import { useSelector, useDispatch } from "react-redux"

import { fetchTeachersStart } from "store/search/search-actions";

import styles from "./pagination.module.scss";

const PaginationComponent = () => {
    const { page, teachersCount, limit } = useSelector(state => state.search)

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
                    onClick={() =>
                        dispatch(fetchTeachersStart({ page: index + 1, limit }))
                    }
                >
                    Page {index + 1}
                </div>
            ))}
        </div>
    )
}

export default PaginationComponent