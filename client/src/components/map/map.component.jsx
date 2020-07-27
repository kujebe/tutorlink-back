import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import { getUserLocationStart } from "store/map/map-actions";

import MarkerPopup from "components/marker-popup/marker-popup.component";

import "./map.styles.scss";
import markerIcon from "assets/images/teacher-icon.png";

const myIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [40, 40],
});

const MyMarker = (props) => {
  const initMarker = (ref) => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };

  return <Marker ref={initMarker} {...props} />;
};

const mapApiEndpoint =
  "https://api.mapbox.com/styles/v1/ssngtechlabs/ckcz14gv7055a1iun9soav7zf/tiles/256/{z}/{x}/{y}@2x?access_token=" +
  process.env.REACT_APP_MAPBOX_API_KEY;

const MapContainer = () => {
  const dispatch = useDispatch();
  const userLocation = useSelector((state) => state.mapData.userLocation);

  useEffect(() => {
    dispatch(getUserLocationStart());
  }, [dispatch]);

  return (
    <Fragment>
      {userLocation.length > 0 && (
        <Map
          center={userLocation}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={mapApiEndpoint}
          />
          <MyMarker position={userLocation} icon={myIcon}>
            <Popup className="my-popup">
              <MarkerPopup />
            </Popup>
          </MyMarker>
        </Map>
      )}
    </Fragment>
  );
};

export default MapContainer;
