import { Pokemon } from "pokenode-ts"
import { useState, useEffect } from "react"
import client from "../pokenode"

export default function usePokemon(props:{idOrName:string | number | undefined }): { pokemon:Pokemon | undefined, error:boolean, loading:boolean } {

    const [ pokemon, usePokemon ] = useState<Pokemon | undefined>()
    const [ error, useError ] = useState<boolean>(false)
    const [ loading, useLoading ] = useState<boolean>(true)

    useEffect(() => {
        getPokemon()
    },[ props.idOrName ])

    async function getPokemon() {
        
        useLoading(true)
        useError(false)
        usePokemon(undefined)

        try {
            if (isNaN(Number(props.idOrName))) {
                const idOrName = props.idOrName == undefined?"bulbasaur":props.idOrName as string
                const pokemon = await client.pokemon.getPokemonByName(idOrName)
                if (client.limit && pokemon.id > client.limit) throw ""
                usePokemon(pokemon)
            } else {
                if (client.limit && Number(props.idOrName) > client.limit) throw ""
                const pokemon = await client.pokemon.getPokemonById(Number(props.idOrName))
                usePokemon(pokemon)
            }
        } catch {
            useError(true)
        }

        useLoading(false)

    }

    return { pokemon , loading, error }

}