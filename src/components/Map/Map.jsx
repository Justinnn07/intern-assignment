import React from "react";
import Map, { Source, Layer } from "react-map-gl";
import { heatMapLayer, dataLayer } from "../../data/mapLayers";

const Maps = ({ data, type, initialViewState, onMove }) => {
  return (
    <Map
      onMove={(e) => onMove(e.viewState)}
      latitude={initialViewState?.latitude}
      longitude={initialViewState?.longitude}
      pitch={initialViewState?.pitch}
      bearing={initialViewState?.bearing}
      style={{ width: "100vw", height: "92vh" }}
      zoom={initialViewState.zoom}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="pk.eyJ1IjoianVzdGlubm4wNyIsImEiOiJja2hjOHh2amowNW9kMnVub3VmcmVja210In0.9Yf8r2YIHGiBnrtBGN-LkA"
    >
      <Source type="geojson" data={data}>
        {type === "Heat Map" && <Layer {...heatMapLayer} />}
        {type === "3D Indoor" && <Layer {...dataLayer} />}
        {type === "Both- Heat Map and 3D Indoor" && <Layer {...heatMapLayer} />}
        {type === "Both- Heat Map and 3D Indoor" && <Layer {...dataLayer} />}
      </Source>
    </Map>
  );
};

export default Maps;
