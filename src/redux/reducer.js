
// Initial state
const initialState = {
  bedroom: { light1: false, light2: false },
  kitchen: { light1: false, light2: false },
};

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};


