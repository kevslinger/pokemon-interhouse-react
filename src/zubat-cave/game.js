import React from "react";
import CaveWorld from "./CaveWorld";
import "./game.css";
import Confetti from "react-dom-confetti";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { capitalize } from "../utils";


class ZubatMaze extends React.Component {
    constructor(props) {
        super(props);
        // The 2d gridworld
        const cave = new CaveWorld();
        this.state = {
            // The Player's Username and hour
            username: "",
            house: "",
            // The forms to display before the user plays. We change house dynamically if they don't enter a house correctly.
            formUsernameLabel: "Reddit Username (without the u/):",
            formHouseLabel: "House:",
            // Is true after the user submits their username and house
            gameLive: false,
            // Environment: TODO: do we need to make this a state?
            cave: cave,
            // Percent of HTML to make one move
            percentSize: 100 / cave.size,
            // TODO: Should you get penalized every time
            // Count of zubats and the list of their locations
            zubatCount: 0,
            zubats: [],
            // True after the user has completed the game
            completed: false,
            // We change between 4 trainer sprites as it moves!
            trainerSpritePath: "trainer_down.png"
        }

    }
    // Take a step of the environment
    step = async (event) => {
        if (this.state.gameLive && !this.state.completed) {
            // the cave's step returns the correct trainer sprite to use as well as if we hit a zubat or not
            // TODO: should the cave know about the sprites?
            let ret_array = this.state.cave.step(event.keyCode);
            let trainer_sprite_path = ret_array[0];
            let maybe_zubat = ret_array[1];
            // If we hit a zubat, add it to the list of zubats.
            // TODO: What if we already hit a zubat at that state?
            if (maybe_zubat) {
                this.state.zubats.push({x: this.state.cave.x, y: this.state.cave.y});
                this.setState({zubatCount: this.state.zubatCount + 1});
            }
            // If the user didn't enter a valid move, keep the current trainer sprite.
            this.setState({trainerSpritePath: trainer_sprite_path ? trainer_sprite_path : this.state.trainerSpritePath});
            // If they beat the game.
            // TODO: What if we have sideways goals?
            if (this.state.cave.y > this.state.cave.size) {
                this.setState({completed: true});
                try {
                    // Push to google sheets.
                    const result = await this.state.sheetTab.addRow(
                        {
                            TIMESTAMP: Date().toLocaleString(),
                            USERNAME: this.state.username,
                            HOUSE: capitalize(this.state.house),
                            "ZUBATS": this.state.zubatCount
                        });
                } catch (e) {
                        console.error('Error: ', e);
                    }
            }
        }
    }
    // Update the value of username as the user types in the form.
    handleUsernameFormChange(event) {
        this.setState({username: event.target.value});
    }
    // Update the value of house as the user types in the form.
    handleHouseFormChange(event) {
        this.setState({house: event.target.value});
    }
    // Called when the user clicks the play game button
    beginGame = async(event) => {
        event.preventDefault();
        // Make sure they enter a valid house, and inform them of their incorrect selection if they did not.
        if (!["gryffindor", "hufflepuff", "ravenclaw", "slytherin"].includes(this.state.house.toLowerCase())) {
            this.setState({formHouseLabel: "House* (Please ensure you spelled your house correctly!)"})
            console.log("Wrong house");
            return;
        }
        // Get the google form. I wish I could do this earlier but it seems like I can't? Idk. TODO I guess
        const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
        const SHEET_IDX = process.env.REACT_APP_SHEET_ID;
        const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
        const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n');

        const sheet = new GoogleSpreadsheet(SPREADSHEET_ID);
        try {
            await sheet.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
            });
            // loads document properties and worksheets
            await sheet.loadInfo();

            const tab = sheet.sheetsById[SHEET_IDX];
            // Store the sheet for later.
            this.setState({sheetTab: tab, gameLive: true});
        } catch (e) {
            console.error('Error: ', e);
        }
    }

    // Add the navigation listener
    componentDidMount() {
        document.addEventListener("keydown", this.step);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.step);
    }

    render() {
        return (
            <div style={{"width": "600px"}}>
                {!this.state.gameLive ?
                    <form className={"zubat-game-registration-form"} onSubmit={this.beginGame}>
                        <h1>Welcome to the Poison Gym Challenge!</h1>
                        <p>Oh no! You're lost in the Dark Cave with no escape rope! Navigate to the exit with the arrow keys
                            or WASD. Try to avoid as many Zubats as you can along the way, good luck!</p>
                        <br/>
                        <label className={"zubat-game-form-label"}>{this.state.formUsernameLabel}</label>
                        <br/>
                        <input className={"zubat-game-form-label"} type={"text"} onChange={this.handleUsernameFormChange.bind(this)}/>
                        <br/>
                        <label className={"zubat-game-form-label"}>{this.state.formHouseLabel}</label>
                        <br/>
                        <input className={"zubat-game-form-label"} type={"text"} onChange={this.handleHouseFormChange.bind(this)}/>
                        <br/>
                        <input className={"zubat-game-form-label"} type={"submit"} style={{"width": "25%", "marginTop": "10px"}} value={"Play!"}/>
                    </form>
                : null }

                <div style={{"height": "400px", "backgroundColor": "black", "position": "relative"}}>
                    <img style={{"position": "relative",
                        "top": `${100 - this.state.cave.y * this.state.percentSize}%`,
                        "left": `${this.state.cave.x * this.state.percentSize - this.state.percentSize}%`,
                        "height": "10%",
                        "width": "5%",
                        "zIndex": 1}} src={this.state.trainerSpritePath} alt={"YOU"}/>
                    <span className={"exit"}/>
                    {
                        this.state.zubats.map((item) => (
                            <img className={"zubat"} key={item}
                                 style={{"left": `${item.x * this.state.percentSize - this.state.percentSize}%`,
                                         "top": `${100 - item.y * this.state.percentSize}%`,
                                         }}
                                 src={"snapebat.png"}
                                 alt={"zubat"}/>
                        ))
                    }
                    <Confetti active={this.state.completed}
                              config={
                                  {
                                      angle: "270",
                                      spread: "360",
                                      startVelocity: "40",
                                      elementCount: 270,
                                      duration: 5000,
                                      height: "5px",
                                      width: "5px",
                                  }
                              }
                    />
                    {this.state.cave.y > this.state.cave.size ?
                        <div>
                        <h1 style={{"color": "white", "left": "35%", "top": "45%", "position": "relative"}}>CONGRATS</h1>
                        <p style={{"color": "white", "left": "35%", "top": "45%", "position": "relative"}}>
                            You ran into {this.state.zubatCount} zubat{this.state.zubatCount !== 1? "s" : null}!</p>
                        </div>
                    : null}
                </div>
                <div className={"Zubat-rules"}>
                    <h1>Welcome to the Poison Gym Challenge!</h1>
                    <p>Use the arrow keys or WASD to move. Navigate through the Dark Cave and try to avoid as many zubats as you can!</p>
                </div>
            </div>
        );
    }
}


export default ZubatMaze;