import React from 'react';
import styled from 'styled-components'
import Header from './Components/Header'
import Produtos from './Components/Produtos'
import Formulario from './Components/Formulario'
import imagem1 from './img/alien.jpeg'
import imagem2 from './img/camisetaastronauta.jpeg'
import imagem3 from './img/estacaoespacial.jpeg'
import imagem4 from './img/fantasiaastronauta.jpeg'
import imagem5 from './img/kitaastronautas.jpeg'
import imagem6 from './img/legocity.jpeg'
import imagem7 from './img/legostarwars.jpeg'
import imagem8 from './img/orbitaterrestre.jpeg'


const FlexContainer = styled.div`
`;
/* const DivPrincipal = styled.div`
  max-width: 58vw;
  height: 100vh;
  background: #ffe7d0;
  box-shadow: 3px 3px 3px gray;
  float: left;
  display: flex;
  flex-wrap: wrap; // Quebra a linha
  margin: 30px;
  border-radius: 10px 10px;
  `; */

  const DivPrincipal = styled.div`
  width: 68vw;
  height: 100vh;
  float: left;
  display: flex;
  flex-wrap: wrap; 
  flex-direction: row;
  margin: 30px;
  border-radius: 10px 10px;
    `;

class App extends React.Component{

  render(){
    return (<FlexContainer>
    <Header/>
    <DivPrincipal>
      <Produtos img= {imagem1} item="Alien" preco="R$ 59,00"/>
      <Produtos img= {imagem2} item="Camiseta Astronauta" preco="R$ 65,00"/>
      <Produtos img= {imagem3} item="Estação Espacial" preco="R$ 85,00"/>
      <Produtos img= {imagem4} item="Fantasia Astronauta" preco="R$ 100,00"/>
      <Produtos img= {imagem5} item="Kit Astronauta" preco="R$ 110,00"/>
      <Produtos img= {imagem6} item="Lego City" preco="R$ 120,00"/>
      <Produtos img= {imagem7} item="Lego Star Wars" preco="R$ 130,00"/>
      <Produtos img= {imagem8} item="Órbita Terrestre" preco="R$ 140,00"/>
    </DivPrincipal>
    <Formulario/>
    </FlexContainer>
    )
  };
}
export default App