import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core';

const FlexPrincipal = styled.div`
        margin:50px;
`;
const DivAux = styled.div` 
    align-items: center;
    justify-items: center;
`; 
const MenuStyled = styled.ul`
    text-decoration: none;
    list-style: none;
    `;
const Items = styled.li`
    display: inline;
`;

export class Menu extends React.Component{

    

    render () {
       
        return(<FlexPrincipal>
            <DivAux>
                <MenuStyled>
                <Items><Button variant="contained" color="outlined"><a href="#">HOME</a></Button></Items>
                <Items></Items>
                </MenuStyled>
            </DivAux>
        </FlexPrincipal>
        )}
}
export default Menu;