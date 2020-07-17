import React from "react";
import useRequest from "utils/swr-hook";

const HomePage = () => {
  const { data, error } = useRequest("/teachers");
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
  return <div>{`I am home page ${data.johnson}`}</div>;
};

export default HomePage;
