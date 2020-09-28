import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateSocialMediaStart } from "store/customer/customer-actions";

import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

import styles from "./right-section.module.scss";

const SocialAccountList = () => {
  const socialAccounts = useSelector(
    (state) => state.customer.customerData.socialAccounts
  );
  const { token, id } = useSelector((state) => state.user.sessionData);
  const isLoading = useSelector((state) => state.customer.isLoading);

  const [state, setState] = useState({
    facebook: socialAccounts.facebook ? socialAccounts.facebook : "",
    instagram: socialAccounts.instagram,
    twitter: socialAccounts.twitter,
    linkedin: socialAccounts.linkedin,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <h2 className={styles.title}>Social Media Accounts</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.social}>
          <FormInput
            type="text"
            name="facebook"
            value={state.facebook ? state.facebook : ""}
            onChange={handleChange}
            label="Facebook"
          />
          <FormInput
            type="text"
            name="instagram"
            value={state.instagram ? state.instagram : ""}
            onChange={handleChange}
            label="Instagram"
          />
          <FormInput
            type="text"
            name="twitter"
            value={state.twitter ? state.twitter : ""}
            onChange={handleChange}
            label="Twitter"
          />
          <FormInput
            type="text"
            name="linkedin"
            value={state.linkedin ? state.linkedin : ""}
            onChange={handleChange}
            label="Linkedin"
          />
        </div>
        <Button
          type="submit"
          buttonType="submit"
          label="Update"
          onClick={() => dispatch(updateSocialMediaStart({ token, id, state }))}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default SocialAccountList;
