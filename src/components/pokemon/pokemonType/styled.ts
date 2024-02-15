import styled from "styled-components"

const PokemonType = styled.div<{bg?:string}>`
    background-color: ${props => props.theme[props.bg?`color-${props.bg}`:"color-normal"] };
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;
    padding: 0px 8px;
    margin: 8px;
    color: white;
    font-family: ${props => (props.theme.Righteous)};
    filter: saturate(150%) ;

    img {
        height: 60px;
        padding: 8px 8px 8px 0px;

    }
`

export default {
    PokemonType
}