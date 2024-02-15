import styled from "styled-components"
import { Pokemon } from "pokenode-ts"

const Pokemon = styled.div`
    
`

const PokemonImage = styled.div<{pokemon?:Pokemon}>`
    border-radius: 0px 0px 30% 30%;
    display: flex;
    margin-bottom: 7%;
    justify-content: center;
    background: ${props => props.pokemon != undefined? props.pokemon.types.length == 1?`${props.theme[`color-${props.pokemon.types[0].type.name}`]}`:`linear-gradient(var(--color-${props.pokemon.types[0].type.name}), var(--color-${props.pokemon.types[1].type.name}))`:props.theme["color-normal"]};

    img {
        max-width: 350px;
        width: 50%;
        margin-bottom: -7%;
    }

    @media screen and (max-width: 600px) {

        margin-bottom: 20%;

        img {
            width: 80%;
            margin-bottom: -20%;
        }
    }
`

const PokemonName = styled.div`

    text-align: center;

    p {
        color: black;
        font-size: 26px;
    }
`

const Buttons = styled.div`
    display: flex;
    padding: 2px;
    justify-content: center;
    margin: 5px 0px;

    button {
        font-family: ${props => props.theme["Righteous"]};
        font-weight: 100;
        font-size: 16px;
        background-color:#dddddd;
        border-radius: 0.375rem;
        padding: 8px;
        border: none;
        margin: 2px;
        cursor: pointer;
        transition: 0.5s;
    }

    button:hover {
        transition: 0.5s;
        transform: scale(1.1);
    }

    @media screen and (max-width: 600px) {

        button {
            padding: 8px;
            font-size: 19px;
            margin: 5px;
        }
    }
`

const PokemonTypes = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
` 

const PokemonStatsParent = styled.div<{pokemon?:Pokemon}>`
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    max-width: 600px;
    width: 100%;
    margin: 5px;
    border-radius: 5px;
    border-left: 2px solid ${props =>  props.theme[`color-${props.pokemon != undefined?props.pokemon.types[0].type.name:"normal"}`]};
    border-right: 2px solid ${props =>  props.theme[`color-${props.pokemon != undefined?props.pokemon.types[1] != undefined?props.pokemon.types[1].type.name:props.pokemon.types[0].type.name:"normal"}`]};

    h2 {
        font-family: ${props => props.theme.Righteous};
        font-size: 23px;
        font-weight: lighter;
        margin: 4px;
        width: 100%;
        padding-left: 8px;
    }

    @media screen and (max-width: 600px) {
        border: none;
        margin: 0px;
        padding: 0px;
    }
`

const PokemonStats = styled.div`
    width: 100%;
    padding: 8px;
    margin-left: 8px;

    @media screen and (max-width: 600px) {
        border: none;
        margin: 0px;
        padding: 0px 5px;
    }
`

export default {
    Pokemon,
    PokemonImage,
    PokemonName,
    Buttons,
    PokemonTypes,
    PokemonStatsParent,
    PokemonStats
}