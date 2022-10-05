import { useEffect, useState } from 'react';

import './App.css';
import { getCharacter } from './services/requestAPI';
import { Header, CharacterCard } from './components';

export default function App() {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    const requestCharacter = async () => {
      const characters = await getCharacter();

      setCharacterData(characters);
    }
    requestCharacter();
  }, []);

  return (
    <>
      <Header />
      <CharacterCard characters={ characterData } />
    </>
  );
}
