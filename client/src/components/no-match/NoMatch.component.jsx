import React from "react";
import { withRouter } from "react-router-dom";

import styles from "./no-match.module.scss";

const NoMatch = ({ history: { goBack } }) => {
  return (
    <div className={styles.bg_purple}>
      <div className={styles.stars}>
        <div className={styles.central_body}>
          <div className={styles.go_back} onClick={() => goBack()}>
            Go Back
          </div>
          <img
            src="http://salehriaz.com/404Page/img/404.svg"
            alt="404"
            className={styles.image_404}
            width="300px"
          />
        </div>
        <div className={styles.objects}>
          <img
            src="http://salehriaz.com/404Page/img/rocket.svg"
            alt="Rocket"
            className={styles.object_rocket}
            width="40px"
          />
          <div className={styles.earth_moon}>
            <img
              src="http://salehriaz.com/404Page/img/earth.svg"
              alt="Earth"
              className={styles.object_earth}
              width="100px"
            />
            <img
              src="http://salehriaz.com/404Page/img/moon.svg"
              alt="Moon"
              className={styles.object_moon}
              width="80px"
            />
          </div>
          <div className={styles.box_astronaut}>
            <img
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              alt="Astronaut"
              className={styles.object_astronaut}
              width="140px"
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NoMatch);
