import { Pokemon } from "pokenode-ts"

export default function PokemonName(props:{ pokemon:Pokemon, className?:string, id?:boolean }) {

    return (
        <p className={`font-righteous font-medium ${props.className}`}>{props.pokemon.name}{props.id?`#${props.pokemon.id}`:""}</p>
    )
}