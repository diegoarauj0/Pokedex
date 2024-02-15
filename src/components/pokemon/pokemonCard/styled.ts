import styled from "styled-components"
import { Pokemon } from "pokenode-ts"

const PokemonCard = styled.div<{pokemon?:Pokemon}>`
    transition: 0.7s;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${props => props.pokemon != undefined? props.pokemon.types.length == 1?`${props.theme[`color-${props.pokemon.types[0].type.name}`]}`:`linear-gradient(var(--color-${props.pokemon.types[0].type.name}), var(--color-${props.pokemon.types[1].type.name}))`:props.theme["color-normal"]};

    &:hover {
        transition: 0.4s;
        transform: scale(1.03);
        filter: saturate(120%);
    }
`
const Left = styled.div`
    height: 100%;
    width: 220px;
`

const Right = styled.div`
    height: 100%;
    width: 180px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export default {
    PokemonCard,
    Left,
    Right
}