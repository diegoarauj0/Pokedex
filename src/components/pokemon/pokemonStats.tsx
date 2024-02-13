import { Pokemon, PokemonStat } from "pokenode-ts"

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
                <div className={`border-b-2 py-1 flex max-w-[600px] ${props?.className}`}>
                    <div className="font-chivoMono flex mr-2 w-[148px]">
                        <p className="font-[500] text-gray-700 w-[105px] mr-2 text-right">{Translation[stat.stat.name]}:</p>
                        <p className="font-[600] w-[35px] text-center">{stat.base_stat}</p>
                    </div>
                    <div className="w-[calc(100%-150px)]">
                        <div className="w-[100%]">
                            <div className={`duration-500 ${props.pokemon?`bg_${props.pokemon.types[0].type.name}`:"bg_normal"} h-[25px] rounded-md`} style={{
                                width:`${((stat.base_stat / 180) * 100).toFixed(2)}%`
                            }}></div>
                        </div>
                    </div>
                </div>
            ))}
            <div className={`pt-4 flex max-w-[600px] ${props.className}`}>
                <div className="font-chivoMono flex mr-2 w-[148px]">
                    <p className="font-[500] text-gray-700 w-[105px] mr-2 text-right">Total:</p>
                    <p className="font-[600] w-[35px] text-center">{total}</p>
                </div>
                <div className="w-[calc(100%-150px)]">
                    <div className="w-[100%]">
                        <div className={`duration-500 ${props.pokemon?`bg_${props.pokemon.types[0].type.name}`:"bg_normal"} h-[25px] rounded-md`} style={{
                                width:`${((total / (180 * 6)) * 100).toFixed(2)}%`
                        }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}