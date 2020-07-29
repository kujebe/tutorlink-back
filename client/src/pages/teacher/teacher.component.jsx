import React from "react";
import { useParams } from "react-router-dom";

import useRequest from "custom-hooks/swr-hoc";

import InnerPagesLayout from "components/layout/inner-pages-layout.component";

import styles from "./teacher.module.scss";
import { backgroundColors, textColors } from "theme/colors.js";

import { ReactComponent as VerifiedIcon } from "assets/images/verified.svg";
import { ReactComponent as EducationIcon } from "assets/images/graduated-icon.svg";
import { ReactComponent as ExperienceIcon } from "assets/images/experience-icon.svg";

const TeacherPage = () => {
  const { slug } = useParams();
  const { data, error } = useRequest("/teachers/", slug);

  if (!data) {
    return "";
  }

  if (data && !error) {
    console.log(data);
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
    console.log(data);

    return (
      <InnerPagesLayout>
        <div className={styles.top}>
          <div className={styles.photo}>
            <img
              src={
                process.env.PUBLIC_URL + "/images/profile/" + teacher.profile
              }
              alt={teacher.firstname}
            />
          </div>
          <div className={styles.highlights}>
            <div className={styles.name_status}>
              <h2 className={styles.name}>
                {teacher.firstname + " " + teacher.lastname}
              </h2>
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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </div>
          </div>
        </div>
      </InnerPagesLayout>
    );
  }
};

export default TeacherPage;
