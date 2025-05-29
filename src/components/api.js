async function imagesApi() {
  try {
    const random = Math.floor(Math.random() * 1200);
    const url = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${random}`;
    const response = await fetch(url, { mode: "cors" });
    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
  }
}
export async function getImages() {
  try {
    const res = await imagesApi();
    const pokeResults = await res.results;
    const pokemonData = pokeResults.map(async (val) => {
      const res = await fetch(val.url, { mode: "cors" });
      const json = await res.json();
      return json;
    });

    return pokemonData;
  } catch (e) {
    console.log(e);
  }
}
