import styled from "styled-components";
import { theme } from "./Theme"
import ButtonStyled from "./Button";

export const Button = styled.button`
    background-color: ${(prop) =>
         prop.backgroudColor ? prop.backgroudColor : '#FFEA96'};
    width:120px;
    height:${({ themee }) => theme.size.xxl};

    &:active {
        background-color: #FFEA96;
    }
`

export const Button2 = styled(ButtonStyled)`
    background-color: ${({ themee }) => theme.color.primary} ;
    width:120px;
    height:60px;
    
`