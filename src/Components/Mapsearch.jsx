import React, { useCallback, useRef } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";


const libraries = ["places"];
const mapContainerStyle = {
    width: '400px',
    height: '400px'
};  
const center = {
    lat: -34.603683,
    lng: -58.381557
};


  
export default function Mapsearch() {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: "AIzaSyAmGUAr0wsDBFxGTUiBjCpe1IKrY-7DZIQ",
      libraries,
    });
    

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14);
    }, []);
  

    if(loadError) return "Error al cargar mapas";
    if(!isLoaded) return "Cargando mapas";
  
    return (
        <div>
            <Search panTo= {panTo} />
            <Location panTo= {panTo} />
            <GoogleMap
                id= "map"
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
                onLoad={onMapLoad}
            >               
            </GoogleMap>
        </div>
    )
}
  


function Location({panTo}) {
    return (
        <button 
            onClick= {() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    }, 
                    () => null
                );
            }}
        >
        🧭
        </button>
    )
}


function Search({panTo}) {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        location: { lat: () => -34.603683, lng: () => -58.381557 },
        radius: 50 * 1000,
      },
    });
  
  
    const handleInput = (e) => {
      setValue(e.target.value);
    };
  
    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();
  
      try {
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        panTo({ lat, lng });
      } catch (error) {
        console.log("Error: ", error);
      }
    };
  
    return (
      <div>
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Busca tu ubicación..."
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ id, description }) => (
                  <ComboboxOption key={id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    );
}
