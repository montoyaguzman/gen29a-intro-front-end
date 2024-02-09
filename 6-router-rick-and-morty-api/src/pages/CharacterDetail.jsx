import { useEffect, useState } from "react";
// useParams es un hook que nos permite acceder a los parámetros de la URL
import { useParams } from "react-router-dom";
import { getCharacterId } from "../services/characterServices";

const CharacterDetail = () => {
  // Obtenemos el id del personaje de la URL, obtenemos el id que previamente definimos en la ruta
  // Ver en el archivo RoutesIndex.jsx linea 15
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({});

  const getCharacterData = async () => {
    try {
      // Hacemos la petición a la API con el id del personaje
      // El id lo obtenemos de la URL, ver linea 9
      const response = await getCharacterId(id);
      // Obtenemos los datos del personaje
      const { data } = response;
      // Actualizamos el estado con los datos del personaje
      setPersonaje(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacterData();
  }, []);

  return (
    <div className="container marketing">
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            {personaje.name} - 
            <span className="text-body-secondary">{personaje.species}</span>
          </h2>
          <p className="lead">
            {personaje.origin?.name} - {personaje.location?.name}
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={personaje.image}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
