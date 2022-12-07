import classes from "./GoogleMaps.module.css";
import { useState, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Loading from "../../pages/Loading/Loading";
import constant from "../../constant";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = { lat: 48.8584, lng: 2.2945 };

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: constant.API_KEY,
    libraries: ["places"],
  });
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  const calculateRoute = async () => {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  };

  const clearOriginRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
  };

  const clearDestinationRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    destiantionRef.current.value = "";
  };

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <section
      id="contact"
      className={`${classes["google-map"]} ${classes["section-bg"]}`}
    >
      <div className="container">
        <div className={classes["section-title"]}>
          <h2>Maps</h2>
          <p>Find way</p>
        </div>

        <div className="row justify-content-around">
          <div className="col-lg-6 m-3">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
              options={{
                fullscreenControl: false,
              }}
              onLoad={(map) => setMap(map)}
            >
              <Marker
                position={center}
                onLoad={(marker) => console.log("marker", marker)}
              />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </div>
          <div className="col-lg-5 pt-4 pt-lg-0 float-end">
            <div className={classes["form-location"]}>
              <div className={`${classes["info"]} row`}>
                <div className={classes["distance"]}>
                  <i className="fa-solid fa-location-pin"></i>
                  <h4>Distance:</h4>
                  <p>{distance}</p>
                </div>

                <div className={classes["duration"]}>
                  <i className="fa-solid fa-clock"></i>
                  <h4>Duration:</h4>
                  <p>{duration}</p>
                </div>

                <div
                  className={classes["location-center"]}
                  onClick={(event) => map.panTo(center)}
                >
                  <i className="fa-solid fa-location-arrow"></i>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <Autocomplete>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Origin"
                      ref={originRef}
                    />
                  </Autocomplete>
                  <i
                    className={`fa-solid fa-xmark ${classes["icon-cancel"]}`}
                    onClick={clearOriginRoute}
                  ></i>
                </div>
                <div className="col-md-12 form-group mt-3 mt-md-0">
                  <Autocomplete>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Destination"
                      ref={destiantionRef}
                    />
                  </Autocomplete>
                  <i
                    className={`fa-solid fa-xmark ${classes["icon-cancel"]}`}
                    onClick={clearDestinationRoute}
                  ></i>
                </div>
              </div>

              <div className={`${classes["info"]} row`}>
                <div className="col-lg-6">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={calculateRoute}
                  >
                    Direct
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMaps;
