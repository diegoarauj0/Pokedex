import { Pokemon } from "pokenode-ts"
import usePokemon from "../../hook/usePokemon"
import Skeleton from "react-loading-skeleton"
import PokemonName from "./pokemonName"
import PokemonImage from "./pokemonImage"
import { PokemonTypes } from "./pokemonType"
import { useNavigate } from "react-router-dom"

export function PokemonCard(props:{ pokemon:Pokemon, className?:string }) {

    const history = useNavigate()

    const background = props.pokemon.types.length == 1?`var(--ColorType_${props.pokemon.types[0].type.name})`:`linear-gradient( var(--ColorType_${props.pokemon.types[0].type.name}), var(--ColorType_${props.pokemon.types[1].type.name}))`

    return (
        <div className={`w-[400px] h-[220px] flex rounded-md shadow-lg border-white border-2 cursor-pointer duration-700 hover:duration-300 hover:scale-[1.03] hover:saturate-[120%] ${props.className}`}style={{
            background:background
        }} onClick={() => {history(`pokemon/${props.pokemon.id}`)}}>
            <div className="h-full w-[220px]">
                <PokemonImage pokemon={props.pokemon} key={props.pokemon.id}/>
            </div>
            <div className="h-full w-[180px] flex flex-wrap justify-center items-center content-center">
                <div>
                    <PokemonName id={true} pokemon={props.pokemon} key={props.pokemon.id} className="text-white text-[18px]"/>
                </div>
                <div>
                    <PokemonTypes types={props.pokemon.types} key={props.pokemon.id} className="saturate-[150%]"/>
                </div>
            </div>
        </div>
    )
}

export function GetPokemonCard(props:{ idOrName:number | string, className?:string }) {

    const { loading, error, pokemon } = usePokemon({
        idOrName:props.idOrName
    })

    if (loading) {
        return (
            <div className={`w-[400px] h-[220px] shadow-lg ${props.className}`}>
                <Skeleton className="w-[400px] h-[220px] rounded-md "/>
            </div>
        )
    }

    if (error) {
        return (
            <div>Error</div>
        )
    }

    return (
        <PokemonCard pokemon={pokemon as Pokemon} className={props.className}/>
    )
}