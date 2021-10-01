import React from "react";
import CaveWorld from "./caveWorld";
import "./game.css";
import Confetti from "react-dom-confetti";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { capitalize } from "../utils";
import {Link} from "react-router-dom";

var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
console.log("sfar");
console.log(isSafari);
console.log("sfar");

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
            // Environment:
            cave: cave,
            // Percent of HTML to make one move
            percentSize: 100 / cave.size,
            // True after the user has completed the game
            completed: false,
            // We change between 4 trainer sprites as it moves!
            // Default to trainer looking down at the user.
            trainerSpritePath: "trainer_down.png"
        }
    }

    // Called when the user clicks the play game button
    beginGame = async(event) => {
        event.preventDefault();
        // Make sure they enter a valid house, and inform them of their incorrect selection if they did not.
        if (!["gryffindor", "hufflepuff", "ravenclaw", "slytherin"].includes(this.state.house.toLowerCase())) {
            this.setState({formHouseLabel: "House* (Please ensure you spelled your house correctly!)"})
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
            await this.saveResults();
        } catch (e) {
            console.error('Error: ', e);
        }
    }

    handleKeypress = async (event) => {
        if (this.state.gameLive && !this.state.completed) {
            let action = convertAction(event.keyCode);
            await this.step(action);
        }
    }

    // Take a step of the environment
    step = async (action) => {
        let maybe_zubat = this.state.cave.step(action);
        // If the user didn't enter a valid move, keep the current trainer sprite.
        let trainer_sprite_path = getTrainerSpritePath(action);
        this.setState({trainerSpritePath: trainer_sprite_path ? trainer_sprite_path: this.state.trainerSpritePath});
        // If they beat the game.
        if (this.state.cave.y >= this.state.cave.size) {
            this.setState({completed: true});
            await this.saveResults();
        }
    }

    reset = () => {
        this.state.cave.reset();
        this.setState({
            completed: false,
            trainerSpritePath: "trainer_down.png",
            });
    }

    saveResults = async () => {
        try {
            // Push to google sheets.
            const result = await this.state.sheetTab.addRow(
                {
                    TIMESTAMP: Date().toLocaleString(),
                    USERNAME: this.state.username,
                    HOUSE: capitalize(this.state.house),
                    "MAP": this.state.cave.map_id,
                    "ZUBATS": this.state.cave.zubatCount,
                    "STEPS": this.state.cave.numSteps,
                    "KEYPRESSES": this.state.cave.keyPresses,
                    "COMPLETED?": this.state.completed,
                });
        } catch (e) {
            console.error('Error saving results: ', e);
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

    // Add the navigation listener
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeypress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeypress);
    }

    render() {
        return (
            <div>
                <div className={"zubat-game-mobile-error-container"}>
                    <h1>We're Sorry!</h1>
                    <p>The Horcrux Cave game is not supported on mobile. Sorry!<br/><br/>If you are receiving this error
                        on a computer, try putting your webpage in full-screen mode. If that does not fix the issue,
                        please send a reddit PM to u/Professor_Squash so we can address this issue. Thanks!
                    </p>
                </div>
                {isSafari ?
                    <div className={"zubat-game-safari-error-container"}>
                        <h1>We're Sorry!</h1>
                        <p>The Horcrux game does not support Safari. We recommend using Firefox or Google Chrome. If you
                            are receiving this error message and you're <strong>not</strong> using Safari, please send a
                            reddit PM to u/Professor_Squash so we can address this issue. Thanks!</p>
                    </div>
                    :
                    <div className={"zubat-game-container"}>
                        {!this.state.gameLive ?
                            <form className={"zubat-game-registration-form"} onSubmit={this.beginGame}>
                                <h1 className={"zubat-game-welcome"}>Welcome to the Poison Gym Challenge!</h1>
                                <p className={"zubat-game-welcome-rules"}>Oh no! You're lost in the Horcrux Cave with no
                                    escape rope! Navigate to the exit with the arrow keys
                                    or WASD. Try to avoid as many Zubats as you can along the way, good luck!</p>
                                <label className={"zubat-game-form-label"}>{this.state.formUsernameLabel}</label>
                                <br/>
                                <input className={"zubat-game-form-label"} type={"text"}
                                       onChange={this.handleUsernameFormChange.bind(this)}/>
                                <br/>
                                <label className={"zubat-game-form-label"}>{this.state.formHouseLabel}</label>
                                <br/>
                                <input className={"zubat-game-form-label"} type={"text"}
                                       onChange={this.handleHouseFormChange.bind(this)}/>
                                <br/>
                                <input className={"zubat-game-form-label"} type={"submit"}
                                       style={{"width": "25%", "marginTop": "10px"}} value={"Play!"}/>
                            </form>
                            : null}
                        <div style={{"width": "100%", "height": "100%", "position": "relative"}}>
                            <img style={{
                                "position": "relative",
                                "top": `${100 - (this.state.cave.y + 1) * this.state.percentSize}%`,
                                "left": `${(this.state.cave.x) * this.state.percentSize}%`,
                                "height": "10%",
                                "width": "5%",
                                "zIndex": 1,
                                "opacity": this.state.completed ? 0 : 1
                            }} src={this.state.trainerSpritePath} alt={"YOU"}/>
                            <span className={"exit"}/>
                            {
                                this.state.cave.zubats.map((item, idx) => (
                                    <img className={"zubat"} key={idx}
                                         style={{
                                             "left": `${item.x * this.state.percentSize}%`,
                                             "top": `${100 - (item.y + 1) * this.state.percentSize - 3}%`,
                                         }}
                                         src={"snapebat.png"}
                                         alt={"snapebat"}/>
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

                            {this.state.completed ?
                                <div>
                                    <h1 className={"zubat-endgame-congrats-h1"}>CONGRATS</h1>
                                    <p className={"zubat-endgame-score-p"}>
                                        You ran
                                        into {this.state.cave.zubatCount} zubat{this.state.cave.zubatCount !== 1 ? "s" : null}!</p>
                                    <button className={"zubat-endgame-buttons"} onClick={this.reset.bind(this)}>Play
                                        Again
                                    </button>
                                    <br/>
                                    <Link to={"/home"}>
                                        <button className={"zubat-endgame-buttons"}>Return to Home</button>
                                    </Link>
                                </div>
                                : null}
                        </div>
                        <div className={"zubat-scoreboard-container"}>
                            <h1 className={"zubat-game-name"}>HORCRUX CAVE ESCAPE</h1>
                            <h1 className={"zubat-scoreboard"}>SNAPEBATS ENCOUNTERED: {this.state.cave.zubatCount}</h1>
                        </div>
                        <div className={"zubat-rules"}>
                            <h1>Welcome to the Poison Gym Challenge!</h1>
                            <p>Use the arrow keys or WASD to move. Navigate through the Horcrux Cave and try to avoid as
                                many zubats as you can!</p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default ZubatMaze;


// Helper functions
const convertAction = (input) => {
    switch (input) {
        // Left
        case 37:
        case 65:
            return 0;
        // Right
        case 39:
        case 68:
            return 1;
        // Up
        case 38:
        case 87:
            return 2;
        // Down
        case 40:
        case 83:
            return 3;
        default:
            // Any other input
            break;
    }
}

const getTrainerSpritePath = (action) => {
    switch (action) {
        case 0:
            return "trainer_left.png";
        case 1:
            return "trainer_right.png";
        case 2:
            return "trainer_up.png";
        case 3:
            return "trainer_down.png";
        default:
            return "";
    }
}
