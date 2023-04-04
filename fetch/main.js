async function logTheArray() {

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await response.json();
    if (response.ok) {
      return console.log(jsonData);
    }
    throw new Error('Something went wrong');
  } catch (error) {
    console.error('There was an error', error);
  }

}

logTheArray();

async function pokemonArray() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', { method: 'GET' });
    const jsonData = await response.json();
    if (response.ok) {
      return console.log(jsonData);
    }
    throw new Error('Something went wrong');
  } catch (error) {
    console.error('There was an error', error);
  }

}

pokemonArray();
