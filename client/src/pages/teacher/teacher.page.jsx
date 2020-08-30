import React from "react";
import { useParams } from "react-router-dom";

import useRequest from "custom-hooks/swr-hoc";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";
import TeacherProfileSummary from "components/teacher-profile-summary/teacher-profile-summary.component";

import styles from "./teacher.module.scss";

import { ReactComponent as MembershipIcon } from "assets/images/membership-icon.svg";
import { ReactComponent as RatingIcon } from "assets/images/rating-icon.svg";
import { ReactComponent as SubjectsIcon } from "assets/images/subject-icon.svg";
import { ReactComponent as TaughtIcon } from "assets/images/taught-icon.svg";
import { ReactComponent as HiredIcon } from "assets/images/hired-icon.svg";

const TeacherPage = () => {
  const { slug } = useParams();
  const { data, error } = useRequest("/teachers/", slug);

  if (!data) {
    return "";
  }

  if (data && !error) {
    if (data.error && data.error.notFound) {
      return (
        <InnerPagesLayout>
          <div className={styles.not_found_wrapper}>
            <span>:TEACHER NOT FOUND:</span>
          </div>
        </InnerPagesLayout>
      );
    }
    const { teacher, subjectSkills, techSkills } = data;

    return (
      <InnerPagesLayout>
        <div className={styles.container}>
          <TeacherProfileSummary teacher={teacher} />
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
              {subjectSkills.map((subject) => (
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
              {techSkills.map((subject) => (
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
              <button>Hire Now</button>
            </div>
          </div>
        </div>
      </InnerPagesLayout>
    );
  }
};

export default TeacherPage;
