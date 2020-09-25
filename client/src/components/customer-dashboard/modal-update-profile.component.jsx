import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateProfileStart } from "store/customer/customer-actions";

import styles from "./left-section.module.scss";

import ModalContainer from "./modal-container.component";
import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

const UpdateProfileModal = ({ closeModal }) => {
  const [state, setState] = useState({
    fullname: "",
    address: "",
  });
  const [newAddress, setNewAddress] = useState("");
  const { token, id } = useSelector((state) => state.user.sessionData);
  const isLoading = useSelector((state) => state.customer.isLoading);
  const { address } = useSelector((state) => state.customer.customerData);
  const { fullname, email } = useSelector((state) => state.user.sessionData);

  const dispatch = useDispatch();

  const handleChhange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

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
    setState({ ...state, fullname, email });
  }, [fullname, address]);
  console.log(state);

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
          disabled={!newAddress}
        />
      </div>
    </ModalContainer>
  );
};

export default UpdateProfileModal;
