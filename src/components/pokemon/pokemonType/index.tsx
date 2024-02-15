import pokenode from "pokenode-ts"
import Styled from "./styled"

const Translation: {[key:string]:string} = {
    bug: "Inseto",
    dark: "Sombrio",
    dragon: "Dragão",
    electric: "Elétrico",
    fairy: "Fada",
    fighting: "Lutador",
    fire: "Fogo",
    flying: "Voador",
    ghost: "Fantasma",
    grass: "Grama",
    ground: "Terrestre",
    ice: "Gelo",
    normal: "Normal",
    poison: "Venenoso",
    psychic: "Psíquico",
    rock: "Pedra",
    steel: "Metal",
    water: "Água"
}

export function PokemonType(props:{ type:pokenode.PokemonType }) {
    return (
        <Styled.PokemonType bg={props.type.type.name}>
            <img 
                src={`/static/image/types/${props.type.type.name}.svg`}
                alt={props.type.type.name}
            />
            <p>{Translation[props.type.type.name] || props.type.type.name}</p>
        </Styled.PokemonType >
    )
}

export function PokemonTypes(props:{ types:pokenode.PokemonType[] }) {

    return (
        <>
            {props.types.map((type) => (
                <PokemonType type={type} key={type.type.name}/>
            ))}
        </>
    )
}