import { Routes, Route } from "react-router-dom";
import DetailsMovie from "./DetailsMovie";

const DetailsRoute = () => {
  return (
    <Routes>
      <Route path=":title" element={<DetailsMovie />} />
    </Routes>
  );
};

export default DetailsRoute;
