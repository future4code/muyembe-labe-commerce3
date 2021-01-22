import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'


const HeaderStyled = styled.main`
    background: #222831;
    width: 100vw;
    height: 15vh;
    padding-top:1px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    
`;
const Logo = styled.div`
  text-decoration: none;
  width: 15vw;
  background: #f9ac38;
  height: 8vh;
  text-align: center;
  border-radius: 10px;
  box-shadow: 5px 5px 5px;
  margin: 60px;
  display: inline
`;

export class Header extends React.Component{
    render(){
        return <HeaderStyled>
            <Logo><a href="#"><h2>LabeCommerce</h2></a></Logo>
            <Menu/>
        </HeaderStyled>
    }
}
export default Header;