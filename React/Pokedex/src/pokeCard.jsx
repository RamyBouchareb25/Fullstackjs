
function PokeCard({id,name,type,lvl}) {
    const imgsrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
    return(
        <div className="cardHolder">
            <h1>{name} is of type {type} and level {lvl}</h1>
            <img src={imgsrc} />
        </div>
    )


}
export default PokeCard