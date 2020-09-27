import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addChildStart } from "store/customer/customer-actions";

import styles from "./left-section.module.scss";

import ModalContainer from "./modal-container.component";
import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

const UpdateChildModal = ({ closeModal, value, index }) => {
  const [state, setState] = useState({
    fullname: value.fullname,
    age: value.age,
    gender: value.gender,
    school: value.school,
    class: value.class,
  });
  const { token, id } = useSelector((state) => state.user.sessionData);
  const isLoading = useSelector((state) => state.customer.isLoading);

  const dispatch = useDispatch();

  const handleChhange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const addChild = () => {
    dispatch(
      addChildStart({
        childData: state,
        user: id,
        token,
        index,
      })
    );
  };

  return (
    <ModalContainer
      closeAction={closeModal}
      closeValue={false}
      modalTitle="Update Child Profile"
    >
      <FormInput
        type="text"
        name="fullname"
        value={state.fullname ? state.fullname : ""}
        onChange={handleChhange}
        label="Child full name"
      />
      <FormInput
        type="number"
        name="age"
        value={state.age ? state.age : ""}
        onChange={handleChhange}
        label="Child age"
      />
      <FormInput
        type="text"
        name="school"
        value={state.school ? state.school : ""}
        onChange={handleChhange}
        label="Child school"
      />
      <FormInput
        type="text"
        name="class"
        value={state.class ? state.class : ""}
        onChange={handleChhange}
        label="Child class"
      />
      <FormInput
        type="text"
        name="gender"
        value={state.gender}
        onChange={handleChhange}
        label="Child Gender"
      />
      <div className={styles.modal_button_wrapper}>
        <Button
          type="submit"
          buttonType="submit"
          label="Save"
          onClick={addChild}
          isLoading={isLoading}
        />
      </div>
    </ModalContainer>
  );
};

export default UpdateChildModal;
