import { Link } from "react-router-dom"

export default function Header(props:{ title:string }) {

    return (
        <header className="bg-[#CE3F3A] text-white p-2 w-full h-[85px]">
            <h1 className="font-chivoMono font-light text-4xl" >{props.title}</h1>
            <nav className="w-full font-chivoMono mt-2">
                <ul className="flex text-sm">
                    <li className="pr-2 hover:scale-110 hover:duration-[0.2s] duration-[0.2s]">
                        <Link to={"/pokedex"} className="">Pokedex</Link>
                    </li>
                    <li className="pr-2 hover:scale-110 hover:duration-[0.2s] duration-[0.2s]">
                        <Link to={"/pokemon"} className="">Pokemon</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}