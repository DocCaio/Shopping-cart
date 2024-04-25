const fetchTechs = async (query) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await response.json();

  return data.fetchTechs;
}

export default fetchTechs ;