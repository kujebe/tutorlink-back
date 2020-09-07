import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileStart } from "store/user/user-actions";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.sessionData.token);

  useEffect(() => {
    dispatch(getProfileStart(token));
  });
  if (token) {
    return <h1>My profile</h1>;
  } else {
    return <div>Profile not found</div>;
  }
};

export default ProfilePage;
