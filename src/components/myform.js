import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            year: null,
            personHeight: null
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onHeightChange = this.onHeightChange.bind(this);
        this.onYearChange = this.onYearChange.bind(this);
    }
    validateName(str) {
        if (str.length > 20 || str.length < 3) {
            alert("Invalid data of full Name");
            return false;
        }
        return true;
    }

    validateHeight(value) {
        if (Number(value) > 50) {
            return true;
        }
        alert("Invalid data of person height");
        return false;
    }
    validateYear(value) {
        let currentDate = new Date();
        let age = currentDate.getFullYear() - value;
        if (age < 14) {
            alert("You must be elder then 14");
            return false;
        }
        return true;
    }
    onSubmit(e) {
        e.preventDefault();
        if(
        this.validateName(this.state.firstName)&&
        this.validateName(this.state.lastName)&&
        this.validateHeight(this.state.personHeight)&&
        this.validateYear(this.state.year)){
            alert("Success!!!");
        }
    }
    onFirstNameChange(e) {
        e.preventDefault();
        let value = e.target.value;
        this.setState({firstName: value})
    }

    onLastNameChange(e) {
        e.preventDefault();
        let value = e.target.value;
        this.setState({lastName: value})
    }

    onYearChange(e) {
        e.preventDefault();
        let value = e.target.value;
        this.setState({year: value})
    }

    onHeightChange(e) {
        e.preventDefault();
        let value = e.target.value;
        this.setState({personHeight: value})
    }

    render() {
        return <div>
            <form onSubmit={this.onSubmit}>
                Register now!!!<br/>
                <input type="text" value={this.state.firstName} onChange={this.onFirstNameChange} placeholder = "First name"></input><br/>
                <input type="text" value={this.state.lastName} onChange={this.onLastNameChange} placeholder = "Last name"></input><br/>
                <input type="text" value={this.state.personHeight} onChange={this.onHeightChange} placeholder = "Height"></input><br/>
                <input type="text" value={this.state.year} onChange={this.onYearChange} placeholder = "Year"></input><br/>
                <input type = "submit" value = "Register"></input>
            </form>
        </div>
    }
}