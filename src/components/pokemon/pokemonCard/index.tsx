import { Pokemon } from "pokenode-ts"
import usePokemon from "../../../hook/usePokemon"
import Skeleton from "react-loading-skeleton"
import PokemonName from "../pokemonName"
import PokemonImage from "../pokemonImage"
import { PokemonTypes } from "../pokemonType"
import { useNavigate } from "react-router-dom"
import Styled from "./styled"

export function PokemonCard(props:{ pokemon:Pokemon, style:React.CSSProperties | undefined }) {

    const history = useNavigate()

    return (
        <Styled.PokemonCard pokemon={props.pokemon} style={props.style} onClick={() => {history(`pokemon/${props.pokemon.id}`)}}>
            <Styled.Left>
                <PokemonImage pokemon={props.pokemon} key={props.pokemon.id}/>
            </Styled.Left>
            <Styled.Right>
                <div>
                    <PokemonName id={true} pokemon={props.pokemon} key={props.pokemon.id}/>
                </div>
                <div>
                    <PokemonTypes types={props.pokemon.types} key={props.pokemon.id}/>
                </div>
            </Styled.Right>
        </Styled.PokemonCard>
    )
}

export function GetPokemonCard(props:{ idOrName:number | string, style?:React.CSSProperties | undefined }) {

    const { loading, error, pokemon } = usePokemon({
        idOrName:props.idOrName
    })

    if (loading) {
        return (
            <div style={{ width:"100%", height:"100%" }}>
                <Skeleton style={{ width:"100%", height:"100%"}}/>
            </div>
        )
    }

    if (error) {
        return (
            <div>Error</div>
        )
    }

    return (
        <PokemonCard pokemon={pokemon as Pokemon} style={props.style}/>
    )
}