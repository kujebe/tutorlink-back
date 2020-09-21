import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveNewPhoneNumberStart } from "store/customer/customer-actions";

import styles from "./left-section.module.scss";

import ModalContainer from "./modal-container.component";
import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

const AddNewPhoneNumber = ({ closeModal }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { token, id } = useSelector((state) => state.user.sessionData);
  const isLoading = useSelector((state) => state.customer.isLoading);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const savePhoneNumber = () => {
    if (phoneNumber.length < 11 || phoneNumber.length > 11) {
      return;
    }
    dispatch(
      saveNewPhoneNumberStart({
        user: id,
        token,
        telephone: phoneNumber,
      })
    );
  };

  console.log(typeof phoneNumber);

  return (
    <ModalContainer
      closeAction={closeModal}
      closeValue={false}
      modalTitle="Add New Phone Number"
    >
      <FormInput
        type="number"
        name="phone_number"
        value={phoneNumber}
        onChange={handleChange}
        label="Enter New Phone Number"
        required
      />
      <div className={styles.modal_button_wrapper}>
        <Button
          type="submit"
          buttonType="submit"
          label="Save"
          onClick={savePhoneNumber}
          isLoading={isLoading}
          disabled={phoneNumber.length < 11 || phoneNumber.length > 11}
        />
      </div>
    </ModalContainer>
  );
};

export default AddNewPhoneNumber;
