import pokenode from "pokenode-ts"

export function PokemonType(props:{ type:pokenode.PokemonType }) {
    return (
        <div>
            <img 
                src={`/static/image/types/${props.type.type.name}.svg`}
                alt={props.type.type.name}
                className={`bg_${props.type.type.name}`}
            />
        </div>
    )
}

export function PokemonTypes(props:{ types:pokenode.PokemonType[] }) {

    return (
        <div>
            {props.types.map((type) => (
                <PokemonType type={type} />
            ))}
        </div>
    )
}