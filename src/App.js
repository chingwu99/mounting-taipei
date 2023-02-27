import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Mountingroute from "./pages/mountingroute/Mountingroute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />}></Route>
          <Route path="mountingroute" element={<Mountingroute />}></Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="*" element={<Footer />}></Route>
      </Routes>
    </>
  );
}

export default App;
