import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import Register from "./routes/Register/Register";
import { useState } from "react";
import DetailsRoute from "./routes/Details/DetailsRoute";

function App() {
  const [imageURL, setImageURL] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={<Register imageURL={imageURL} setImageURL={setImageURL} />}
        />
        <Route path="details/*" element={<DetailsRoute />} />
      </Route>
    </Routes>
  );
}

export default App; //
