import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const FormStyled = styled.div`
    height: 80vh;
    text-align: center;
    float: left;
    margin: 20px;
    max-width: 42vw;
    width: 20vw;
    box-shadow: 3px 3px 3px gray;
    background: #ffe7d0;
    border-radius: 10px 10px;
`;
export class Formulario extends React.Component{
    render(){
        return<FormStyled>
            <h1>Filtros</h1>
            <h3>Valor minimo: <TextField id="standard-number" type="number" InputLabelProps={{shrink: true,}}/></h3>
            <h3>Valor Máximo: <TextField id="standard-number" type="number"InputLabelProps={{shrink: true,}}/></h3> 
            <h3>Buscar Produtos: <TextField id="standard-number" type="text"/></h3>
        </FormStyled>
    }
}
export default Formulario;