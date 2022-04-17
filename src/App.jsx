import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Maps from "./components/Map/Map";

const App = () => {
  const [cordinates, setCordinates] = useState(null);
  const [selectData, setSelectData] = useState("Select Data");
  const [floor, setFloor] = useState("Select Floor");

  useEffect(() => {
    fetch("https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson")
      .then((res) => res.json())
      .then((data) => setCordinates(data));
  }, []);

  return (
    <div>
      <Header
        floor={floor}
        setFloor={setFloor}
        selectData={selectData}
        setSelectData={setSelectData}
      />
      <Maps data={cordinates} />
    </div>
  );
};

export default App;
