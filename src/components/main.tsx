import Header from "./header"
import react from "react"

export default function Main(props:{ children:react.ReactElement<any,any>, title:string }) {
    return (
        <>
            <Header title={props.title} />
            <main className="overflow-y-auto h-[calc(100vh-85px)]">
                {props.children}
            </main>
        </>
    )
}