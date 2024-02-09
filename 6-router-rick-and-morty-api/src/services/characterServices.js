import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

const getAllCharacters = async () => axios.get(`${BASE_URL}/character`);

export { getAllCharacters };