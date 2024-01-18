import { Pokemon, OtherPokemonSprites } from "pokenode-ts"
import { useState } from "react"

interface OtherPokemonSpritesExtends extends OtherPokemonSprites {
    "official-artwork": {
        front_default:string | null
        front_shiny:string | null
    }
}

export default function PokemonImage(props:{ pokemon:Pokemon, shiny?:boolean }) {

    const pokemonSprites = props.pokemon.sprites.other as OtherPokemonSpritesExtends

    const [ shiny, useShiny ] = useState<boolean>(props.shiny || false)
    const [ error, useError ] = useState<boolean>(
        shiny?pokemonSprites["official-artwork"].front_shiny == null?true:false:pokemonSprites["official-artwork"].front_default == null?true:false
    )

    function handlerClick() {
        useShiny(!shiny)
    }

    if ( error ) {
        return (
            <div>
                <img src="/static/image/404.svg" alt="404 storyset.com"/>
            </div>
        )
    }

    return (
        <div>
            <img 
                src={
                    shiny
                    ?pokemonSprites["official-artwork"].front_shiny as string
                    :pokemonSprites["official-artwork"].front_default as string
                } 
                alt={`${props.pokemon.name}#${props.pokemon.id}`} onError={() => {useError(true)}} onClick={handlerClick}
                style={{
                    cursor:"pointer"
                }}
            />
        </div>
    )
}