import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Average extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fuel: "0",
            km: "0",
            cost: "0"
        };
        this.changeStateFuel = this.changeStateFuel.bind(this)
        this.changeStateKm = this.changeStateKm.bind(this)
        this.changeStateCost = this.changeStateCost.bind(this)
    }

    changeStateFuel(event) {
        this.setState({
            fuel: event.target.value
        })
      };
    changeStateKm(event) {
        this.setState({
            km: event.target.value
        })
    };
    changeStateCost(event) {
        this.setState({
            cost: event.target.value
        })
    }

    render(){
    return(
        <div>
            <h1>Kalkulator średniego spalania na 100 km</h1>
            <p>Spalone paliwo w litrach: <input type="number" fuel={this.state.value}
            onChange={this.changeStateFuel}/></p>
            <p>Ilość przejechanych kilometrów: <input type="number" km={this.state.value}
            onChange={this.changeStateKm}/></p>
            <p>Cena litra paliwa (opcjonalne): <input type="number"  cost={this.state.value}
            onChange={this.changeStateCost}/></p>
            <button>Oblicz</button>
        </div>
        );
    }
}

class Cost extends React.Component{
    render(){
    return(
        <div>
            <h1>Kalkulator kosztu przejechania trasy</h1>
            <p>Długość planowanej trasy w kilometrach: <input type="number" name="km"/></p>
            <p>Średnie spalanie w litrach na 100 km: <input type="number" name="fuel"/></p>
            <p>Cena litra paliwa: <input type="number" name="cost"/></p>
            <button>Oblicz</button>
            <Average />
        </div>
        ); 
    }
}


ReactDOM.render(<Cost />, document.getElementById('root'));