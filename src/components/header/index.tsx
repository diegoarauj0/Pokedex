import { Link } from "react-router-dom"
import Styled from "./styled"

export default function Header(props:{ title:string }) {

    return (
        <Styled.Header>
            <h1>{props.title}</h1>
            <nav>
                <ul>
                    <li><Link to={"/pokedex"} className="">Pokedex</Link></li>
                    <li><Link to={"/pokemon"} className="">Pokemon</Link></li>
                </ul>
            </nav>
        </Styled.Header>
    )
}