import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useQuery from "hooks/use-query";
import { useDispatch, useSelector } from "react-redux";

import { fetchSelectedTeacherDetailsStart } from "store/customer/customer-actions";

import styles from "./checkout-summary.module.scss";

const CheckoutSummary = () => {
    const dispatch = useDispatch();
    const query = useQuery();
    const slug = query.get("slug");

    useEffect(() => {
        dispatch(fetchSelectedTeacherDetailsStart(slug))
    }, [fetchSelectedTeacherDetailsStart]);

    const { teacher } = useSelector(state => state.customer.selectedTeacherDetails);

    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>Summary</h4>
            <div className={styles.two_cols}>
                <div className={styles.col_one}>Hiring: </div>
                <div className={styles.col_two}>
                    <Link to={`/teacher/${teacher && teacher.slug}`} >{teacher && teacher.firstname + " " + teacher.lastname}</Link>
                </div>
            </div>
            <div className={styles.two_cols}>
                <div className={styles.col_one}>Hiring: </div>
                <div className={styles.col_two}>
                    <Link to={`/teacher/${teacher && teacher.slug}`} >{teacher && teacher.firstname + " " + teacher.lastname}</Link>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSummary;