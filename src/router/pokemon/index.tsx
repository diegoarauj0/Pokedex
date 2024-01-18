import pokemon from "pokenode-ts"
import PokemonImage from "../../components/pokemon/pokemonImage"
import PokemonName from "../../components/pokemon/pokemonName"
import usePokemon from "../../hook/usePokemon"
import { PokemonTypes } from "../../components/pokemon/pokemonType"
import { useParams } from "react-router-dom"

export default function Pokemon() {

    const { idOrName } = useParams()
    const { error, loading, pokemon } = usePokemon({ idOrName:idOrName })

    if (error) {
        return (
            <h1>Error</h1>
        )
    }

    if (loading) {
        return (
            <h1>Carregando</h1>
        )
    }

    return (
        <div>
            <PokemonImage pokemon={pokemon as pokemon.Pokemon} />
            <PokemonName pokemon={pokemon as pokemon.Pokemon} />
            <PokemonTypes types={pokemon?.types as pokemon.PokemonType[]} />
        </div>
    )
}