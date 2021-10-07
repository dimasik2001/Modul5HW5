import React from "react";
import './myCarsStyles.css';

export default class MyCars extends React.Component {
    constructor(props) {
        super(props);
        this.cars = ["Porshe", "Toyota", "Audi", "Pagani", "BMW", "Nissan", "Brilliance",
            "Brammo", " Bowler", "Borgward", "Tesla", "Alfa Romeo"];
    }

    OnSearch(str) {
        if(str== null)
        {
            return this.cars;
        }
        let selectedCars = new Array();
        for (let i = 0; i < this.cars.length; i++) {
            if(this.cars[i].startsWith(str)){
                selectedCars.push(this.cars[i]);
            }
        }
        return selectedCars;
    }

    render() {
        const search = this.props.match.params.search;
        return <div class = "car-container">
        {this.OnSearch(search).map(car => <div class = "car-card">{car}</div>)}
        </div>
    }
}