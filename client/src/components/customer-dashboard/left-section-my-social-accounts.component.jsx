import React from "react";

import styles from "./left-section.module.scss";

import { ReactComponent as GreyFacebook } from "assets/images/grey-facebook-icon.svg";
import { ReactComponent as GreyTwitter } from "assets/images/grey-twitter-icon.svg";
import { ReactComponent as GreyInstagram } from "assets/images/grey-instagram-icon.svg";
import { ReactComponent as GreyLinkedin } from "assets/images/grey-linkedin-icon.svg";

const MySocialAccounts = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.title}>Social Media</div>
        <div className={styles.edit_profile}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_wrapper}>
          <div className={styles.social_placeholder}>
            <GreyFacebook />
            <GreyTwitter />
            <GreyLinkedin />
            <GreyInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySocialAccounts;
