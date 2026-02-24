import { GET_SONG } from "../actions";

const initialState = {
  songObject: null,
};

const songReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_SONG:
      return {
        ...currentState,
        songObject: action.payload,
      };
    default:
      return currentState;
  }
};

export default songReducer;
