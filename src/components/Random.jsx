import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerNumeroAleatorio } from "../redux/actions";

export default function Random() {
  const number = useSelector((state) => state.number); // trae algo de un estado externo. 
  const isLoading = useSelector((state) => state.isLoading);
  const isError = useSelector((state) => state.isError);
  const dispatch = useDispatch();

  useEffect(() => { //se carga luego que se renderiza el componente.
    dispatch(obtenerNumeroAleatorio());
  }, []); //implica que no depende de ningun valor 

  return (
    <div>
      <h2>Random Number: {number}</h2>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Hubo un error en la llamada</div>}
      <button onClick={() => dispatch(obtenerNumeroAleatorio())}>Update</button>
    </div>
  );
}