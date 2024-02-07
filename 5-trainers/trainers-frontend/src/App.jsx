import './App.css';
import { ListCard } from './components/ListCard/';
import { Card } from './components/Card/';
import { SearchForm } from './components/SearchForm/';
import { getTrainers } from './services/trainers/';
import { useState, useEffect } from 'react';

function App() {

  const [trainers, setTrainers] = useState([]); // [nombreVariable (var), funcionActualizadora(set)]
  const [number, setNumber] = useState(0);

  const getData = async () => {
    const data = await getTrainers();
    console.log('data', data);
    // trainers = data // error
    setTrainers(data);
  };

  const addNumber = () => {
    setNumber(number + 1);
  }

  // getData(); // ciclo infinito


  // 1. Se actualiza cada que cambia el state por cualquier motivo
  useEffect(() => {
    console.log('dentro del primer useEffect NADA');
  });

  // 2. Solo se ejecuta la primera vez que carga el componente 
  useEffect(() => {
    console.log('dentro del segundo useEffect []');
    getData();
  }, []);

  // 3. Se ejecuta cada que cambia alguno de los valores del arreglo de condiciones
  useEffect(() => {
    console.log('dentro del primer useEffect NUMBER');
  }, [number]);

  return (
    <>
      <SearchForm />

      {
        trainers.length > 0 ? (
          <ListCard>
            {trainers.map(element => {
              return (
                <Card key={element.id} name={element.name} alias={element.originalName} />
              )
            }
            )}
          </ListCard>
        ) : (<div>sin entrenadores...</div>)

      }

      <span> valor: {number}</span>
      <button onClick={addNumber}> suma 1 </button>


      {/* <Card name={trainers[0].name} alias={trainers[0].originalName} />
      <Card name={trainers[1].name} alias={trainers[1].originalName} />


      {trainers.map(element => element.name)} */}

    </>
  )
}

export default App
