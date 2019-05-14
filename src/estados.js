import React, {Component} from 'react';
class Botao extends Component {
    state={vezesPressionado:0}
    handleButtonPress = () => {
        const vezesPressionado = this.state.vezesPressionado + 1;
        this.setState({vezesPressionado})}
    
render() { 
return(
    <div>
        <span> Fui pressionado: {this.state.vezesPressionado} vezes <br/></span>

        <button className="App-button" variant="info" onClick={this.handleButtonPress}>      Clique Aqui!</button>
</div>
)
}
}
export default Botao;
