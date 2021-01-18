import React from 'react';
import styled from 'styled-components'
import Header from './Components/Header'
import Produtos from './Components/Produtos'
import Formulario from './Components/Formulario'

const FlexContainer = styled.div`
`;
const DivPrincipal = styled.div`
  max-width: 58vw;
  height: 100vh;
  background: #ffe7d0;
  box-shadow: 3px 3px 3px gray;
  float: left;
  display: flex;
  flex-wrap: wrap; // Quebra a linha
  margin: 30px;
  border-radius: 10px 10px;
`;

class App extends React.Component{

  render(){
    return (<FlexContainer>
    <Header/>
    <DivPrincipal>
      <Produtos img="https://picsum.photos/250/280" item="Item A" preco="R$ 59,00"/>
      <Produtos img="https://picsum.photos/250/280" item="Item B" preco="R$ 65,00"/>
      <Produtos img="https://picsum.photos/250/280" item="Item C" preco="R$ 85,00"/>
      <Produtos img="https://picsum.photos/250/280" item="Item D" preco="R$ 100,00"/>
      <Produtos img="https://picsum.photos/250/280" item="Item E" preco="R$ 110,00"/>
      <Produtos img="https://picsum.photos/250/280" item="Item F" preco="R$ 120,00"/>
      <Produtos img="https://picsum.photos/250/280" item="Item G" preco="R$ 130,00"/>
      <Produtos img="https://picsum.photos/250/280" item="Item H" preco="R$ 140,00"/>
    </DivPrincipal>
    <Formulario/>
    </FlexContainer>
    )
  };
}
export default App