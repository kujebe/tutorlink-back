import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addChildStart } from "store/customer/customer-actions";

import styles from "./left-section.module.scss";

import ModalContainer from "./modal-container.component";
import CustomerChildForm from "components/customer-child-form/cutomer-child-form.component";
import Button from "components/button/button.component";

const AddChildModal = ({ closeModal }) => {
  const [state, setState] = useState({
    fullname: "",
    age: "",
    gender: "",
    school: "",
    class: "",
  });
  const { token, id } = useSelector((state) => state.user.sessionData);
  const isLoading = useSelector((state) => state.customer.isLoading);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const addChild = () => {
    dispatch(
      addChildStart({
        user: id,
        token,
        fullname: state.fullname,
        age: state.age,
        gender: state.gender,
        school: state.school,
        class: state.class,
      })
    );
  };

  const handleSelectChange = (fieldName, selectedOptions) => {
    if (selectedOptions !== null) {
      setState({ ...state, [fieldName]: selectedOptions })
    }

  };

  return (
    <ModalContainer
      closeAction={closeModal}
      closeValue={false}
      modalTitle="Add Child Profile"
    >
      <CustomerChildForm
        state={state}
        changeAction={handleChange}
        handleSelectChange={handleSelectChange}
      />

      <div className={styles.modal_button_wrapper}>
        <Button
          type="submit"
          buttonType="submit"
          label="Save"
          onClick={addChild}
          isLoading={isLoading}
          required
        />
      </div>
    </ModalContainer>
  );
};

export default AddChildModal;
