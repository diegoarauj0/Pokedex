import styled from "styled-components"

const Pokedex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    height: calc(100vh - 85px);

`
const PokemonCard = styled.div`
    width: 400px;
    height: 220px;
    margin: 5px;
    border-radius: 0.375rem;
    box-shadow: 0px 1px 7px #00000059;

    @media screen and (max-width: 900px) {
        margin: 2px;
        width: 48%;
        border-radius: none;
        box-shadow: none;
        border: none;
    }

    @media screen and (max-width: 819px) {
        margin: 2px;
        width: 100%;
        border-radius: none;
        box-shadow: none;
        border: none;
    }
`

export default {
    Pokedex,
    PokemonCard
}