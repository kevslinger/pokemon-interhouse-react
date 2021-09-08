import React from "react";
import CaveWorld from "./CaveWorld";
import "./game.css";
import Confetti from "react-dom-confetti";

class ZubatMaze extends React.Component {
    constructor(props) {
        super(props);
        const cave = new CaveWorld();
        this.state = {
            cave: cave,
            percentSize: 100 / cave.size,
            zubatCount: 0,
            zubats: null,
            completed: false,
            trainerSpritePath: "trainer_down.png"
        }
    }

    step = (event) => {
        console.log(event.keyCode);
        let ret_array = this.state.cave.step(event.keyCode);
        let trainer_sprite_path = ret_array[0];
        let maybe_zubat = ret_array[1];
        this.setState({trainerSpritePath: trainer_sprite_path ? trainer_sprite_path : this.state.trainerSpritePath});
        //this.state.cave.step(event.keyCode);
        if (this.state.cave.y > this.state.cave.size){
            this.setState({completed: true});
        } else {
            this.forceUpdate();
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.step);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.step);
    }

    render() {
        return (
            <div style={{"width": "600px", "height": "400px", "backgroundColor": "black", "position": "relative"}}>
                <img style={{"position": "relative",
                    "top": `${100 - this.state.cave.y * this.state.percentSize}%`,
                    "left": `${this.state.cave.x * this.state.percentSize - this.state.percentSize}%`,
                    "height": "10%",
                    "width": "5%",
                    "zIndex": 1}} src={this.state.trainerSpritePath} alt={"YOU"}/>
                <span className={"exit"}/>
                {
                    this.state.zubats
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
                    <p style={{"color": "white", "left": "35%", "top": "50%", "position": "relative"}}>You ran into 0 zubats!</p>
                    </div>
                : null}
            </div>
        );
    }

}


export default ZubatMaze;