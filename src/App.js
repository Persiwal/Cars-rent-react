//pages
import Cars from "./pages/Cars/Cars";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

//routing
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
