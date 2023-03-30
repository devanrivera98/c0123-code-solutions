export default function PokemonList({pokedex}) {
  const listItems = pokedex.map(pokedex =>
    <li key={pokedex.number}>
      <div>{pokedex.name}</div>
    </li>)

  return (
    <ul>{listItems}</ul>
  )
}
