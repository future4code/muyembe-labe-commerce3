import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Produto from './Produtos'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const Post =styled.div`
  background: #eeeeee;
`;
const FormStyled = styled.div`
    height: 40vh;
    text-align: center;
    float: left;
    margin: 30px;
    max-width: 42vw;
    width: 30vw;
    box-shadow: 3px 3px 3px gray;
    background: #ffe7d0;
    border-radius: 10px 10px;
`;
export class Formulario extends React.Component{
    state = {
      filtros: [{
       valorMinimo: null,
       valorMaximo: null,
       buscaProduto: ''
      }]
    }

    onChangeValorMinimo = (event) => {
      this.setState({inputValorMinimo: event.target.value });
    };

    onChangeValorMaximo = (event) => {
      this.setState({ inputValorMaximo: event.target.value });
    };

    onChangeBuscaProduto = (event) => {
      this.setState({ inputBuscaProduto: event.target.value });
    };

    adicionaFiltros = () =>{
      const novoFiltro = {
        valorMinimo: this.state.inputValorMinimo,
        valorMaximo: this.state.inputValorMaximo,
        buscaProduto: this.state.inputBuscaProduto
      }
      const addFiltro = [...this.state.filtros, novoFiltro];
      this.setState({filtros: addFiltro})
    }

    render(){

     /* RETORNA UMA DIV COM OS ÚLTIMOS FILTROS QUE O ÚSUARIO ESCOLHEU
     const filtrosDosUsuarios = this.state.filtros.map((filtr) =>{
      return (
        <Post>
            <h1>{filtr.valorMinimo}</h1>
            <h1>{filtr.valorMaximo}</h1>
            <h1>{filtr.buscaProduto}</h1>
        </Post>
      )
    }) */

        return<FormStyled>
            <h1>Filtros</h1>
            <h3>Valor minimo: <TextField value={this.state.inputValorMinimo} onChange={this.onChangeValorMinimo} id="standard-number" type="number" InputLabelProps={{shrink: true,}}/></h3>

            <h3>Valor Máximo: <TextField value={this.state.inputValorMaximo} onChange={this.onChangeValorMaximo} id="standard-number" type="number"InputLabelProps={{shrink: true,}}/></h3> 

            <h3>Buscar Produtos: <TextField value={this.state.inputBuscaProduto} onChange={this.onChangeBuscaProduto} id="standard-number" type="text"/></h3>

            <Button onClick={this.adicionaFiltros} variant="outlined" color="primary">Filtrar</Button>

           
        </FormStyled>
    }
}
export default Formulario;