import usePokemons from "../../hook/usePokemons"
import { GetPokemonCard } from "../../components/pokemon/pokemonCard"
import { useEffect } from "react"
import Styled from "./styled"
import NotFound from "../../components/notFound"

export default function Pokedex() {

    const { pokemons, error, next } = usePokemons({
        limit:30
    })

    useEffect(() => {
        const scroll = sessionStorage.getItem("scroll")
        const element = document.getElementById("pokedex")
    
        if (!isNaN(Number(scroll)) && element != null) {
            element.scrollTo({
                top:Number(scroll)
            })
        }
    },[])

    if (error) {
        return (
            <NotFound />
        )
    }

    function handleScroll(event:React.UIEvent<HTMLDivElement, UIEvent>) {
        const element = event.target as HTMLElement

        const scrollTop = element.scrollTop
        const scrollHeight = element.scrollHeight
        const clientHeight = element.clientHeight

        sessionStorage.setItem("scroll", String(scrollTop))

        if (scrollTop + clientHeight >= scrollHeight - 100) {
            next()
        }
    }

    document.title = `Pokedex`

    return (
        <Styled.Pokedex onScroll={handleScroll} id="pokedex">
            {pokemons.map((pokemon) => (
                <Styled.PokemonCard>
                    <GetPokemonCard idOrName={pokemon.name} key={pokemon.name}/>
                </Styled.PokemonCard>
            ))}
        </Styled.Pokedex>
    )
}