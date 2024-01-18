import { Pokemon } from "pokenode-ts"

export default function PokemonName(props:{ pokemon:Pokemon, id?:boolean }) {

    return (
        <div>
            <p>{props.pokemon.name} {props.id?`#${props.pokemon.id}`:""}</p>
        </div>
    )
}