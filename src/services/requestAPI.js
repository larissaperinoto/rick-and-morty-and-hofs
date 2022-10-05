export const getCharacter = async () => {
  const endpoint = 'https://rickandmortyapi.com/api/character';
  const { results } = await fetch(endpoint).then((response) => response.json());
  return results;
};
