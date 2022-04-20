export const secondDataSetCordinates = (props, loading) => {
  loading(true);
  fetch("https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson")
    .then((res) => res.json())
    .then((data) => {
      props(data);
      loading(false);
    });
};
