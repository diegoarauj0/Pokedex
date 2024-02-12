import usePokemons from "../../hook/usePokemons"
import { GetPokemonCard } from "../../components/pokemon/pokemonCard"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Pokedex() {

    const { pokemons, error, next } = usePokemons({
        limit:30
    })

    if (error) {

        document.title = `...`

        return (
            <div className="w-full h-full flex justify-center flex flex-wrap">
                <img src="/static/image/404.svg" alt="404 storyset.com" className="w-[80%] max-w-[500px]"/>
                <p className="font-righteous font-medium w-full text-center">Não tem pokemon aqui, <Link to={"/pokedex"} className="underline decoration-2">Pokedex</Link></p>
            </div>
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

    document.title = `Pokedex`

    return (
        <div className="flex flex-wrap justify-center items-center overflow-y-auto h-[calc(100vh-85px)]" onScroll={handleScroll} id="pokedex">
            {pokemons.map((pokemon) => (
                <GetPokemonCard idOrName={pokemon.name} className="m-1" key={pokemon.name}/>
            ))}
        </div>
    )
}