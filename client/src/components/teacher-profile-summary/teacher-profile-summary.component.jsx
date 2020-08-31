import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

import styles from "./teacher-profile-summary.module.scss";

import { backgroundColors, textColors } from "helpers/style-helpers";

import { ReactComponent as VerifiedIcon } from "assets/images/verified.svg";
import { ReactComponent as EducationIcon } from "assets/images/graduated-icon.svg";
import { ReactComponent as ExperienceIcon } from "assets/images/experience-icon.svg";
import { ReactComponent as ViewIcon } from "assets/images/view-icon.svg";
import { ReactComponent as HireIcon } from "assets/images/hire-now-icon.svg";

const TeacherProfileSummary = ({ teacher }) => {
  return (
    <div className={styles.summary_container}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_left}>
          <img
            className={styles.thumbnail}
            src={process.env.PUBLIC_URL + "/images/profile/" + teacher.profile}
            alt={teacher.firstname}
          />
          <Link to={`/teacher/${teacher.slug}`} className={styles.name}>
            {teacher.firstname + " " + teacher.lastname}
          </Link>
          <StarRatings
            rating={teacher.rating}
            starDimension="15px"
            starSpacing="2px"
            starRatedColor="#FEBF00"
            starHoverColor="blue"
          />
          <VerifiedIcon className={styles.status}></VerifiedIcon>
        </div>
        <div className={styles.header_right}>
          <Link to="/" className={styles.view_details}>
            <ViewIcon />
            <span>View Details</span>
          </Link>
          <Link to="/" className={styles.hire_now}>
            <HireIcon />
            <span>Hire Now</span>
          </Link>
        </div>
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
      <div className={styles.about}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web.
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
    </div>
  );
};

export default TeacherProfileSummary;
