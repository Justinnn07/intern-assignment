import React from "react";
import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { heatMapLayer, dataLayer } from "../../data/mapLayers";

const Maps = ({ data, type }) => {
  return (
    <Map
      initialViewState={{
        longitude: -87.61694,
        latitude: 41.86625,
        zoom: 17,
        pitch: 40,
        bearing: 20,
        antialias: true,
      }}
      style={{ width: "100vw", height: "92vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="pk.eyJ1IjoianVzdGlubm4wNyIsImEiOiJja2hjOHh2amowNW9kMnVub3VmcmVja210In0.9Yf8r2YIHGiBnrtBGN-LkA"
    >
      <Source type="geojson" data={data}>
        {type === "Heat Map" && <Layer {...heatMapLayer} />}
        {type === "3D Indoor" && <Layer {...dataLayer} />}
      </Source>
    </Map>
  );
};

export default Maps;
