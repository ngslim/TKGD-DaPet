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

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = { lat: 48.8584, lng: 2.2945 };

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDO8rWBm94mFbSeGx2_XydkVMQmDgRjUjM",
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

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  };

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <section id="contact" className={classes["google-map"]}>
      <div className="container">
        <div className={classes["section-title"]}>
          <h2>Contact</h2>
          <p>Contact Us</p>
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
              <div className="row">
                <div className="col-md-6 form-group">
                  <Autocomplete>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      ref={originRef}
                    />
                  </Autocomplete>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <Autocomplete>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      ref={destiantionRef}
                    />
                  </Autocomplete>
                </div>
              </div>
              <div className={`${classes["info"]} row`}>
                <div className={classes["distance"]}>
                  <i className="bi bi-geo-alt"></i>
                  <h4>Distance:</h4>
                  <p>{distance}</p>
                </div>

                <div className={classes["duration"]}>
                  <i className="bi bi-clock"></i>
                  <h4>Duration:</h4>
                  <p>{duration}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={calculateRoute}
                  >
                    Submit
                  </button>
                  <button onClick={(event) => map.panTo(center)}>
                    <i className="fa-solid fa-location-arrow"></i>
                  </button>
                  <button onClick={clearRoute}>
                    <i className="fa-solid fa-eraser"></i>
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
