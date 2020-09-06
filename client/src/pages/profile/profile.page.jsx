import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { getProfileStart } from "store/user/user-actions";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user.sessionData);

  useEffect(() => {
    dispatch(getProfileStart(token));
  });

  return <div>Profile Page</div>;
};

export default ProfilePage;
