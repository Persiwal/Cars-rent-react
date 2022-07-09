import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cars from "./pages/Cars/Cars";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

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
