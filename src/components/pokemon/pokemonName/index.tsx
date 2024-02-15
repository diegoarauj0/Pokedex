import { Pokemon } from "pokenode-ts"
import Styled from "./styled"

export default function PokemonName(props:{ pokemon:Pokemon, id?:boolean }) {

    return (
        <Styled.Paragraph>{props.pokemon.name}{props.id?`#${props.pokemon.id}`:""}</Styled.Paragraph>
    )
}