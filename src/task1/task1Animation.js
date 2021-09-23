import React from 'react';
import './task1Animation.css';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import IntroAnimation from "../intro/introAnimation";
import {Delay, arrEquals} from "../utils";
import {HOUSECOLORS} from "../constants";
import {Redirect} from "react-router-dom";
import Confetti from "react-dom-confetti";

class Task1Animation extends IntroAnimation {
    constructor(props) {
        super(props);
        this.state.part1Script = [
            `Welcome, intrepid explorers of Team ${props.house}, to the first steps of your Pottamon journey! Let’s get you started on ` +
            "your path to becoming the next Pottamon Master.",
            "...oh? You don’t know where to go? Well, er, I suppose I could give you a map?",
            "No? You would prefer some links to your destinations? Okay, sounds weird but if that’s what you’d like…",
            "(kids these days don’t know how to appreciate the novelty in doing things themselves). Ahem, excuse me.",
            "The closest gyms to us would be of the Rock, Water, and Electric varieties. ",
            "If you head up Rt 11, you’ll hit the Rock gym in no time! The gym leader, MJ, has a fortitude tougher than diamonds. " +
            "You’ll need to be bold if you want to defeat her! ",
            "If you decide to face the Water gym, you’ll " +
            "need only to go down Rt 13. But be warned, she tends to speak exclusively in dad jokes. I hear " +
            "her favorite show is dancing with the staryus… ",
            "And if you dare, you might chance challenging " +
            "the electric gym leader off of Rt 15. Rumor has it that the gym leader keeps a pack of electric" +
            "alpacamons...best to be careful, I’ve read that petting their fur is enough to give you quite the" +
            "static shock!",
        ];
        this.state.gameVersion = 0;
        this.state.house = props.house;
        this.state.time = props.time;
        this.state.pottadex = props.pottadex;
        this.state.badges = props.badges;
    }

    continueGame = async() => {
        // This is the function that gets called when the new game button is pressed.
        // we set showopening to false to start the fade to black transition.
        this.setState({showOpening: false,
                             curScript: this.state.part1Script,
                             gameVersion: 1,
        });
        // then we wait 3 seconds for the transition to finish, then start the fade in transition.
        let transitionDelay = new Delay(3000);
        await transitionDelay.getPromise();
        this.setState({showMain: true});
        const openingDelay = new Delay(2000);
        await openingDelay.getPromise();
        await this.runAnimation(0);
    }

    runAnimationCallback = async(currentLevel) => {
        if (arrEquals(this.state.curScript, this.state.part0Script) && currentLevel === 1){
            this.setState({showPokemon: true});
        }
    }

    render() {
        return (
            <div className={"anime-app-root"}>
                {this.state.shouldRedirect ? <Redirect to={"/"}/> :
                    <div>
                <ReactCSSTransitionGroup
                    transitionName = "anime-opening-scene-transition"
                    transitionEnter = {false}
                    transitionLeaveTimeout = {2000}>
                    {this.state.showOpening ?
                        <div className={"anime-opening-scene"}>
                            <h1 className={"anime-pottamon-title"}>PoTTa&#8202;MoN</h1>
                            <button className={"anime-continue-game"}
                                    onClick={this.continueGame.bind(this)}>
                                <div className={"anime-column"}>
                                    <div className={"anime-continue"}>CONTINUE</div>
                                    <div className={"anime-column1"} style={{"color": HOUSECOLORS[this.state.house]}}>TEAM NAME</div>
                                    <div className={"anime-column1"} style={{"color": HOUSECOLORS[this.state.house]}}>POTTaDEX</div>
                                </div>
                                <div className={"anime-column"}>
                                    <br/>
                                    <div className={"anime-column2"} id={"anime-top-row"} style={{"color": HOUSECOLORS[this.state.house]}}>{this.state.house.toUpperCase()}</div>
                                    <div className={"anime-column2"} style={{"color": HOUSECOLORS[this.state.house]}}>{this.state.pottadex}</div>
                                </div>
                                <div className={"anime-column"}>
                                    <br/>
                                    <div className={"anime-column3"} id={"anime-top-row"} style={{"color": HOUSECOLORS[this.state.house]}}>TIME</div>
                                    <div className={"anime-column3"} style={{"color": HOUSECOLORS[this.state.house]}}>BADGES</div>
                                </div>
                                <div className={"anime-column"}>
                                    <br/>
                                    <div className={"anime-column4"} id={"anime-top-row"} style={{"color": HOUSECOLORS[this.state.house]}}>{this.state.time}</div>
                                    <div className={"anime-column4"} style={{"color": HOUSECOLORS[this.state.house]}}>{this.state.badges}</div>
                                </div>
                            </button>
                            <button className={"anime-new-game"}
                                    onClick={this.startGame.bind(this)}>
                                NEW GAME
                            </button>
                        </div>
                        : null}
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup component={"div"}
                                         transitionName={"anime-main-scene-transition"}
                                         transitionEnterTimeout={1}
                                         transitionLeaveTimeout={1}>
                    {this.state.showMain ?
                        <div className={"anime-main-scene"} onClick={this.handleClick}>
                            <div className={"anime-img-holder"}>
                                <img className={"anime-professor"} id={`anime-professor-version-${this.state.gameVersion}`} src={"professor_squash.png"} alt="Professor Squash"/>
                                <span className={"anime-confetti"}>
                                    <Confetti active={this.state.showPokemon}
                                              config={
                                                  {
                                                      angle: "270",
                                                      spread: "360",
                                                      startVelocity: "10",
                                                      elementCount: 270,
                                                      duration: 675,
                                                      height: "2px",
                                                      width: "1px",
                                                      colors: ["#FFFFFF"]
                                                  }
                                              }
                                    />
                                </span>
                                {this.state.showPokemon ?
                                    <span className={"anime-pottamon-holder"}>
                                        <img className={"anime-pottamon"} src={"wyverni.png"} alt={"Wyverni"}/>
                                    </span>
                                    : null }
                                <span className={"anime-spotlight"} id={`anime-spotlight-version-${this.state.gameVersion}`}/>
                            </div>
                                <div ref={this.myRef} className={'anime-textbox anime-typewriter-text-wrap'}>
                                <h1 className={'anime-react-typewriter-text'}>
                                    {this.state.text}
                                    <div
                                        className='anime-react-typewriter-pointer anime-add-cursor-animate'
                                        style={{ backgroundColor: this.state.cursorColor }}
                                    ></div>
                                </h1>
                                <ReactCSSTransitionGroup transitionName = "anime-footer-text-transition"
                                                         transitionEnterTimeout = {500}
                                                         transitionLeave = {false}>
                                    {this.state.doneTyping && this.state.currentLine < 3 ?
                                        <h1 className={'anime-react-typewriter-text'} id={'anime-footer-text'}>
                                            {this.state.footer}
                                        </h1>
                                        :null}
                                </ReactCSSTransitionGroup>
                            </div>
                        </div>
                        : null}
                </ReactCSSTransitionGroup>
            </div>
                }
            </div>
        );
    }
}

export default Task1Animation;