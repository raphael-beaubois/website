import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDlxm2lLXSd8cJdrKjJ5U908zbnPKPYRM8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `80vh` }} />,
    containerElement: <div style={{ height: `80vh` }} />,
    mapElement: <div style={{ height: `100vh` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 45.5016889, lng: -73.567256 }}   
  options={{
        styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0 }, {'filter': 'grayscale(10%)'}] }]
        
    }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 45.5016889, lng: -73.567256 }} />
    )}


  </GoogleMap>
  ));

export default MyMapComponent