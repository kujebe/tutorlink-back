import React from "react";
import { useSelector, useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";

import useRequest from "custom-hooks/swr-hoc";

import { selectTeacherSlug } from "store/teacher/teacher-actions";

import seeMore from "assets/images/see-more.png";

import LoadingDots from "components/loading-dots/loading-dots.component";

import styles from "./marker-popup.module.scss";

const MarkerPopup = () => {
  const dispatch = useDispatch();
  const selectedTeacherSlug = useSelector(
    (state) => state.teacher.selectedTeacherSlug
  );
  const userLocation = useSelector((state) => state.mapData.userLocation);

  const { data, error } = useRequest(
    "/home",
    `?longitude=${userLocation[1]}&latitude=${userLocation[0]}`
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
            className={`${styles.teacher_wrapper} ${
              selectedTeacherSlug === teacher.slug && styles.active
            }`}
            onClick={() => dispatch(selectTeacherSlug(teacher.slug))}
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
          <div>Show All</div>
        </div>
      </div>
    );
  }
};

export default MarkerPopup;
