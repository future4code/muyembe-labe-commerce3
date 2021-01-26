import React from 'react';
import styled from 'styled-components'
import Header from './Components/Header'
import Produtos from './Components/Produtos'
import Formulario from './Components/Formulario'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ContainerCarrinho from './Components/ContainerCarrinho'

const DivPrincipal = styled.div`
  max-width: 60vw;
  height: 100vh;
  background: #ffe7d0;
  box-shadow: 3px 3px 3px gray;
  float: left;
  margin: 30px;
  border-radius: 10px 10px;
  display: flex;
  flex-wrap: wrap;
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

const ImagemCarrinho = styled.img`
  height:100px;
  width:150px;
  float:right;

`

class App extends React.Component{
  state = {
    produtos: [{
      id: 1,
      item: "A",
      preco: 45,
      img : "https://picsum.photos/150/230"
    },{
      id: 2,
      item: "B",
      preco: 56,
      img : "https://picsum.photos/150/230"
    },{
      id: 3,
      item: "C",
      preco: 56,
      img : "https://picsum.photos/150/230"
    },{
      id: 4,
      item: "D",
      preco: 65,
      img : "https://picsum.photos/150/230"
    },{
      id: 5,
      item: "E",
      preco: 75,
      img : "https://picsum.photos/150/230"
    },{
      id:6 ,
      item: "F",
      preco: 90,
      img : "https://picsum.photos/150/230"
    },{
      id: 7,
      item: "G",
      preco: 110,
      img : "https://picsum.photos/150/230"
    },{
      id: 8,
      item: "H",
      preco: 120,
      img : "https://picsum.photos/150/230"
    }
    ],
      
    inputValorMinimo: 0,
    inputValorMaximo: 0,
    inputBuscaProduto: "",

    listaPesquisa: [],
    pesquisa: false,
    estaCarrinho: false
    
  }
 
  onChangeValorMinimo =(event) =>{
    this.setState({inputValorMinimo: event.target.value });
  }
  onChangeValorMaximo =(event) =>{
    this.setState({inputValorMaximo: event.target.value });
  }
  onChangeBuscaProduto =(event) =>{
    this.setState({inputBuscaProduto: event.target.value });
  }
  adicionaFiltros = () =>{
    // const novoFiltro = {
    //   valorMinimo: this.state.inputValorMinimo,
    //   valorMaximo: this.state.inputValorMaximo,
    //   buscaProduto: this.state.inputBuscaProduto
    // }
    // const addFiltro = [...this.state.filtros, novoFiltro];
    // this.setState({filtros: addFiltro });

    const listaMaxEMin = this.state.produtos.filter((produto) => {
      
      if((produto.preco >= Number(this.state.inputValorMinimo)) && (produto.preco <= Number(this.state.inputValorMaximo))) {
        return true
      }
      return false
    })

    const listaBuscaProduto = listaMaxEMin.filter((produto) => {
      
      if(produto.item === this.state.inputBuscaProduto) {
        return true
      }
      return false
    })

    if(listaBuscaProduto.length === 0 ) {
      this.setState({listaPesquisa: listaMaxEMin, pesquisa: true})
    } else {
      this.setState({listaPesquisa: listaBuscaProduto, pesquisa: true})
    }
  }

  mostrarProdutosCarrinho = () =>{
   this.setState({estaCarrinho:!this.state.estaCarrinho})
 }
 
  
  render(){
  
    let listaDeProdutos
    if(this.state.pesquisa) {
      listaDeProdutos = this.state.listaPesquisa.map((produto) => {
        return (
          <Produtos key={produto.id}
            img={produto.img}
            item={produto.item} 
            preco={produto.preco}
          />
        )
      })
    } else {
      listaDeProdutos = this.state.produtos.map((produto) => {
        return (
          <Produtos key={produto.id}
            img={produto.img}
            item={produto.item} 
            preco={produto.preco}
          />
        )
      })
    }

  
    

    // <Produtos img={produt.img} item={produt.item} preco={produt.preco}/>

    /* const TodosProdutos = this.state.produtos.map((produt) =>{
      return <Produtos img={produt.img} item={produt.item} preco={produt.preco}/>
    }) */
    return (
      <div>
        
        <Header>
           
        </Header>
        <ImagemCarrinho src={"https://miro.medium.com/max/572/1*sTiCK-rsyI7vgiqwX3D6ng.jpeg"} onClick={this.mostrarProdutosCarrinho}/>            
        

       
       
        <DivPrincipal>
          {listaDeProdutos}
        </DivPrincipal>

        {this.state.estaCarrinho?<ContainerCarrinho/>:""}

        

        <FormStyled>

          <h1>Filtros</h1>
          <h3>Valor minimo: <TextField value={this.state.inputValorMinimo} onChange={this.onChangeValorMinimo} id="standard-number" type="number" /></h3>

          <h3>Valor Máximo: <TextField value={this.state.inputValorMaximo} onChange={this.onChangeValorMaximo} id="standard-number" type="number"/></h3> 

          <h3>Buscar Produtos: <TextField value={this.state.inputBuscaProduto} onChange={this.onChangeBuscaProduto} id="standard-number" type="text"/></h3>

          <Button onClick={this.adicionaFiltros} variant="outlined" color="primary">Filtrar</Button>
              
        </FormStyled>

      </div>
    )
  };
}
export default App