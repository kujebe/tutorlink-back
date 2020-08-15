import React from "react";
import useQuery from "custom-hooks/use-query";

const SignInSignOut = () => {
  const query = useQuery();
  return <div>{query.get("action")}</div>;
};

export default SignInSignOut;
