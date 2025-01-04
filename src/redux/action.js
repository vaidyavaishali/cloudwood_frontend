import { useDispatch } from "react-redux";
import { initializeSocket } from "../components/socket";

const dispatch = useDispatch();

useEffect(() => {
  initializeSocket(dispatch);
}, [dispatch]);