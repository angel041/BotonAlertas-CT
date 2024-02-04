import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import Map, {
  Marker,
  GeolocateControl,
  FullscreenControl,
  Source,
  Layer,
  Popup,
  NavigationControl,
} from "react-map-gl";
import "../css/mapa.css";
import { useMap } from "react-map-gl";
import ImagenIcon from "../media/ambulancia.png"
import PaginaEmergencia12 from './NotificacionesAlertas';


const token =
  "pk.eyJ1IjoiYW50b25pb21vcmE4NSIsImEiOiJjbGRmazF4NncwM2pnM3FvOXdjd3dqcWowIn0.N_knZD0YPcH76M9D2TaM4w";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-97.874321, 18.9381977] },
    },
  ],
};

const layerStyle = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#0cbf",
  },
};

function Mapa() {
  const [lng, setLng] = useState(-97.87229019525113);
  const [lat, setLang] = useState(18.93822888593087);
  const [zoom, setZoom] = useState(13);


  return (
    
    <>
    
    
    <div className="mapa">
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          latitude: lat,
          zoom: zoom,
          longitude: lng,
        }}
        style={{
          width: "95vw",
          height: "80vh",
          marginLeft: "40px",
          marginBottom:"400px"
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <GeolocateControl />
        <FullscreenControl />
        <NavigationControl />
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>

        <Marker longitude={-97.8750935} latitude={18.9377715} anchor="bottom">
          <img src={ImagenIcon}  className="icono_Usuario"/>
        </Marker>
      </Map>
    </div>
    </>
  );
  
}

export default Mapa;