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
verificaMinimo = () =>{
  if(this.props.preco > this.state.valorMinimo){
    return 
  }
}
class App extends React.Component{

  render(){
    return (<FlexContainer>
    <Header/>
    <DivPrincipal>
      <Produtos img="https://picsum.photos/250/280" item="A" preco={45}/>
      <Produtos img="https://picsum.photos/250/280" item="B" preco={56}/>
      <Produtos img="https://picsum.photos/250/280" item="C" preco={60}/>
      <Produtos img="https://picsum.photos/250/280" item="D" preco={65}/>
      <Produtos img="https://picsum.photos/250/280" item="E" preco={75}/>
      <Produtos img="https://picsum.photos/250/280" item="F" preco={90}/>
      <Produtos img="https://picsum.photos/250/280" item="G" preco={110}/>
      <Produtos img="https://picsum.photos/250/280" item="H" preco={120}/> 
    </DivPrincipal>
    <Formulario/>
    </FlexContainer>
    )
  };
}
export default App