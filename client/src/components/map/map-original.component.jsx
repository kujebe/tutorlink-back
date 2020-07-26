import React, { useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";

import useRequest from "custom-hooks/swr-hoc";

import Spinner from "components/spinner/spinner.component";
import MarkerPopup from "components/marker-popup/marker-popup.component";

import markerIcon from "assets/images/teacher-icon.png";

import { mapStyles } from "./map-styles";
import styles from "./map.module.scss";

const Marker = ({ children }) => children;

const ReactMap = () => {
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);

  const userLocation = useSelector((state) => state.mapData.userLocation);

  const createMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      panControl: false,
      mapTypeControl: false,
      styles: mapStyles,
      gestureHandling: "none",
      zoomControl: false,
    };
  };

  const { data, error } = useRequest(
    "/home",
    `?longitude=${userLocation.longitude}&latitude=${userLocation.latitude}`
  );

  const { REACT_APP_GOOGLE_MAPS_API_KEYS } = process.env;

  if (!data) {
    return <Spinner />;
  }

  if (data && !error) {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAPS_API_KEYS }}
          center={[userLocation.latitude, userLocation.longitude]}
          defaultZoom={15}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => {
            mapRef.current = map;
          }}
          onChange={({ center, zoom, bounds, marginBounds }) => {
            setZoom(zoom);
            setBounds([
              bounds.nw.lng,
              bounds.se.lat,
              bounds.se.lng,
              bounds.nw.lat,
            ]);
          }}
          options={createMapOptions()}
        >
          <Marker lat={userLocation.latitude} lng={userLocation.longitude}>
            <MarkerPopup
              mapData={data.mapPopupData}
              count={data.count}
              distance={data.distance}
            />
            <button className={styles.marker_containter}>
              <img src={markerIcon} alt="Teachers Icon" />
            </button>
          </Marker>
        </GoogleMapReact>
      </div>
    );
  }
};

export default ReactMap;
