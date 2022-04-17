export const getFirstDataSetCordinates = (props) => {
  fetch("https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson")
    .then((res) => res.json())
    .then((data) => props(data));
};
export const secondDataSetCordinates = (props) => {
  fetch("https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson")
    .then((res) => res.json())
    .then((data) => props(data));
};
