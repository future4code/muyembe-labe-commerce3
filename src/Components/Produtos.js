import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Formulario from './Formulario'

const FlexContainer = styled.div`
    display: flex;
`;
const Informações = styled.div`
    font-size: 10px;
    margin-left: 10px;
`;
const ProdutoStyled = styled.div`
    width: 13vw;
    height: 42vh;
    background: #eeeeee;
    margin: 10px;
    box-shadow: 3px 3px 3px gray;
    flex-direction: row;
    text-align: center;
    border-radius: 10px 10px;
`;

export class Produtos extends React.Component{

    render(){   
        return<FlexContainer>
                <ProdutoStyled>
                    <img src={this.props.img}></img>
                    <Informações> <h3>Item: {this.props.item}</h3><h3>R$ :{this.props.preco},00</h3></Informações> 
                    <Button variant="outlined" color="primary">Adicionar ao Carrinho</Button>
                </ProdutoStyled>
        </FlexContainer> 
     
    }
}
export default Produtos;