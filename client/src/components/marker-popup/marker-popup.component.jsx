import React from "react";
import { useSelector, useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";
import useSwr from "swr";
import { Link } from "react-router-dom"

import { selectTeacherFromMap } from "store/customer/customer-actions";

import seeMore from "assets/images/see-more.png";

import LoadingDots from "components/loading-dots/loading-dots.component";

import styles from "./marker-popup.module.scss";

const MarkerPopup = () => {
  const dispatch = useDispatch();
  const selectedTeacherFromMap = useSelector(
    (state) => state.customer.selectedTeacherFromMap
  );
  const userLocation = useSelector((state) => state.mapData.userLocation);

  const { data, error } = useSwr(
    `/api/v1/home?longitude=${userLocation[1]}&latitude=${userLocation[0]}`
  );

  if (!data) {
    return <LoadingDots message="Fetching teachers near you" />;
  }

  if (data && !error) {
    const { mapPopupData, count, distance } = data;
    return (
      <div className={styles.popup_container}>
        <div
          className={styles.count}
        >{`${count} teachers within ${distance} km`}</div>
        {mapPopupData.map((teacher) => (
          <div
            key={teacher._id}
            className={`${styles.teacher_wrapper} ${selectedTeacherFromMap.slug === teacher.slug && styles.active
              }`}
            onClick={() => dispatch(selectTeacherFromMap(teacher))}
          >
            <div className={styles.teacher_photo}>
              <img
                src={`${process.env.PUBLIC_URL}/images/profile/${teacher.profile}`}
                alt="Teachers Profile"
              />
            </div>
            <div className={styles.teacher_data}>
              <div className={styles.teacher_name}>{teacher.name}</div>
              <div className={styles.teacher_level}>
                {teacher.classes[0]} Teacher
              </div>
              <div className={styles.teacher_experience}>
                {teacher.experience} Years Experience
              </div>
              <div className={styles.teacher_rating}>
                <StarRatings
                  rating={teacher.rating}
                  starDimension="16px"
                  starSpacing="1px"
                  starRatedColor="#FEBF00"
                  starHoverColor="blue"
                />
              </div>
            </div>
          </div>
        ))}
        <div className={styles.show_more}>
          <img src={seeMore} alt="" />
          <Link to='/search'>Show All</Link>
        </div>
      </div>
    );
  }
};

export default MarkerPopup;
