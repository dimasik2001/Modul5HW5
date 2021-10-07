import React from "react";
import './myGameStyles.css';
export default class MyGame extends React.Component {
    constructor(props) {
        super(props);
        this.gameItems = ['STONE', 'SCISSORS', 'PAPER'];
        this.itemPic = [
            "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cartoon-hand-drawn-cute-stones-image_1239935.jpg",
            "https://png.pngtree.com/png-clipart/20190116/ourlarge/pngtree-red-scissors-beautiful-scissors-hand-painted-scissors-cartoon-scissors-png-image_406866.jpg",
            "https://images.squarespace-cdn.com/content/v1/5fceef94ad06677b0d28c5ce/1607992385823-REDSFO5NQ0TCGGQKEEYV/ToiletPaper.png"
        ]
        this.state = {
            gameNumber: 1,
            resultTable: "",
            playerScore: 0,
            opponentScore: 0
        };
    }
    getWin(gameNumber){
        let counter = this.state.playerScore;
        counter++;
        this.setState({playerScore: counter});
        return `Game ${gameNumber} You won!`;
    }

    getLose(gameNumber){
        let counter = this.state.opponentScore;
        counter++;
        this.setState({opponentScore: counter});
        return `Game ${gameNumber} You lose`;
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    getResultOfGame(myItem) {
        let item = this.gameItems[this.getRandomInt(0, 3)];
        let tableStr = this.state.resultTable;
        let n = this.state.gameNumber;
        if (myItem == item) {
            tableStr += `Game ${n} Draw `;
        }
        else {
            switch (item) {

                case "STONE":
                    switch (myItem) {
                        case "SCISSORS":
                            tableStr += this.getLose(n);
                            break;
                        case "PAPER":
                            tableStr += this.getWin(n);
                            break;
                    }
                    break;

                case "SCISSORS":
                    switch (myItem) {
                        case "STONE":
                            tableStr += this.getWin(n);
                            break;
                        case "PAPER":
                            tableStr += this.getLose(n);
                            break;
                    }
                    break;
                case "PAPER":
                    switch (myItem) {
                        case "STONE":
                            tableStr += `Game ${n} You lose `;
                            break;
                        case "SCISSORS":
                            tableStr += `Game ${n} You won!`;
                            break;
                    }
            }
        }
        n++;
        this.setState({resultTable: `${tableStr} Your Item: ${myItem}, Opponent's Item: ${item}\n`, gameNumber : n});

    }
    render() {
        return <> Choose your Item:
            <div class="items-container">
                <img src= {this.itemPic[0]}
                    alt="Stone" class="item" onClick={(e) => 
                    { e.preventDefault(); this.getResultOfGame(this.gameItems[0]);}}/>
                <img src={this.itemPic[1]}
                    alt="Scissors" class="item" onClick={(e) => 
                        { e.preventDefault(); this.getResultOfGame(this.gameItems[1]);}}/>
                <img src={this.itemPic[2]}
                    alt="Paper" class="item" onClick={(e) => 
                        { e.preventDefault(); this.getResultOfGame(this.gameItems[2]);}}/>
            </div>
            <div class = "score-board">{this.state.playerScore} : {this.state.opponentScore}</div>
            <div class="results-table">{this.state.resultTable.split('\n').reverse().map(str => <>{str}<br/></>)}</div>
        </>
    }
}