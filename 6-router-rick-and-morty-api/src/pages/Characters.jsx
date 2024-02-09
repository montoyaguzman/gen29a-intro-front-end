import { useEffect, useState } from "react";
import { getAllCharacters } from "../services/characterServices";
import PersonajesList from "../components/PersonajesList";
import PersonajeCard from "../components/PersonajeCard";

const Characters = () => {
  const [personajes, setPersonajes] = useState([]);

  const getCharactersData = async () => {
    try {
      const response = await getAllCharacters();
      const { results } = response.data;
      setPersonajes(results);
    } catch (error) {
      console.log("Paso un error", error);
    }
  };

  useEffect(() => {
    getCharactersData();
  }, []);

  return (
    <div className="bg-body-tertiary">
      <h1 className="text-center">Characters</h1>

      <PersonajesList>
        {personajes.map((personaje) => (
          <PersonajeCard
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            image={personaje.image}
            status={personaje.status}
            species={personaje.species}
          />
        ))}
      </PersonajesList>
    </div>
  );
};

export default Characters;
