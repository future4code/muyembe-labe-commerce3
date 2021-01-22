import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


/* const FlexContainer = styled.div`
    display: flex; ` */
    
    
const FlexContainer = styled.div`    
 `;
      
const Informações = styled.div`
    font-size: 10px;
    margin-left: 10px;

`;
/*  const ProdutoStyled = styled.div`
    width: 13vw;
    height: 42vh;
    background: #eeeeee;
    margin: 10px;
    box-shadow: 3px 3px 3px gray;
    flex-direction: row;
    text-align: center;
    border-radius: 10px 10px;  
` */

const ProdutoStyled = styled.div`
    width: 13vw;
    height: 10vh;
    background: white;
    margin: 10px;
    flex-direction: row;
    text-align: center;
    border-radius: 10px 10px;  
    justify-content: center;   
    `
const ImgStyled = styled.div`
    width: 20;
    height: 20;
    box-shadow: -3px -7px 7px -6px;  
    border-radius: 10px 10px; 
    justify-content: center;
    flex-flow: column wrap;
    flex-grow: 10;
    flex-basis: 30%;
    `;

export class Produtos extends React.Component{
    render(){   
        return<FlexContainer>
                <ImgStyled>
                  <img src={this.props.img} style={{width:200, height:180}}></img>  
                  <Informações> <h3>{this.props.item}</h3><h3>{this.props.preco}</h3></Informações>                                                                     
                </ImgStyled>
                <ProdutoStyled>                                  
                <Button variant="outlined" color="primary">Adicionar ao Carrinho</Button>  
                </ProdutoStyled> 
        </FlexContainer> 
     
    }
}
export default Produtos;