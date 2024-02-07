import './App.css';
import { ListCard } from './components/ListCard/';
import { Card } from './components/Card/';
import { SearchForm } from './components/SearchForm/';

function App() {

  const trainers = [
    {
      id: 1,
      name: 'Ash Ketchum',
      originalName: 'Satoshi',
      imgs: {
        card: 'https://img1.picmix.com/output/stamp/normal/3/7/3/5/1205373_c45d3.png',
        display: 'https://w7.pngwing.com/pngs/225/443/png-transparent-ash-ketchum-pokemon-x-and-y-pikachu-pokemon-go-pokemon-universe-pikachu-fictional-character-cartoon-arm.png'
      },
    },
    {
      id: 2,
      name: 'Misty',
      originalName: 'Kasumi',
      imgs: {
        card: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cc3b548b-5a7d-4cc1-bb9a-8055970d2965/dbudsw9-2b6a281b-f83f-4a59-b8c1-6a228df27bdc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NjM2I1NDhiLTVhN2QtNGNjMS1iYjlhLTgwNTU5NzBkMjk2NVwvZGJ1ZHN3OS0yYjZhMjgxYi1mODNmLTRhNTktYjhjMS02YTIyOGRmMjdiZGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fskMkfRDe7icqSyPpFqhTPcIdJO8WlwG_rNpg0a9vGI',
        display: 'https://i.pinimg.com/originals/b9/70/49/b97049038091ab8daed73e57d83e7224.jpg'
      },
    }
  ];

  return (
    <>
      <SearchForm />
      <ListCard>
        {trainers.map(element => {
          return (
            <Card key={element.id} name={element.name} alias={element.originalName} />
          )
        }
        )}
      </ListCard>



      {/* <Card name={trainers[0].name} alias={trainers[0].originalName} />
      <Card name={trainers[1].name} alias={trainers[1].originalName} />


      {trainers.map(element => element.name)} */}

    </>
  )
}

export default App
