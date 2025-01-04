import { Route, Routes } from "react-router-dom";
import { User1 } from "./components/User1";
import { User2 } from "./components/User2";

const App = () => {
  return (
      <Routes>
        <Route path="/User-1" element={<User1 />} />
        <Route path="/User-2" element={<User2 />} />
      </Routes>
  );
};

export default App;
