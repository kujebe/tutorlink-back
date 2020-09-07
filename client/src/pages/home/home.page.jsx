import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Map from "components/map/map.component";
import MapTeacherDetails from "components/map-teacher-details/map-teacher-details.component";

const HomePage = () => {
  const selectedTeacherFromMap = useSelector(
    (state) => state.customer.selectedTeacherFromMap
  );

  return (
    <Fragment>
      <Map />
      {selectedTeacherFromMap.slug && <MapTeacherDetails />}
    </Fragment>
  );
};

export default HomePage;
