import React from 'react';
import '../part1/part1.css';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Part0 from "../part0/part0";
import {Delay, arrEquals} from "../utils";
import {HOUSECOLORS} from "../constants";
import {Redirect} from "react-router-dom";
import Confetti from "react-dom-confetti";

class Part1 extends Part0 {
    constructor(props) {
        super(props);
        this.state.part1Script = [
            'Hello again! Congrats on earning your first three Pottamon badges!',
            `Team ${props.house} is well on its way to defeating the Pottamon Gym Challenge and getting a chance to compete in the Pottamon League!`,
            'More words for fun'
        ]
        this.state.house = props.house;
        this.state.time = props.time;
        this.state.pottadex = props.pottadex;
        this.state.badges = props.badges;
    }

    continueGame = async() => {
        // This is the function that gets called when the new game button is pressed.
        // we set showopening to false to start the fade to black transition.
        this.setState({showOpening: false,
            curScript: this.state.part1Script});
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
            <div className={"app-root"}>
                {this.state.shouldRedirect ? <Redirect to={"/"}/> :
                    <div>
                <ReactCSSTransitionGroup
                    transitionName = "opening-scene-transition"
                    transitionEnter = {false}
                    transitionLeaveTimeout = {2000}>
                    {this.state.showOpening ?
                        <div className={"opening-scene"}>
                            <h1 className={"pottamon-title"}>PoTTa&#8202;MoN</h1>
                            <button className={"continue-game"}
                                    onClick={this.continueGame.bind(this)}>
                                <div className={"column"}>
                                    <div className={"continue"} style={{"paddingBottom": "10px"}}>CONTINUE</div>
                                    <div className={"column1"} style={{"color": HOUSECOLORS[this.state.house]}}>TEAM NAME</div>
                                    <div className={"column1"} style={{"color": HOUSECOLORS[this.state.house]}}>POTTaDEX</div>
                                </div>
                                <div className={"column"}>
                                    <br/>
                                    <div className={"column2"} style={{"color": HOUSECOLORS[this.state.house], "paddingTop": "10px"}}>{this.state.house.toUpperCase()}</div>
                                    <div className={"column2"} style={{"color": HOUSECOLORS[this.state.house]}}>{this.state.pottadex}</div>
                                </div>
                                <div className={"column"}>
                                    <br/>
                                    <div className={"column3"} style={{"color": HOUSECOLORS[this.state.house], "paddingTop": "10px"}}>TIME</div>
                                    <div className={"column3"} style={{"color": HOUSECOLORS[this.state.house]}}>BADGES</div>
                                </div>
                                <div className={"column"}>
                                    <br/>
                                    <div className={"column4"} style={{"color": HOUSECOLORS[this.state.house], "paddingTop": "10px"}}>{this.state.time}</div>
                                    <div className={"column4"} style={{"color": HOUSECOLORS[this.state.house]}}>{this.state.badges}</div>
                                </div>
                            </button>
                            <button className={"new-game"}
                                    onClick={this.startGame.bind(this)}>
                                NEW GAME
                            </button>
                        </div>
                        : null}
                </ReactCSSTransitionGroup>

                <ReactCSSTransitionGroup component="div"
                                         transitionName = "main-scene-transition"
                                         transitionEnterTimeout = {1}
                                         transitionLeaveTimeout = {1}>
                    {this.state.showMain ?
                        <div className={"main-scene"} onClick={this.handleClick}>
                            <div className={"img-holder"}>
                                <img className={"professor"} src={"avatar2.png"} alt="Professor Squash"/>
                                <span className={"confetti"}>
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
                                    <span className={"pottamon-holder"}>
                                        <img className={"pottamon"} src={"wyverni.png"} alt={"Wyverni"}/>
                                    </span>
                                    : null }
                                <span className={"spotlight"}/>
                            </div>
                                <div ref={this.myRef} className={'textbox typewriter-text-wrap'}>
                                <h1 className={'react-typewriter-text'}>
                                    {this.state.text}
                                    <div
                                        className='react-typewriter-pointer add-cursor-animate'
                                        style={{ backgroundColor: this.state.cursorColor }}
                                    ></div>
                                </h1>
                                <ReactCSSTransitionGroup transitionName = "footer-text-transition"
                                                         transitionEnterTimeout = {500}
                                                         transitionLeave = {false}>
                                    {this.state.doneTyping && this.state.currentLine < 3 ?
                                        <h1 className={'react-typewriter-text'} id={'footer-text'}>
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

    // render() {
    //     return (
    //         <div className={"app-root"}>
    //             <ReactCSSTransitionGroup
    //                                      transitionName = "opening-scene-transition"
    //                                      transitionEnter = {false}
    //                                      transitionLeaveTimeout = {2000}>
    //             {this.state.showOpening ?
    //                 <div className={"opening-scene"}>
    //                     <h2>PoTTa&#8202;MoN</h2>
    //                     <button className={"continue-game"}
    //                             onClick={this.startGame.bind(this)}>
    //                         <p>CONTINUE</p>
    //                         TEAM NAME &emsp;&emsp;&emsp; {this.state.house.toUpperCase()} &emsp;&emsp;&emsp;&emsp; TIME &emsp;&emsp;&emsp; {this.state.time}
    //                         <br/>
    //                         POTTaDEX &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; {this.state.pottadex} &emsp;&emsp;&emsp;&emsp; BADGES &emsp;&emsp;&emsp;&emsp;&nbsp; {this.state.badges}
    //                     </button>
    //                     <button className={"new-game"}
    //                             onClick={this.startGame.bind(this)}>
    //                         NEW GAME
    //                     </button>
    //                 </div>
    //                 : null}
    //             </ReactCSSTransitionGroup>
    //
    //             <ReactCSSTransitionGroup component="div"
    //                                      transitionName = "main-scene-transition"
    //                                      transitionEnterTimeout = {1500}
    //                                      transitionLeaveTimeout = {300}>
    //             {this.state.showMain ?
    //                 <div className={"main-scene"} onClick={this.handleClick}>
    //                     <img className="center" src="avatar.png" alt="Professor Squash"/>
    //                     <div ref={this.myRef} className={'textbox typewriter-text-wrap'}>
    //                         <h1 className='react-typewriter-text'>
    //                             {this.state.text}
    //                             <div
    //                                 className='react-typewriter-pointer add-cursor-animate'
    //                                 style={{ backgroundColor: this.state.cursorColor }}
    //                             ></div>
    //                         </h1>
    //                         <br/>
    //                         <ReactCSSTransitionGroup transitionName = "footer-text-transition"
    //                                                  transitionEnterTimeout = {500}
    //                                                  transitionLeave = {false}>
    //                             {this.state.doneTyping && this.state.currentLine < 3 ?
    //                                 <h1 className={'footer-text'}>
    //                                 {this.state.footer}
    //                                 </h1>
    //                                 :null}
    //                         </ReactCSSTransitionGroup>
    //                     </div>
    //                 </div>
    //                 : null}
    //             </ReactCSSTransitionGroup>
    //         </div>
    //     );
    // }
}

export default Part1;