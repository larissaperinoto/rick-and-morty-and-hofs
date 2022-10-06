import { useEffect, useState } from 'react';

import { getCharacter } from './services/requestAPI';
import { Header, CharacterCard } from './components';
import './App.css';

export default function App() {
  const [characterData, setCharacterData] = useState([]);

  const changeName = (charactersAlive) => {
    let smithAlienFamily = [];
    let anotherCharacters = [];

    charactersAlive.forEach((character) => {
      if (character.name.includes('Smith')) {
        const firstName = character.name.split(' ')[0];
        smithAlienFamily.push({...character, name: `${firstName} Alien Smith` });
      } else {
        anotherCharacters.push(character);
      }
    });

    return [ ...smithAlienFamily, ...anotherCharacters ];
  }

  useEffect(() => {
    const requestCharacters = async () => {
      const characters = await getCharacter();
      // Sugestão: escreva seu código ou as chamadas de funções aqui.

      // Exercício 1
      /* const characterAliens = characters.filter((character) => character.name.includes("Alien"));
        setCharacterData(characterAliens); */

      // Exercício 3
      const filterByAlive = characters.filter((character) => character.status === 'Alive' );

      // Exercício 4
      const characterAliveWithInfos = filterByAlive.map((character) => {
        return {...character, info: `${character.species} - ${character.location.name}`}
       });

      // Exercício 5
      const aliveWithAlienName = changeName(characterAliveWithInfos);

      // Exercício 6
      const orderedCharacters = aliveWithAlienName.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });

      setCharacterData(orderedCharacters); // Observe que essa linha guarda no estado as informações a serem renderizadas.
    }
    requestCharacters();
  }, []);

  return (
    <>
      <Header />
      <CharacterCard characters={ characterData } />
    </>
  );
}
