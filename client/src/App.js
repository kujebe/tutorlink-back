import React from "react";
import useRequest from "utils/swr-hook";

function App() {
  const { data, error } = useRequest("/teachers");
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
  return <div> Welcome</div>;
}

export default App;
