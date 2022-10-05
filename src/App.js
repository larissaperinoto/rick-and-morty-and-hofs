import { useEffect, useState } from 'react';

import './App.css';
import { getCharacter } from './services/requestAPI';
import { Header, CharacterCard } from './components';

export default function App() {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    const requestCharacter = async () => {
      const characters = await getCharacter();
      // Sugestão: escreva seu código ou as chamadas de funções aqui.

      setCharacterData(characters); // Observe que essa linha guarda no estado as informações a serem renderizadas.
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
