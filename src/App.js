import { useEffect, useState } from 'react';

import { getCharacter } from './services/requestAPI';
import { Header, CharacterCard } from './components';
import './App.css';

export default function App() {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    const requestCharacters = async () => {
      const characters = await getCharacter();

      setCharacterData(characters);
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
