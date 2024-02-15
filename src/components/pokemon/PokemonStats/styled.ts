import styled from "styled-components"

const Stats = styled.div`
    border-bottom: 1px solid gray;
    padding: 5px 0px;
    display: flex;
    width: 100%;
    max-width: 600px;
`

const Information = styled.div`
    font-family: ${props => (props.theme.ChivoMono)};
    display: flex;
    margin-right: 8px;
    width: 148px;
    align-items: center;
`

const Name = styled.p`
    font-weight: 500;
    color: gray;
    width: 105px;
    margin-right: 8px;
    text-align: right;
`

const Number = styled.p`
    font-weight: 600;
    width: 35px;
    text-align: center;
`

const ParentPercentage = styled.div`
    width: calc(100% - 148px);
`

const Percentage = styled.div<{bg?:string, width:number | string}>`
    transition: 1s;
    height: 25px;
    border-radius: 0.375rem;
    background-color:${props => (props.bg?props.theme[`color-${props.bg}`]:"color-normal")};
    width: ${props => (props.width)}%;
`

export default {
    Stats,
    Number,
    Percentage,
    Name,
    Information,
    ParentPercentage
}