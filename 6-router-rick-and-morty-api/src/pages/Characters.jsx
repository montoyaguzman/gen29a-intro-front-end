import { useEffect, useState } from 'react'
import { getAllCharacters } from '../services/characterServices'

const Characters = () => {
  const [personajes, setPersonajes] = useState([])
  
  const getCharactersData = async () => {
    try {
      const response = await getAllCharacters()
      const { results } = response.data
      setPersonajes(results)
    } catch (error) {
      console.log('Paso un error', error)
    }
  }

  useEffect(() => {
    getCharactersData()
  }, [])

  return (
    <div className='bg-body-tertiary'>
      <h1 className='text-center'>Characters</h1>

      <div className='album py-5'>
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {personajes.map((personaje) => (<img key={personaje.id} src={personaje.image} alt={personaje.name} />))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Characters