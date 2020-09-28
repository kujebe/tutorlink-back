import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import styles from "./left-section.module.scss";

import { ReactComponent as GreyFacebook } from "assets/images/grey-facebook-icon.svg";
import { ReactComponent as GreyTwitter } from "assets/images/grey-twitter-icon.svg";
import { ReactComponent as GreyInstagram } from "assets/images/grey-instagram-icon.svg";
import { ReactComponent as GreyLinkedin } from "assets/images/grey-linkedin-icon.svg";

const MySocialAccounts = () => {
  const socialAccounts = useSelector(
    (state) => state.customer.customerData.socialAccounts[0]
  );

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.title}>Social Media</div>
        <div className={styles.edit_profile}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_wrapper}>
          <div className={styles.social_placeholder}>
            {socialAccounts ? (
              <Fragment>
                <GreyFacebook
                  className={socialAccounts.facebook && styles.active}
                />
                <GreyTwitter
                  className={socialAccounts.twitter && styles.active}
                />
                <GreyLinkedin
                  className={socialAccounts.linkedin && styles.active}
                />
                <GreyInstagram
                  className={socialAccounts.instagram && styles.active}
                />
              </Fragment>
            ) : (
              <Fragment>
                <GreyFacebook />
                <GreyTwitter />
                <GreyLinkedin />
                <GreyInstagram />
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySocialAccounts;
