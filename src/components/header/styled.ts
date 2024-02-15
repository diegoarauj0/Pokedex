import styled from "styled-components"

const Header = styled.header`
    background-color: ${props => (props.theme["color-red"])};
    color: white;
    padding: 8px;
    width: 100%;
    height: 85px;

    h1 {
        font-family: ${props => (props.theme.ChivoMono)};
        font-weight: 300;
        font-size: 36px;
    }

    nav {
        width: 100%;
        font-family: var(--ChivoMono);
        margin: 8px 0px 0px 0px;
    }

    nav > ul {
        display: flex;
        font-size: 14px;
        list-style: none;
    }

    nav > ul > li {
        transition: 0.2s;
        padding-right: 8px;
    }

    nav > ul > li:hover {
        transition: 0.2s;
        transform: scale(1.1);
    }

    nav > ul > li > a {
        font-family: ${props => (props.theme.ChivoMono)};
        color: white;
        text-decoration: none;
    }
`


export default {
    Header
}