import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Maps from "./components/Map/Map";

const App = () => {
  const [cordinates, setCordinates] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);
  console.log(hoverInfo);

  useEffect(() => {
    fetch("https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson")
      .then((res) => res.json())
      .then((data) => setCordinates(data));
  }, []);

  const onHover = useCallback((event) => {
    const {
      features,
      point: { x, y },
    } = event;
    const hoveredFeature = cordinates && cordinates[0];

    // prettier-ignore
    setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
  }, []);

  return (
    <div>
      <Header />
      <Maps data={cordinates} onHover={onHover} />
    </div>
  );
};

export default App;
