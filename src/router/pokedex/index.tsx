import usePokemons from "../../hook/usePokemons"
import { GetPokemonCard } from "../../components/pokemon/pokemonCard"
import { useEffect } from "react"

export default function Pokedex() {

    const { pokemons, error, next } = usePokemons({
        limit:30
    })

    if (error) {
        return (
            <div>Error</div>
        )
    }

    useEffect(() => {
        const scroll = sessionStorage.getItem("scroll")
        const element = document.getElementById("pokedex")
    
        if (!isNaN(Number(scroll)) && element != null) {
            element.scrollTo({
                top:Number(scroll)
            })
        }
    },[])

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

    return (
        <div className="flex flex-wrap justify-center items-center overflow-y-auto h-[calc(100vh-85px)]" onScroll={handleScroll} id="pokedex">
            {pokemons.map((pokemon) => (
                <GetPokemonCard idOrName={pokemon.name} className="m-1" key={pokemon.name}/>
            ))}
        </div>
    )
}