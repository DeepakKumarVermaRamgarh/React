import styled, { css } from 'styled-components'

export const ButtonView = styled.button`
    color: #000;
    background-color: #fff;
    padding: 10px 50px;
    border: 1px solid #000;
    font-weight: bold;
    font-size: 18px;
    width: 200px;

    ${props => props.filled && css`
        background-color: ${props.bg ? `${props.bg}` : '#000'};
        color: ${props.color ? `${props.color}` : '#fff'};
        border: none;
`}
`