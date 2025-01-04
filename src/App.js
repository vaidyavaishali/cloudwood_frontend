import { Route, Routes } from "react-router-dom";
import { User1 } from "./components/User1";
import { User2 } from "./components/User2";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeSocket } from "./components/socket";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initializeSocket(dispatch);
  }, [dispatch]);

  return (
    // <Router>
      <Routes>
        <Route path="/User-1" element={<User1 />} />
        <Route path="/User-2" element={<User2 />} />
      </Routes>
    // </Router>
  );
};

export default App;
