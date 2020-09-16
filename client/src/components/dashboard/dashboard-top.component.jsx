import React from "react";
import { formatDistance, format } from "date-fns";
import StarRatings from "react-star-ratings";

import styles from "./dashboard-top.module.scss";

import { ReactComponent as LocationIcon } from "assets/images/001-location-pin.svg";

const DashboardTop = ({ topData }) => {
  console.log(topData);

  const status = (customerStatus) => {
    if (customerStatus === 1) {
      return <span className={styles.active}>Active</span>;
    } else {
      return <span className={styles.inActive}>Inactive</span>;
    }
  };
  return (
    <div className={styles.top_wrapper}>
      <div className={styles.top_left}>
        <div className={styles.profile_img}>
          <img
            src={`${process.env.PUBLIC_URL}/images/profile/adejoke.jpg`}
            alt="User profile"
          />
        </div>
        <div className={styles.profile_meta}>
          <div className={styles.name_and_status}>
            <h2>{topData && topData.fullname}</h2>
            <div className={styles.status}>
              {topData && status(topData.status)}
            </div>
          </div>
          <div className={styles.address}>
            <LocationIcon />
            {topData && topData.address}
          </div>
          {topData && (
            <StarRatings
              className={styles.ratings}
              rating={topData.ratings}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="#FEBF00"
              starHoverColor="blue"
            />
          )}
        </div>
      </div>
      <div className={styles.top_right}>
        <div className={styles.right_meta}>
          <span>Email Address: </span>
          <div>{topData && topData.email}</div>
        </div>
        <div className={styles.right_meta}>
          <span>Phone No(s): </span>
          <div>{topData && topData.telephone}</div>
        </div>
        <div className={styles.right_meta}>
          <span>No of Children: </span>
          <div>{topData && topData.numberOfChildren}</div>
        </div>
        <div className={styles.right_meta}>
          <span>Member Since: </span>
          <div>{topData && format(new Date(topData.dateJoined), "PP")}</div>
        </div>
        <div className={styles.right_meta}>
          <span>Last Login: </span>
          <div>
            {topData &&
              formatDistance(new Date(), new Date(topData.lastLogin)) + " ago"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
