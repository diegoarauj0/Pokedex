import Header from "../header"
import react from "react"
import Styled from "./styled"

export default function Main(props:{ children:react.ReactElement<any,any>, title:string }) {
    return (
        <>
            <Header title={props.title} />
            <Styled.Main>
                {props.children}
            </Styled.Main>
        </>
    )
}