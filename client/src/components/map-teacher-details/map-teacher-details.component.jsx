import React from "react";
import { useSelector } from "react-redux";
import { PieChart } from "react-minimal-pie-chart";
import StarRatings from "react-star-ratings";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import useRequest from "custom-hooks/swr-hoc";

import Tags from "components/tags/tags.component";
import Spinner from "components/spinner/spinner.component";
import CloseIcon from "components/close-icon/close-icon.component";

import hiredIcon from "assets/images/hired-icon.png";
import achievementIcon from "assets/images/achievement-icon.png";

import "react-tabs/style/react-tabs.scss";
import styles from "./map-teacher-details.module.scss";

const MapTeacherDetails = () => {
  const defaultLabelStyle = {
    fontSize: "8px",
    fontFamily: "sans-serif",
    fill: "#fff",
    pointerEvents: "none",
  };

  const selectedTeacherSlug = useSelector(
    (state) => state.teacher.selectedTeacherSlug
  );

  const { data, error } = useRequest("/teachers", `/${selectedTeacherSlug}`);

  if (!data) {
    return (
      <div className={`${styles.full_details_container} ${styles.opened}`}>
        <Spinner />
      </div>
    );
  }

  if (data && !error) {
    const { teacher, subjectSkills, techSkills } = data;

    return (
      <div className={`${styles.full_details_container} ${styles.opened}`}>
        <CloseIcon />
        <div className={styles.header_wrapper}>
          <div className={styles.thumbnail}>
            <img
              src={`/images/profile/${teacher.profile}`}
              alt={teacher.name}
            />
          </div>
          <div className={styles.info_wrapper}>
            <h2 className={styles.name}>
              {teacher.firstname + " " + teacher.lastname}
            </h2>
            <div className={styles.experience}>
              <span className={styles.title}>Experience:</span>
              <span>{teacher.experience} Years Experience</span>
            </div>
            <div className={styles.education}>
              <span className={styles.title}>Education:</span>
              <span>{teacher.education.join(", ")}</span>
            </div>
            <StarRatings
              className={styles.ratings}
              rating={teacher.rating}
              starDimension="24px"
              starSpacing="2px"
              starRatedColor="#FEBF00"
              starHoverColor="blue"
            />
          </div>
        </div>
        <div className={styles.levels_wrapper}>
          <Tags taggables={teacher.classes} />
        </div>
        <Tabs>
          <TabList>
            <Tab>Subject Skills</Tab>
            <Tab>Tech Skills</Tab>
          </TabList>

          <TabPanel>
            <div className={styles.chart_wrapper}>
              <PieChart
                className={styles.skills_chart}
                data={subjectSkills}
                paddingAngle={3}
                radius={PieChart.defaultProps.radius - 4}
                segmentsShift={(index) => (index === 0 ? 4 : 0.5)}
                label={({ dataEntry }) => `${dataEntry.value} Years`}
                lengthAngle={-360}
                animate
                labelStyle={{
                  ...defaultLabelStyle,
                }}
              />
              <div className={styles.legends}>
                {subjectSkills.map((skill) => (
                  <div key={skill.title} className={styles.legend}>
                    <span
                      className={styles.legend_color}
                      style={{ background: `${skill.color}` }}
                    ></span>
                    <div className={styles.legend_label}>{skill.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.chart_wrapper}>
              <PieChart
                className={styles.skills_chart}
                data={techSkills}
                paddingAngle={3}
                radius={PieChart.defaultProps.radius - 4}
                segmentsShift={(index) => (index === 0 ? 4 : 0.5)}
                label={({ dataEntry }) => `${dataEntry.value} Years`}
                lengthAngle={-360}
                animate
                labelStyle={{
                  ...defaultLabelStyle,
                }}
              />
              <div className={styles.legends}>
                {techSkills.map((skill) => (
                  <div key={skill.title} className={styles.legend}>
                    <span
                      className={styles.legend_color}
                      style={{ background: `${skill.color}` }}
                    ></span>
                    <div className={styles.legend_label}>{skill.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
        <div className={styles.teachers_activities}>
          <div>
            <img
              className={styles.activities_icon}
              src={hiredIcon}
              alt="Number of times hired"
            />
            <span>Hired 40 times</span>
          </div>
          <div>
            <img
              className={styles.activities_icon}
              src={achievementIcon}
              alt="Number of times hired"
            />
            <span>60 students tutored</span>
          </div>
        </div>
        <div className={styles.actions}>
          <Link to={`/teacher/${teacher.slug}`} className={styles.hire_now_btn}>
            HIRE NOW
          </Link>
          <Link to={`/teacher/${teacher.slug}`} className={styles.view_details}>
            View Details
          </Link>
        </div>
      </div>
    );
  }
};

export default MapTeacherDetails;
