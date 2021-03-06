import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateProfileStart } from "store/customer/customer-actions";

import styles from "./left-section.module.scss";

import ModalContainer from "./modal-container.component";
import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

const UpdateProfileModal = ({ closeModal }) => {
  const { token, id, email } = useSelector((state) => state.user.sessionData);
  const isLoading = useSelector((state) => state.customer.isLoading);
  const { address, fullname } = useSelector(
    (state) => state.customer.customerData.dashboardTopData
  );

  const [state, setState] = useState({
    fullname: fullname ? fullname : "",
    address: address ? address : "",
  });

  const dispatch = useDispatch();

  const handleChhange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const updateProfile = () => {
    dispatch(
      updateProfileStart({
        user: id,
        token,
        fullname: state.fullname,
        address: state.address,
      })
    );
  };
  return (
    <ModalContainer
      closeAction={closeModal}
      closeValue={false}
      modalTitle="Update Your Profile"
    >
      <FormInput
        type="text"
        name="fullname"
        value={state.fullname}
        onChange={handleChhange}
        label="Your full name"
      />
      <FormInput
        type="text"
        name="email"
        value={email}
        label="Your email"
        disabled
      />
      <FormInput
        type="text"
        name="address"
        value={state.address}
        onChange={handleChhange}
        label="Your address"
      />
      <div className={styles.modal_button_wrapper}>
        <Button
          type="submit"
          buttonType="submit"
          label="Update"
          onClick={updateProfile}
          isLoading={isLoading}
          // disabled={state.address.length < 5}
        />
      </div>
    </ModalContainer>
  );
};

export default UpdateProfileModal;
