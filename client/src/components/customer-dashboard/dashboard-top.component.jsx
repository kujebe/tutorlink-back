import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatDistance, format } from "date-fns";
import StarRatings from "react-star-ratings";

import { uploadCustomerAvatarStart } from "store/customer/customer-actions";

import styles from "./dashboard-top.module.scss";

import EditIcon from "components/edit-icon/edit-icon.component";
import { ReactComponent as LocationIcon } from "assets/images/location-pin-icon.svg";
import { ReactComponent as UserProfile } from "assets/images/user-profile-icon.svg";
import { ReactComponent as GreyFacebook } from "assets/images/grey-facebook-icon.svg";
import { ReactComponent as GreyTwitter } from "assets/images/grey-twitter-icon.svg";
import { ReactComponent as GreyInstagram } from "assets/images/grey-instagram-icon.svg";
import { ReactComponent as GreyLinkedin } from "assets/images/grey-linkedin-icon.svg";

const DashboardTop = () => {
  const { dashboardTopData } = useSelector(
    (state) => state.customer.customerData
  );
  // const { isLoading } = useSelector((state) => state.customer);
  const { token, id } = useSelector((state) => state.user.sessionData);

  const dispatch = useDispatch();

  const status = (customerStatus) => {
    if (customerStatus === 1) {
      return <span className={styles.active}>Active</span>;
    } else {
      return <span className={styles.inActive}>Inactive</span>;
    }
  };

  async function updateProfilePhoto(e) {
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    formData.append("user", id);
    dispatch(uploadCustomerAvatarStart({ token, formData }));
  }

  return (
    <div className={styles.top_wrapper}>
      <div className={styles.top_left}>
        <div className={styles.profile_img}>
          {dashboardTopData.profilePhoto ? (
            <img
              src={`${process.env.PUBLIC_URL}/images/customer-avatar/${dashboardTopData.profilePhoto}`}
              alt="User profile"
            />
          ) : (
            <UserProfile className={styles.avatar} />
          )}
          <div className={styles.online_indicator}></div>
          <div className={styles.edit_profile_image}>
            <input
              type="file"
              id="avatar"
              name="avatar"
              style={{ display: "none" }}
              onChange={updateProfilePhoto}
            />
            <label htmlFor="avatar">
              <EditIcon />
            </label>
          </div>
        </div>
        <div className={styles.profile_meta}>
          <div className={styles.name_and_status}>
            <div className={styles.name}>
              <h2>{dashboardTopData.fullname}</h2>
            </div>
            <div className={styles.status}>
              {status(dashboardTopData.status)}
            </div>
          </div>
          <div className={styles.address}>
            {dashboardTopData.address && (
              <Fragment>
                <LocationIcon />
                {dashboardTopData.address}
              </Fragment>
            )}
          </div>
          <StarRatings
            className={styles.ratings}
            rating={dashboardTopData.ratings}
            starDimension="20px"
            starSpacing="1px"
            starRatedColor="#FEBF00"
            starHoverColor="blue"
          />
        </div>
      </div>
      <div className={styles.top_right}>
        <div className={styles.right_meta}>
          <span>Phone Nos: </span>
          {dashboardTopData.telephone.length > 0 ? (
            <div className={styles.right}>
              {dashboardTopData.telephone.join(", ")}
            </div>
          ) : (
            "-"
          )}
        </div>
        <div className={styles.right_meta}>
          <span>Member Since: </span>
          <div>{format(new Date(dashboardTopData.dateJoined), "PP")}</div>
        </div>
        <div className={styles.right_meta}>
          <span>Last Login: </span>
          <div>
            {formatDistance(new Date(), new Date(dashboardTopData.lastLogin)) +
              " ago"}
          </div>
        </div>
        <div className={styles.right_meta}>
          <span>Social Accounts: </span>
          <div className={styles.social_placeholder}>
            <GreyFacebook
              className={dashboardTopData.social[0].facebook && styles.active}
            />
            <GreyTwitter
              className={dashboardTopData.social[0].twitter && styles.active}
            />
            <GreyLinkedin
              className={dashboardTopData.social[0].Linkedin && styles.active}
            />
            <GreyInstagram
              className={dashboardTopData.social[0].instagram && styles.active}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
