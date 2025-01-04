import io from "socket.io-client";

const socket = io("http://localhost:4000");

export const initializeSocket = (dispatch) => {
  socket.on("stateUpdate", (newState) => {
    dispatch({ type: "UPDATE_STATE", payload: newState });
  });
};

export const updateServerState = (newState) => {
  socket.emit("updateState", newState);
};
