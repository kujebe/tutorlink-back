import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import StarRatings from "react-star-ratings";

import { fetchSelectedTeacherDetailsStart } from "store/customer/customer-actions"

// import { showPaymentModal } from "store/customer/customer-actions";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import Spinner from "components/spinner/spinner.component";

import { backgroundColors, textColors } from "helpers/style-helpers";

import styles from "./teacher.module.scss";

import { ReactComponent as VerifiedIcon } from "assets/images/verified.svg";
import { ReactComponent as EducationIcon } from "assets/images/graduated-icon.svg";
import { ReactComponent as ExperienceIcon } from "assets/images/experience-icon.svg";
import { ReactComponent as MembershipIcon } from "assets/images/membership-icon.svg";
import { ReactComponent as RatingIcon } from "assets/images/rating-icon.svg";
import { ReactComponent as SubjectsIcon } from "assets/images/subject-icon.svg";
import { ReactComponent as TaughtIcon } from "assets/images/taught-icon.svg";
import { ReactComponent as HiredIcon } from "assets/images/hired-icon.svg";

const TeacherPage = () => {
  const { slug } = useParams();
  const { selectedTeacherDetails } = useSelector(state => state.customer)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchSelectedTeacherDetailsStart(slug))
  }, [fetchSelectedTeacherDetailsStart]);

  const { teacher, subjectSkills, techSkills } = selectedTeacherDetails ? selectedTeacherDetails : {};
  // const TeacherDataForPayment = {
  //   id: teacher ? teacher._id : "",
  //   fullname: teacher ? teacher.firstname + " " + teacher.lastname : "",
  //   email: teacher ? teacher.email : "",
  //   slug: teacher ? teacher.slug : "",
  // };

  return (
    <Fragment>
      { !selectedTeacherDetails ? <Spinner /> :
        <InnerPagesLayout>
          <div className={styles.container}>
            <div className={styles.top}>
              <div className={styles.photo}>
                <img
                  src={
                    teacher && process.env.PUBLIC_URL + "/images/profile/" + teacher.profile
                  }
                  alt={teacher && teacher.firstname}
                />
              </div>
              <div className={styles.highlights}>
                <div className={styles.name_status_ratings}>
                  <h2 className={styles.name}>
                    {teacher && teacher.firstname + " " + teacher.lastname}
                  </h2>
                  <StarRatings
                    rating={teacher && teacher.rating}
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
                    {teacher && teacher.education.join(", ")}
                  </div>
                  <div className={styles.total_experience}>
                    <ExperienceIcon className={styles.icon} />
                    {teacher && teacher.experience + " Years Experience"}
                  </div>
                </div>
                <div className={styles.levels}>
                  {teacher && teacher.classes.map((level, idx) => (
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English. Many
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for 'lorem
                  ipsum' will uncover many web sites still in their infancy.
                  Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).
              </div>
              </div>
            </div>
            <div className={styles.iconic}>
              <div className={styles.iconic_item}>
                <MembershipIcon className={styles.membership} />
                <div>
                  <h4>2019</h4>
                  <span>Member Since</span>
                </div>
              </div>
              <div className={styles.iconic_item}>
                <RatingIcon className={styles.rating} />
                <div>
                  <h4>4 Stars</h4>
                  <span>Ratings</span>
                </div>
              </div>
              <div className={styles.iconic_item}>
                <TaughtIcon className={styles.taught} />
                <div>
                  <h4>4 Students</h4>
                  <span>Taught</span>
                </div>
              </div>
              <div className={styles.iconic_item}>
                <HiredIcon className={styles.hired} />
                <div>
                  <h4>20 Times</h4>
                  <span>Hired</span>
                </div>
              </div>
              <div className={styles.iconic_item}>
                <SubjectsIcon className={styles.subjects} />
                <div>
                  <h4>20 Taught</h4>
                  <span>Subjects </span>
                </div>
              </div>
            </div>
            <div className={styles.skills_wrapper}>
              <div className={styles.skills_header}>Skills</div>
              <div className={styles.skills}>
                {subjectSkills && subjectSkills.map((subject) => (
                  <div key={subject.title} className={styles.skill}>
                    <div className={styles.title}>{subject.title}</div>
                    <div className={`${styles.skill_chart} ${styles.subjects}`}>
                      {subject.value}
                    </div>
                    <div className={styles.skill_footer}>
                      <div
                        className={styles.experience_years}
                      >{`${subject.value} Years`}</div>
                      <div className={styles.experience_text}>Experience</div>
                    </div>
                  </div>
                ))}
                {techSkills && techSkills.map((subject) => (
                  <div key={subject.title} className={styles.skill}>
                    <div className={styles.title}>{subject.title}</div>
                    <div className={`${styles.skill_chart} ${styles.tech}`}>
                      {subject.value}
                    </div>
                    <div className={styles.skill_footer}>
                      <div
                        className={styles.experience_years}
                      >{`${subject.value} Years`}</div>
                      <div className={styles.experience_text}>Experience</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.hire_action}>
                <div className={styles.price}>
                  N40,000.00<span> / Month</span>
                </div>
                <button
                  onClick={() => history.push(`/customer/checkout?slug=${teacher && teacher.slug}&_id=${teacher._id}`)}
                // onClick={() =>
                //   dispatch(showPaymentModal(TeacherDataForPayment))
                // }
                >
                  Hire Now
              </button>
              </div>
            </div>
          </div>
        </InnerPagesLayout>}

    </Fragment >
  );
}

export default TeacherPage;
