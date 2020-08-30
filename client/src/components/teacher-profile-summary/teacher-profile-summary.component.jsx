import React from "react";
import StarRatings from "react-star-ratings";

import styles from "./teacher-profile-summary.module.scss";

import { backgroundColors, textColors } from "helpers/style-helpers";

import { ReactComponent as VerifiedIcon } from "assets/images/verified.svg";
import { ReactComponent as EducationIcon } from "assets/images/graduated-icon.svg";
import { ReactComponent as ExperienceIcon } from "assets/images/experience-icon.svg";

const TeacherProfileSummary = ({ teacher }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photo}>
        <img
          src={process.env.PUBLIC_URL + "/images/profile/" + teacher.profile}
          alt={teacher.firstname}
        />
      </div>
      <div className={styles.highlights}>
        <div className={styles.name_status_ratings}>
          <h2 className={styles.name}>
            {teacher.firstname + " " + teacher.lastname}
          </h2>
          <StarRatings
            rating={teacher.rating}
            starDimension="18px"
            starSpacing="2px"
            starRatedColor="#FEBF00"
            starHoverColor="blue"
          />
          <VerifiedIcon className={styles.status}></VerifiedIcon>
        </div>
        <div className={styles.metas}>
          <div className={styles.education}>
            <EducationIcon className={styles.icon} />
            {teacher.education.join(", ")}
          </div>
          <div className={styles.total_experience}>
            <ExperienceIcon className={styles.icon} />
            {teacher.experience + " Years Experience"}
          </div>
        </div>
        <div className={styles.levels}>
          {teacher.classes.map((level, idx) => (
            <div
              key={level}
              className={styles.level}
              style={{
                backgroundColor: backgroundColors[idx],
                color: textColors[idx],
              }}
            >
              {level}
            </div>
          ))}
        </div>
        <div>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
      </div>
    </div>
  );
};

export default TeacherProfileSummary;
