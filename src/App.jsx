import React, { useEffect, useState } from "react";
import { getFirstDataSetCordinates } from "./actions/actions";
import Header from "./components/Header/Header";
import Maps from "./components/Map/Map";

const App = () => {
  const [cordinates, setCordinates] = useState(null);
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

  useEffect(() => {
    getFirstDataSetCordinates(setCordinates);
  }, []);

  return (
    <div>
      <Header
        floor={floor}
        setFloor={setFloor}
        selectData={selectData}
        onMove={setViews}
        setSelectData={setSelectData}
        setCordinates={setCordinates}
      />
      <Maps
        data={cordinates}
        type={floor}
        dataset={selectData}
        initialViewState={views}
        onMove={setViews}
      />
    </div>
  );
};

export default App;
