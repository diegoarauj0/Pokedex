import { Pokemon, PokemonStat } from "pokenode-ts"
import Styled from "./styled"

const Translation: {[key:string]:string} = {
    hp:"HP",
    attack:"Ataque",
    defense:"Defesa",
    "special-attack":"Ataque.sp",
    "special-defense":"Defesa.sp",
    speed:"Velocidade"
}

export default function PokemonStats(props:{ stats:PokemonStat[], pokemon?:Pokemon ,className?:string }) {

    var total = 0

    props.stats.forEach((stat) => {
        total += stat.base_stat
    })

    return (
        <>
            {props.stats.map((stat) => (
                <Styled.Stats>
                    <Styled.Information>
                        <Styled.Name>{Translation[stat.stat.name]}:</Styled.Name>
                        <Styled.Number>{stat.base_stat}</Styled.Number>
                    </Styled.Information>
                    <Styled.ParentPercentage>
                        <Styled.Percentage bg={props.pokemon?.types[0].type.name} width={((stat.base_stat / 180) * 100).toFixed(2)}></Styled.Percentage>
                    </Styled.ParentPercentage>
                </Styled.Stats>
            ))}
            <Styled.Stats>
                <Styled.Information>
                    <Styled.Name>Total:</Styled.Name>
                    <Styled.Number>{total}</Styled.Number>
                </Styled.Information>
                <Styled.ParentPercentage>
                    <Styled.Percentage bg={props.pokemon?.types[0].type.name} width={((total / (180 * 6)) * 100).toFixed(2)}></Styled.Percentage>
                </Styled.ParentPercentage>
            </Styled.Stats>
        </>
    )
}