import { secondDataSetCordinates } from "../actions/actions";
import staticData from "../staticData/staticData.json";

export const dataSet1Settings = (
  setFloor,
  onMove,
  setCordinates,
  setLoading
) => {
  setLoading(true);
  setFloor("Heat Map");
  onMove({
    longitude: -87.61694,
    latitude: 41.86625,
    zoom: 17,
    pitch: 40,
    bearing: 20,
    antialias: true,
  });
  setCordinates(staticData);
  setInterval(() => {
    setLoading(false);
  }, 200);
};

export const dataSet2Settings = (
  setFloor,
  onMove,
  setCordinates,
  setLoading
) => {
  setFloor("Heat Map");
  secondDataSetCordinates(setCordinates, setLoading);
  onMove({
    longitude: -120,
    latitude: 50,
    zoom: 0,
    pitch: 0,
    bearing: 0,
    antialias: true,
  });
};
