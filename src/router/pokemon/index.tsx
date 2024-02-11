import pokemon from "pokenode-ts"
import PokemonImage from "../../components/pokemon/pokemonImage"
import PokemonName from "../../components/pokemon/pokemonName"
import usePokemon from "../../hook/usePokemon"
import { PokemonTypes } from "../../components/pokemon/pokemonType"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import client from "../../pokenode"

function pokemonID(id:string | undefined): string {

    if (id == undefined) {
        const pokemonID = localStorage.getItem("pokemonID")
        return pokemonID == null?"1":pokemonID
    }

    var pokemonID = id == "0"?"1":id

    return pokemonID
}

export default function Pokemon() {

    const history = useNavigate()
    var { id } = useParams()
    const [ idOrName, useIdOrName ] = useState<number | string>(pokemonID(id))
    const { error, loading, pokemon } = usePokemon({ idOrName:idOrName })

    useEffect(() => {

        if (window.location.pathname == "/pokemon") history(`/pokemon/${idOrName}`)
    }, [])

    useEffect(() => {

        const keys:{[key:string]: () => void} = {
            "ArrowRight":() => {nextButton()},
            "ArrowLeft":() => {previousButton()}
        }
    
        const handleInput = (Event:KeyboardEvent) => {
            if (keys[Event.code] != undefined) keys[Event.code]()
        }

        document.addEventListener("keydown", handleInput)

        return () => {
            document.removeEventListener("keydown", handleInput)
        }
    },[ pokemon ])

    function previousButton() {
        if (loading) return
        if (idOrName as number < 2) return
        useIdOrName(idOrName as number - 1)
        history(`/pokemon/${idOrName as number - 1}`)
    }
    
    function nextButton() {
        if (loading) return
        if (client.limit && idOrName as number >= client.limit) return
        useIdOrName(idOrName as number + 1)
        history(`/pokemon/${idOrName as number + 1}`)
    }

    if (error) {

        return (
            <h1>Error</h1>
        )
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center w-full h-full">
                <div className="flex justify-center items-center flex-wrap">
                    <img src="/static/image/loading.gif" alt="" className="w-[270px]" />
                    <h1 className="w-full text-center text-yellow-400 font-righteous text-2xl">Carregando...</h1>
                </div>
            </div>
        )
    }

    localStorage.setItem("pokemonID", String(pokemon?.id))
    
    if (typeof(idOrName) == "string") useIdOrName(pokemon?.id as number)

    return (
        <>
            <div className={`rounded-b-[30%] flex justify-center`} style={{
                background:pokemon?.types.length == 2?`linear-gradient(90deg, var(--ColorType_${pokemon?.types[0].type.name}) 0%, var(--ColorType_${pokemon?.types[1].type.name}) 100%)`:`var(--ColorType_${pokemon?.types[0].type.name})`
            }}>
                <PokemonImage pokemon={pokemon as pokemon.Pokemon} className="w-[50%] max-w-[350px] mb-[-7%]" key={pokemon?.name as string}/>
            </div>
            <div>
                <PokemonName pokemon={pokemon as pokemon.Pokemon} id={true} className="mt-[calc(5px+7%)] text-center text-3xl" />
            </div>
            <div className="font-chivoMono flex text-sm p-1 justify-center my-[5px]">
                <button className="previous-button bg-[#dddddd] rounded-md p-1 m-1 hover:scale-[1.1] duration-[0.5s] hover:duration-[0.5s]" onClick={previousButton}>Anterior</button>
                <button className="next-button bg-[#dddddd] rounded-md p-1 m-1 hover:scale-[1.1] duration-[0.5s] hover:duration-[0.5s]" onClick={nextButton}>Proximo</button>
            </div>

            <div className="flex justify-center items-center">
                <PokemonTypes types={pokemon?.types as pokemon.PokemonType[]} />
            </div>

        </>
    )
}