import React from "react";
import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Maps = ({ data, type }) => {
  const dataLayer = {
    id: "room-extrusion",
    type: "fill-extrusion",
    source: "floorplan",

    paint: {
      "fill-extrusion-color": ["get", "color"],
      "fill-extrusion-height": ["get", "height"],
      "fill-extrusion-base": ["get", "base_height"],
      "fill-extrusion-opacity": 0.5,
    },
  };

  const heatMapLayer = {
    id: "heat-map",
    type: "heatmap",
    paint: {
      "heatmap-color": [
        "interpolate",
        ["linear"],
        ["heatmap-density"],
        0,
        "rgba(33,102,172,0)",
        0.2,
        "rgb(103,169,207)",
        0.4,
        "rgb(209,229,240)",
        0.6,
        "rgb(253,219,199)",
        0.8,
        "rgb(239,138,98)",
        1,
        "rgb(178,24,43)",
      ],
    },
  };

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
