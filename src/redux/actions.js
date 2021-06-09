import axios from "axios";
import {
  OBTENER_NUMERO_FAILURE,
  OBTENER_NUMERO_REQUEST,
  OBTENER_NUMERO_SUCCESS
} from "./types";

const obtenerNumeroRequest = () => ({ type: OBTENER_NUMERO_REQUEST });
const obtenerNumeroSuccess = (data) => ({
  type: OBTENER_NUMERO_SUCCESS,
  payload: data
});
const obtenerNumeroFailure = () => ({ type: OBTENER_NUMERO_FAILURE });

export function obtenerNumeroAleatorio() {
  return function (dispatch) {
    dispatch(obtenerNumeroRequest());
    axios
      .get(
        "https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new"
      )
      .then(
        (result) => {
          dispatch(obtenerNumeroSuccess(result.data));
        },
        () => {
          dispatch(obtenerNumeroFailure());
        }
      );
  };
}