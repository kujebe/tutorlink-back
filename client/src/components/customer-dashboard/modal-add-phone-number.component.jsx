import React, { useState } from "react";

import ModalContainer from "./modal-container.component";
import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

const AddNewPhoneNumber = ({ closeModal }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <ModalContainer
      closeAction={closeModal}
      closeValue={false}
      modalTitle="Add New Phone Number"
    >
      <FormInput
        type="text"
        name="phone_number"
        value={phoneNumber}
        onChange={handleChange}
        label="Enter New Phone Number"
        required
      />

      <Button
        type="submit"
        buttonType="submit"
        label="Save"
        // onClick={handleSigninWithEmail}
        // isLoading={isAuthenticating}
      />
    </ModalContainer>
  );
};

export default AddNewPhoneNumber;
