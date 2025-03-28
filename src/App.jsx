import { BrowserRouter, Route, Router, Routes } from "react-router";
import Dwork1 from "./components/Dwork1";
import Dwork2 from "./components/Dwork2";
import Dwork3 from "./components/Dwork3";
import Dwork4 from "./components/Dwork4";

const App = () => {
  return (
    <div>
      <div className="p-4 text-4xl text-amber-300 border-red-500/70 border-4 w-[300px] rounded-4xl text-center">
        salam
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/dwork1" element={<Dwork1 />}></Route>
          <Route path="/dwork2" element={<Dwork2 />}></Route>
          <Route path="/dwork3" element={<Dwork3 />}></Route>
          <Route path="/dwork4" element={<Dwork4 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
