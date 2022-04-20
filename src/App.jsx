import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Maps from "./components/Map/Map";
import { getDataLayer } from "./hooks/Hooks";
import cordinateData from "../staticData/staticData.json";
const App = () => {
  const [cordinates, setCordinates] = useState(cordinateData);
  const [selectData, setSelectData] = useState("Dataset 1");
  const [floor, setFloor] = useState("Heat Map");
  const [views, setViews] = useState({
    longitude: -87.61694,
    latitude: 41.86625,
    zoom: 17,
    pitch: 40,
    bearing: 20,
    antialias: true,
  });
  const [loading, setLoading] = useState(false);
  const dataLayerType = getDataLayer(floor);

  console.log(loading);
  return (
    <div>
      <Header
        floor={floor}
        setFloor={setFloor}
        selectData={selectData}
        onMove={setViews}
        setSelectData={setSelectData}
        setCordinates={setCordinates}
        setLoading={setLoading}
      />
      <Maps
        data={cordinates}
        type={floor}
        dataset={selectData}
        initialViewState={views}
        onMove={setViews}
        loading={loading}
        dataLayerType={dataLayerType}
      />
    </div>
  );
};

export default App;
