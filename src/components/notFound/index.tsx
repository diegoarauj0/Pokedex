import Styled from "./styled"
import { Link } from "react-router-dom"

export default function NotFound() {

    document.title = `...`

    return (
        <Styled.Error>
            <img src="/static/image/404.svg" alt="404 storyset.com"/>
            <p>Não tem pokemon aqui, <Link to={"/pokedex"}>Pokedex</Link></p>
        </Styled.Error>
    )
}