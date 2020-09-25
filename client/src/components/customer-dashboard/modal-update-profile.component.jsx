import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateProfileStart } from "store/customer/customer-actions";

import styles from "./left-section.module.scss";

import ModalContainer from "./modal-container.component";
import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

const UpdateProfileModal = ({ closeModal }) => {
  const [newFullname, setNewFullname] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const { token, id } = useSelector((state) => state.user.sessionData);
  const isLoading = useSelector((state) => state.customer.isLoading);
  const { address } = useSelector((state) => state.customer.customerData);
  const { fullname, email } = useSelector((state) => state.user.sessionData);

  const dispatch = useDispatch();

  const updateProfile = () => {
    // dispatch(
    //   updateProfileStart({
    //     user: id,
    //     token,
    //     fullame: newFullname,
    //     address: newAddress,
    //   })
    // );
  };

  useEffect(() => {
    setNewFullname(fullname);
    setNewAddress(address);
  }, [fullname, address]);

  return (
    <ModalContainer
      closeAction={closeModal}
      closeValue={false}
      modalTitle="Update Your Profile"
    >
      <FormInput
        type="text"
        name="fullname"
        value={newFullname}
        onChange={(e) => setNewFullname(e.target.value)}
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
        value={newAddress ? newAddress : ""}
        onChange={(e) => setNewAddress(e.target.value)}
        label="Your address"
      />
      <div className={styles.modal_button_wrapper}>
        <Button
          type="submit"
          buttonType="submit"
          label="Update"
          onClick={updateProfile}
          isLoading={isLoading}
          disabled={!newAddress}
        />
      </div>
    </ModalContainer>
  );
};

export default UpdateProfileModal;
