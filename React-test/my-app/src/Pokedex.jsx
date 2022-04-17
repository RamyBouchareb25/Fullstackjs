import PokeCard from "./pokeCard";
const pokemons = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ];
  const parsedata = (num) => {return num<999 ? `00${num}`.slice(-3) : `${num}`}
  function Pokedex() {
      const pokecards = pokemons.map(({id,name,type,base_experience}) => (<PokeCard id={parsedata(id)} name={name} type={type} lvl={base_experience}/>));
      return(
            <div className="pokecards">
                {pokecards}
            </div>
    )
}
export default Pokedex;