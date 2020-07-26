import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Map from "components/map/map.component";
import MapTeacherDetails from "components/map-teacher-details/map-teacher-details.component";

const HomePage = () => {
  const selectedTeacher = useSelector((state) => state.mapData.selectedTeacher);

  return (
    <Fragment>
      <Map />
      {selectedTeacher && <MapTeacherDetails />}
    </Fragment>
  );
};

export default HomePage;
