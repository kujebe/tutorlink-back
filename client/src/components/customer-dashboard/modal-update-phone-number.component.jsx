import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updatePhoneNumberStart } from "store/customer/customer-actions";

import styles from "./left-section.module.scss";

import ModalContainer from "./modal-container.component";
import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

const UpdatePhoneNumber = ({ closeModal, value, index }) => {
  const [phoneNumber, setPhoneNumber] = useState(value);
  const { token, id } = useSelector((state) => state.user.sessionData);
  const isLoading = useSelector((state) => state.customer.isLoading);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const updatePhoneNumber = () => {
    if (phoneNumber.length < 11 || phoneNumber.length > 11) {
      return;
    }
    dispatch(
      updatePhoneNumberStart({
        user: id,
        token,
        phoneNumber,
        index,
      })
    );
  };

  return (
    <ModalContainer
      closeAction={closeModal}
      closeValue={false}
      modalTitle="Update Phone Number"
    >
      <FormInput
        type="number"
        name="phone_number"
        value={phoneNumber}
        onChange={handleChange}
        label="Edit Phone Number"
        required
      />
      <div className={styles.modal_button_wrapper}>
        <Button
          type="submit"
          buttonType="submit"
          label="Update"
          onClick={updatePhoneNumber}
          isLoading={isLoading}
          disabled={phoneNumber.length < 11 || phoneNumber.length > 11}
        />
      </div>
    </ModalContainer>
  );
};

export default UpdatePhoneNumber;
