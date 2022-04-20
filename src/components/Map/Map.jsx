import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Map, { Source, Layer } from "react-map-gl";

const Maps = ({
  data,
  type,
  initialViewState,
  onMove,
  loading,
  dataLayerType,
}) => {
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  } else {
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
          {type === "Heat Map" && <Layer {...dataLayerType.data} />}
          {type === "3D Indoor" && <Layer {...dataLayerType.data} />}
          {type === "Both- Heat Map and 3D Indoor" && (
            <Layer {...dataLayerType.data} />
          )}
          {type === "Both- Heat Map and 3D Indoor" && (
            <Layer {...dataLayerType.both} />
          )}
        </Source>
      </Map>
    );
  }
};

export default Maps;
