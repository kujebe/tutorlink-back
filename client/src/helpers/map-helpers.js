// export const getCurrentPositionPromise = function (options) {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject, options);
//   });
// };

export const getCurrentPositionPromise = () => {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve([
          parseFloat(position.coords.latitude.toFixed(4)),
          parseFloat(position.coords.longitude.toFixed(4)),
        ]);
      },
      () => {
        resolve(
          fetch("https://ipapi.co/json") //get user location by IP
            .then((res) => res.json())
            .then((location) => {
              return [location.latitude, location.longitude];
            })
        );
      },
      {
        enableHighAccuracy: true,
        // maximumAge: 1000,
        // timeout: 100000,
      }
    );
  });
};
