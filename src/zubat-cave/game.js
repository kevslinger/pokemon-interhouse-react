import React from "react";
import CaveWorld from "./CaveWorld";
import "./game.css";
import Confetti from "react-dom-confetti";
import { GoogleSpreadsheet } from "google-spreadsheet";

const SPREADSHEET_ID = process.env.RAVENCLAW_INTERHOUSE_SPREADSHEET_ID;
const SHEET_IDX = process.env.RAVENCLAW_INTERHOUSE_SHEET_ID;
const CLIENT_EMAIL = process.env.RAVENCLAW_INTERHOUSE_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.RAVENCLAW_INTERHOUSE_GOOGLE_SERVICE_PRIVATE_KEY;

const sheet = new GoogleSpreadsheet(SPREADSHEET_ID);


class ZubatMaze extends React.Component {
    constructor(props) {
        super(props);
        const cave = new CaveWorld();
        this.state = {
            cave: cave,
            percentSize: 100 / cave.size,
            // TODO: Should you get penalized every time
            zubatCount: 0,
            zubats: [],
            formSubmitted: false,
            completed: false,
            trainerSpritePath: "trainer_down.png"
        }

    }

    step = async (event) => {
        if (!this.state.completed) {
            let ret_array = this.state.cave.step(event.keyCode);
            let trainer_sprite_path = ret_array[0];
            let maybe_zubat = ret_array[1];
            if (maybe_zubat) {
                this.state.zubats.push({x: this.state.cave.x, y: this.state.cave.y});
                this.setState({zubatCount: this.state.zubatCount + 1});
            }
            this.setState({trainerSpritePath: trainer_sprite_path ? trainer_sprite_path : this.state.trainerSpritePath});
            // If they beat the game.
            if (this.state.cave.y > this.state.cave.size) {
                this.setState({completed: true});
                // Push to google sheets.
                await sheet.loadInfo();
                let tab = sheet.sheetsByIndex[SHEET_IDX];
                const result = await sheet.addRow({TIMESTAMP: Date.now(), USERNAME: "Test User", HOUSE: "Ravenclaw", "ZUBATS": this.state.zubatCount});
            } else {
                this.forceUpdate();
            }
        }
    }

    getGoogleSheet = async() => {

    }

    componentDidMount() {
        document.addEventListener("keydown", this.step);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.step);
    }

    render() {
        return (
            <div style={{"width": "600px"}}>
                {!this.state.formSubmitted ?
                    <form style={{"position": "absolute", "width": "600px", "height": "400px",
                    "margin": "0", "padding": "0", "z-index": "100"}}>
                        <label>Reddit Username (without the u/):</label>
                        <input type={"text"}/>
                        <label>House</label>
                        <input type={"text"}/>
                        <input type={"submit"} value={"Play!"}/>
                    </form>
                : null }

                <div style={{"width": "600px", "height": "400px", "backgroundColor": "black", "position": "relative"}}>
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
                                 src={"zubat.png"}
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
                        <p style={{"color": "white", "left": "35%", "top": "50%", "position": "relative"}}>
                            You ran into {this.state.zubatCount} zubat{this.state.zubatCount !== 1? "s" : null}!</p>
                        </div>
                    : null}
                </div>
                <div className={"Zubat-rules"}>
                    <h1>Welcome to the Poison Gym Challenge!</h1>
                    <p>Oh no! You're lost in the Dark Cave with no escape rope! Navigate to the exit with the arrow keys
                    or WASD. Try to avoid as many Zubats as you can along the way, good luck!</p>
                </div>
            </div>
        );
    }

}


export default ZubatMaze;