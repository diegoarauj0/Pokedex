import Styled from "./styled"

export default function Loading() {

    document.title = `Carregando...`

    return (
        <Styled.Loading>
            <div>
                <img src="/static/image/loading.gif" alt="loading" />
                <p>Carregando...</p>
            </div>
        </Styled.Loading>
    )
}