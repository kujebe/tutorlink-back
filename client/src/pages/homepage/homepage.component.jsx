import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Map from "components/map/map.component";
import MapTeacherDetails from "components/map-teacher-details/map-teacher-details.component";

const HomePage = () => {
  const selectedTeacherSlug = useSelector(
    (state) => state.teacher.selectedTeacherSlug
  );

  return (
    <Fragment>
      <Map />
      {selectedTeacherSlug && <MapTeacherDetails />}
    </Fragment>
  );
};

export default HomePage;
