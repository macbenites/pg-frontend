import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


const mapContainerStyle = {
    width: '400px',
    height: '400px'
};  
const center = {
    lat: -34.603683,
    lng: -58.381557
};


export default function Map() {
    const { isLoaded } = useLoadScript({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAmGUAr0wsDBFxGTUiBjCpe1IKrY-7DZIQ",
      });

      return (
          <div>
              {
                isLoaded ? (
                    <GoogleMap
                        mapContainerStyle = {mapContainerStyle}
                        center = {center}
                        zoom = {11}
                    >
                    <Marker />
                    </GoogleMap>
                ) : <></>
              }
          </div>
      )
}