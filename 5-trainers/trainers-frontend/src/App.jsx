import './App.css';
import { ListCard } from './components/ListCard/';
import { Card } from './components/Card/';
import { SearchForm } from './components/SearchForm/';

function App() {

  return (
    <>
      <SearchForm />
      <ListCard>
        {/* <Card /> */}
      </ListCard>
      <Card />
    </>
  )
}

export default App
