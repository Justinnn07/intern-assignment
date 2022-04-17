import React from "react";
import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Maps = ({ data }) => {
  console.log(data);
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
      style={{ width: "100vw", height: "91vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="pk.eyJ1IjoianVzdGlubm4wNyIsImEiOiJja2hjOHh2amowNW9kMnVub3VmcmVja210In0.9Yf8r2YIHGiBnrtBGN-LkA"
    >
      <Source type="geojson" data={data}>
        <Layer {...dataLayer} />
      </Source>
    </Map>
  );
};

export default Maps;
