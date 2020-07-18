import React from "react";
import useRequest from "custom-hooks/swr-hoc";

const HomePage = () => {
  const { data, error } = useRequest("/teachers");
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
  return <div>Home Page</div>;
};

export default HomePage;
