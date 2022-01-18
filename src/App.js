import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Card from './components/Card';
function App() {

  const [characters, setCharacters] = useState([]);

  const getApiCharacter = async () => {
    const apiResponse = await axios.get('https://rickandmortyapi.com/api/character');
    setCharacters(apiResponse.data.results);
  }
  
  useEffect(() =>{
    getApiCharacter();
  }, []);

  return (
    <div>
      <h1>Rick and Morty</h1>
      <div className="container">
        <ul className="list-card">
          {characters.map((character, i) => {
            if(i < 6){
              return (
              <li key={i}>
                <Card character={character}/>
              </li>
              )
              
            }
            return null;
          })}

        </ul>

      </div>
    </div>
  );
}

export default App;
