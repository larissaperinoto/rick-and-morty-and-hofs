import { useEffect, useState } from 'react';

import { getCharacter } from './services/requestAPI';
import { Header, CharacterCard } from './components';
import './App.css';

export default function App() {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    const requestCharacters = async () => {
      const characters = await getCharacter();
      // Sugestão: escreva seu código ou as chamadas de funções aqui.

      setCharacterData(characters); // Observe que essa linha guarda no estado as informações a serem renderizadas.
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
