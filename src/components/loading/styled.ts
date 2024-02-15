import styled from "styled-components"

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    div > img {
        width: 270px;
    }

    div > p {
        width: 100%;
        text-align: center;
        color: #FFD573;
        font-family: ${props => props.theme.Righteous};
        font-size: 23px;
    }
`

export default {
    Loading
}