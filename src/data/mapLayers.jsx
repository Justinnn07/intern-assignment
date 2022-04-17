export const dataLayer = {
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

export const heatMapLayer = {
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
