import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from "react";
import Typewriter from "./typewriter";

class Button extends React.Component {

    startGame = async () => {
        let type = new Typewriter();
        type.multiTextDisplay();
    };

    render() {
        return (
            <div className={"opening-scene"}>
                <button className={"new-game"}
                        onClick={this.startGame}>
                    New Game
                </button>
            </div>
        );
    }
}

function staticStartGame() {
    console.log("Clicked");
    return false;
}
function App() {
    return (
        <Typewriter/>
    );
    /*(<div className={"app"}>
            <ReactCSSTransitionGroup transitionName={"start-game-button"}>
                <Typewriter/>
            </ReactCSSTransitionGroup>
        </div>
        );*/
  // return (<div className={"app"}>
  //         <ReactCSSTransitionGroup transitionName = "example"
  //                                  transitionAppear = {true} transitionAppearTimeout = {500}
  //                                  transitionEnter = {false} transitionLeave = {true}>
  //           <img className="center" src="avatar.png" alt="Professor Squash"/>
  //           <Typewriter/>
  //         </ReactCSSTransitionGroup>
  //     </div>
  // );
}


export default App;
