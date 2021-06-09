import {
  OBTENER_NUMERO_SUCCESS,
  OBTENER_NUMERO_REQUEST,
  OBTENER_NUMERO_FAILURE,
} from "./types";

const initialState = {
  number: null,
  isLoading: false,
  isError: false,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case OBTENER_NUMERO_SUCCESS:
      return {
        ...state,
        number: action.payload,
        isLoading: false,
        isError: false,
      };
    case OBTENER_NUMERO_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case OBTENER_NUMERO_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
}
