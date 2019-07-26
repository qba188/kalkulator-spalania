import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Average extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fuel: null,
            km: null,
            cost: null,
            sum: null
        };
        this.changeStateFuel = this.changeStateFuel.bind(this)
        this.changeStateKm = this.changeStateKm.bind(this)
        this.changeStateCost = this.changeStateCost.bind(this)
        this.calculate= this.calculate.bind(this)
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
    calculate(){
        this.setState({
            sum: ((Number(this.state.fuel) / Number(this.state.km)) * 100).toFixed(1),
            roadcost: (((Number(this.state.fuel) / Number(this.state.km)) * 100) * Number(this.state.cost)).toFixed(2)
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
            <button onClick={this.calculate}>Oblicz</button>
            <output>
                <p>Ilość spalonego paliwa: <output>{this.state.sum}</output>l.</p>
                <p>Koszt spalonego paliwa: <output>{this.state.roadcost}</output>zł.</p>
            </output>
        </div>
        );
    }
}

class Cost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fuelc: null,
            kmc: null,
            costc: null,
            sum: null,
        };
        this.costChangeStateFuel = this.costChangeStateFuel.bind(this)
        this.costChangeStateKm = this.costChangeStateKm.bind(this)
        this.costChangeStateCost = this.costChangeStateCost.bind(this)
        this.calculate = this.calculate.bind(this)
    }

    costChangeStateFuel(event) {
        this.setState({
            fuelc: event.target.value
        })
        };
    costChangeStateKm(event) {
        this.setState({
            kmc: event.target.value
        })
    };
    costChangeStateCost(event) {
        this.setState({
            costc: event.target.value
        })
    }

    calculate(){
        this.setState({
            sum: (((100 * Number(this.state.fuelc)) / 100) * Number(this.state.costc)).toFixed(2),
            roadcost: (((Number(this.state.kmc) * Number(this.state.fuelc)) / 100) * Number(this.state.costc)).toFixed(2)
        })
    }
    
    render(){
    return(
        <div>
            <h1>Kalkulator kosztu przejechania trasy</h1>
            <p>Długość planowanej trasy w kilometrach: <input type="number" kmc={this.state.value}
            onChange={this.costChangeStateKm}/></p>
            <p>Średnie spalanie w litrach na 100 km: <input type="number" fuelc={this.state.value}
            onChange={this.costChangeStateFuel}/></p>
            <p>Cena litra paliwa: <input type="number" costc={this.state.value}
            onChange={this.costChangeStateCost}/></p>
            <button onClick={this.calculate}>Oblicz</button>
            <output>
                <p>Koszt przejechania 100 km:{this.state.sum}</p>
                <p>Koszt przejechania {this.state.kmc} km: {this.state.roadcost}</p>
            </output>
            <Average />
        </div>
        ); 
    }
}


ReactDOM.render(<Cost />, document.getElementById('root'));