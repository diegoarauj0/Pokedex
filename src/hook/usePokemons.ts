import { NamedAPIResource } from "pokenode-ts"
import { useState, useEffect } from "react"
import client from "../pokenode"

function isValidJson(jsonString:string): boolean {
    try {
        JSON.parse(jsonString)
        return true
    } catch { return false }
}

export default function usePokemonList(props?: { limit?: number, offset?:number }): {
    pokemons: NamedAPIResource[]
    loading: boolean
    error: boolean
    offset: number
    next: () => void
} {
    const listPokemon = sessionStorage.getItem("listPokemons")
    const [pokemons, usePokemons] = useState<NamedAPIResource[]>(isValidJson(listPokemon || ".")?JSON.parse(listPokemon as string):[])
    const [loading, useLoading] = useState<boolean>(false)
    const [error, useError] = useState<boolean>(false)
    const [offset, useOffset] = useState<number>(props?.offset || pokemons.length)
    const [update, useUpdate ] = useState<boolean>(false)
    const [block, useBlock] = useState<boolean>(false)

    useEffect(() => {
        getPokemons()
    }, [update])

    function next() {
        useUpdate((update) => {return !update})
    }

    async function getPokemons() {

        if (loading) return
        if (block) return

        useLoading(true)
        useError(false)
        
        if (pokemons.length != 0) {
            useOffset(offset + (props?.limit || 20))
        } else {
            useOffset(props?.offset || pokemons.length)
        }

        try {

            const listPokemons = (await client.pokemon.listPokemons(offset, (props?.limit || 20))).results

            const filteredPokemonList = listPokemons.filter((pokemon) => !pokemons.some((p) => p.name === pokemon.name))

            const updatedPokemonList = [...pokemons, ...filteredPokemonList]

            if (client.limit && offset + (props?.limit || 20) > client.limit) {
                const difference = offset + (props?.limit || 20) - client.limit

                if (difference > 0) {

                    for (let c = 0; c < difference; c ++) {
                        updatedPokemonList.pop()
                    }
                }

                useBlock(true)
            }

            usePokemons(updatedPokemonList)
            sessionStorage.setItem("listPokemons", JSON.stringify(updatedPokemonList))

        } catch {
            sessionStorage.setItem("listPokemons", "[]")
            usePokemons([])
            useOffset(0)
            useError(true)
        }

        useLoading(false)
    }

    return { loading, error, pokemons, offset, next }
}