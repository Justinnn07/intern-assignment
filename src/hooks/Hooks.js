export const getDataLayer = (props) => {
  let data, both;
  if (props === "Heat Map") {
    data = {
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
          "rgba(46, 138, 138, 1)",
        ],
      },
    };
  } else if (props === "3D Indoor") {
    data = {
      id: "room-extrusion",
      type: "fill-extrusion",
      source: "floorplan",

      paint: {
        "fill-extrusion-color": ["get", "color"],
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-base": ["get", "base_height"],
        "fill-extrusion-opacity": 0.9,
      },
    };
  } else {
    data = {
      id: "room-extrusion",
      type: "fill-extrusion",
      source: "floorplan",

      paint: {
        "fill-extrusion-color": ["get", "color"],
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-base": ["get", "base_height"],
        "fill-extrusion-opacity": 0.9,
      },
    };
    both = {
      id: "heat-map",
      type: "heatmap",
      "heatmap-color": [
        "interpolate",
        ["linear"],
        ["heatmap-density"],
        ["get", "height"],
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
        "rgba(46, 138, 138, 1)",
      ],
    };
  }

  return { data, both };
};
