import React from "react";
import useRequest from "utils/swr-hook";

import Layout from "components/layout/layout.component";

function App() {
  const { data, error } = useRequest("/teachers");
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
  return (
    <Layout>
      <div> Welcome</div>
    </Layout>
  );
}

export default App;
