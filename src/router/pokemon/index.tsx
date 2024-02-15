import pokemon from "pokenode-ts"
import PokemonImage from "../../components/pokemon/pokemonImage"
import PokemonName from "../../components/pokemon/pokemonName"
import PokemonStats from "../../components/pokemon/PokemonStats"
import usePokemon from "../../hook/usePokemon"
import { PokemonTypes } from "../../components/pokemon/pokemonType"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import client from "../../pokenode"
import NotFound from "../../components/notFound"
import Loading from "../../components/loading"
import Styled from "./styled"

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
        return <NotFound />
    }

    if (loading) {
        return <Loading />
    }

    localStorage.setItem("pokemonID", String(pokemon?.id))
    
    if (typeof(idOrName) == "string") useIdOrName(pokemon?.id as number)

    var pokemonName = pokemon?.name.split("") as string[]
    pokemonName.shift()

    document.title = `${pokemon?.name.toUpperCase()[0]+pokemonName.join("")}#${pokemon?.id}`

    return (
        <Styled.Pokemon>
            <Styled.PokemonImage pokemon={pokemon}>
                <PokemonImage pokemon={pokemon as pokemon.Pokemon} key={pokemon?.name as string}/>
            </Styled.PokemonImage>
            <Styled.PokemonName>
                <PokemonName pokemon={pokemon as pokemon.Pokemon} id={true} />
            </Styled.PokemonName>
            <Styled.Buttons>
                <button onClick={previousButton}>Anterior</button>
                <button onClick={nextButton}>Proximo</button>
            </Styled.Buttons>

            <Styled.PokemonTypes>
                <PokemonTypes types={pokemon?.types as pokemon.PokemonType[]} />
            </Styled.PokemonTypes>

            <div style={{
                display:"flex",
                justifyContent:"center",
                padding: "15px 0px"
            }}>
                <Styled.PokemonStatsParent pokemon={pokemon}>
                    <h2>Status Base</h2>
                    <Styled.PokemonStats>
                        <PokemonStats stats={pokemon?.stats as pokemon.PokemonStat[]} pokemon={pokemon as pokemon.Pokemon}/>
                    </Styled.PokemonStats>
                </Styled.PokemonStatsParent>
            </div>


        </Styled.Pokemon>
    )
}