import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "components/spinner/spinner.component";
import Map from "components/map/map.component";
import MapTeacherDetails from "components/map-teacher-details/map-teacher-details.component";
import { getUserLocationStart } from "store/map/map-actions";

const HomePage = () => {
  const userLocation = useSelector((state) => state.mapData.userLocation);
  const selectedTeacher = useSelector((state) => state.mapData.selectedTeacher);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserLocationStart());
  }, [dispatch]);

  return (
    <Fragment>
      {!userLocation ? (
        <Spinner />
      ) : (
        <Fragment>
          <Map />
          {selectedTeacher && <MapTeacherDetails />}
        </Fragment>
      )}
    </Fragment>
  );
};

export default HomePage;
