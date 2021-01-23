import React  from 'react'
import styled from 'styled-components'

const ConteudoCarrinho = styled.div`
    width:60vh;
    height:100vh;
    border:1px solid #000;
    float:right;
   
    margin-right:50px;
`

class ContainerCarrinho extends React.Component{

    render(){
        return (
            <div>
                <ConteudoCarrinho>
                   <h2>Carrinho:</h2> 
                   <p>Total :<span></span></p>

                </ConteudoCarrinho>
            </div>
        )
    }

}

export default ContainerCarrinho