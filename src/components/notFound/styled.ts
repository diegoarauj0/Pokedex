import styled from "styled-components"

const Error = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;

    img {
        width: 70%;
        max-width: 400px;
    }

    p {
        font-family: ${props => props.theme.Righteous};
        font-weight: bolder;
        width: 100%;
        text-align: center;
    }

    a {
        font-family: ${props => props.theme.Righteous};
    }
`

export default {
    Error
}