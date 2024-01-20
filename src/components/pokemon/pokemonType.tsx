import pokenode from "pokenode-ts"

const Translation: {[key:string]:string} = {
    bug: "Inseto",
    dark: "Sombrio",
    dragon: "Dragão",
    electric: "Elétrico",
    fairy: "Fada",
    fighting: "Lutador",
    fire: "Fogo",
    flying: "Voador",
    ghost: "Fantasma",
    grass: "Grama",
    ground: "Terrestre",
    ice: "Gelo",
    normal: "Normal",
    poison: "Venenoso",
    psychic: "Psíquico",
    rock: "Pedra",
    steel: "Metal",
    water: "Água"
};

export function PokemonType(props:{ type:pokenode.PokemonType, className?:string }) {
    return (
        <div className={`bg_${props.type.type.name} flex flex-wrap justify-center items-center rounded-md px-2 text-white font-righteous m-2 ${props.className}`}>
            <img 
                src={`/static/image/types/${props.type.type.name}.svg`}
                alt={props.type.type.name}
                className="h-[60px] p-2 pl-0"
            />
            <p>{Translation[props.type.type.name] || props.type.type.name}</p>
        </div>
    )
}

export function PokemonTypes(props:{ types:pokenode.PokemonType[], className?:string }) {

    return (
        <>
            {props.types.map((type) => (
                <PokemonType type={type} className={props.className}/>
            ))}
        </>
    )
}