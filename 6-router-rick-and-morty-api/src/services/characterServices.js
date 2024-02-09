import axios from 'axios';
// Se crea una constante con la URL base de la API
const BASE_URL = 'https://rickandmortyapi.com/api';

// Se crea una función asíncrona que hace una petición GET a la API para obtener todos los personajes
const getAllCharacters = async () => axios.get(`${BASE_URL}/character`);
// Se crea una función asíncrona que hace una petición GET a la API para obtener un personaje en específico
const getCharacterId = async (id) => axios.get(`${BASE_URL}/character/${id}`);

export { getAllCharacters, getCharacterId };