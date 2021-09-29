import React from "react";
import "./task1Animation.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import IntroAnimation from "../intro/introAnimation";
import {Delay} from "../utils";
import {HOUSECOLORS} from "../constants";
import {Redirect} from "react-router-dom";
import Confetti from "react-dom-confetti";

class Task1Animation extends IntroAnimation {
    constructor(props) {
        super(props);
        this.state.part1Script = [
            `Welcome, intrepid explorers of Team ${props.house}! It's time ` +
                "to get started on your path to becoming the next Pottamon Master.",
            "...oh? You don’t know where to go? Well, er, I suppose I could give you a map?",
            "No? You would prefer some links to your destinations? Okay, sounds weird, but if that’s what you’d like...",
            "The closest gyms to us feature Rock, Water, and Electric type Pottamon. ",
            "If you head up Rt 7 to Spinel Town, you’ll hit the Rock gym in no time! The gym leader, MJ, has a " +
                "fortitude tougher than diamonds. You'll need to be bold if you want to defeat her! ",
            "MJ: Y'all ready to rock and roll? Hope you're ready for your first challenge. To become the Pottamon " +
                "champion, you'll need to keep your coal and work hard to climb yourself up from rock bottom.",
            "The only way you can beat me is using one of your own Pottamon. Don't take this challenge for granite!",
            "Prof. Squash: If you decide to face the Water gym, you'll " +
                "need to get to the Seafare Port by way of Rt 9. But be warned, Gym Leader Eldis tends to speak " +
                "exclusively in dad jokes. I hear her favorite show is dancing with the staryus... ",
            "Eldis: Ahoy, mateys! Nice to make your aqua-intance! Come meet me at Seafare Port, where the wind is salty, " +
                "the streets tide-y, the views are sea-nic, and the - but you already knew all that, if you read the " +
                "Quibbladex.",
            "You haven't? How dare you approach me with such insolence! You're in deep water now, kid, because I'm going " +
                "to kick up a storm. Want to prove you're not as shallow as you seem? Well then, accept my challenge!",
            "Prof. Squash: And if you dare, you might chance challenging " +
                "the electric gym leader off of Rt 11. Mayor of Faraday City, rumor has it that Gym Leader XanCanStand " +
                "keeps a pack of electric alzapcas... best be careful, I’ve read that petting their fur is enough " +
                "to give you quite the static shock!",
            "Xan: MWAHAHAHA! My gym's the toughest one yet! This challenge will overload your circuit boards! ECCLETRIXITY! " +
                "The Type all witches and wizards are weak against!",
            "Your only hope is to interview any muggleborns you may have in your class. Now! Get amped! It's challenge time!",
            "Prof. Squash: Now then, do you have what it takes to defeat the gym leaders and claim your badges? I don't mind " +
                "what order you complete these three badges in, but please do so by October 11th so you can advance onto the " +
                "next set of gyms.",
            `Well then, off you go! Good luck, Team ${this.props.house}!`
        ];
        this.state.gameVersion = 0;
        this.state.redirectTo = "/home";
        this.state.house = props.house;
        this.state.time = props.time;
        this.state.pottadex = props.pottadex;
        this.state.badges = props.badges;
        this.state.hideProf = false;
        this.state.leader1Path = "mj.png";
        this.state.leader2Path = "eldis.png";
        this.state.leader3Path = "xancanstand.png";
        this.state.showLeader1 = false;
        this.state.showLeader2 = false;
        this.state.showLeader3 = false;
        this.state.highlightLeader1 = false;
        this.state.highlightLeader2 = false;
        this.state.highlightLeader3 = false;
    }

    continueGame = async() => {
        // This is the function that gets called when the new game button is pressed.
        // we set showopening to false to start the fade to black transition.
        this.setState({showOpening: false,
                             curScript: this.state.part1Script,
                             gameVersion: 1,
                             redirectTo: "/part1",
        });
        // then we wait 3 seconds for the transition to finish, then start the fade in transition.
        let transitionDelay = new Delay(3000);
        await transitionDelay.getPromise();
        this.setState({showMain: true});
        const openingDelay = new Delay(2000);
        await openingDelay.getPromise();
        await this.runAnimation(0);
    }

    runAnimationBeforeCallback = async(currentLevel) => {
        // Keep functionality for the "New Game" Option
        if (this.state.gameVersion === 1) {
            if (currentLevel === 4) {
                this.setState({showLeader1: true, highlightLeader1: true});
            } else if (currentLevel === 7) {
                this.setState({hideProf: false, showLeader2: true, highlightLeader2: true, highlightLeader1: false});
            } else if (currentLevel === 10) {
                this.setState({hideProf: false, showLeader3: true, highlightLeader3: true, highlightLeader2: false});
            } else if (currentLevel === 5 || currentLevel === 8 || currentLevel === 11) {
                this.setState({
                    hideProf: true,
                });
            } else if (currentLevel === 13) {
                this.setState({highlightLeader3: false, hideProf: false});
            }
        }
    }
    runAnimationAfterCallback = async(currentLevel) => {
        if (this.state.gameVersion === 0) {
            if (currentLevel === 1) {
                this.setState({showPokemon: true});
            }
        }
    }

    render() {
        return (
            <div className={"anime-app-root"}>
                {this.state.shouldRedirect ? <Redirect to={this.state.redirectTo}/> :
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
                                <img style={{"opacity": this.state.hideProf ? 0.33 : 1}}
                                     className={"anime-professor"} id={`anime-professor-version-${this.state.gameVersion}`} src={"professor_squash.png"} alt="Professor Squash"/>
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
                                        <img className={"anime-pottamon"} src={"aileroink.png"} alt={"Aileroink"}/>
                                    </span>
                                    : null }
                                <span style={{"opacity": this.state.hideProf ? 0.33 : 1}}
                                      className={"anime-professor-spotlight"} id={`anime-professor-spotlight-version-${this.state.gameVersion}`}/>
                                <img style={{"opacity": this.state.highlightLeader1 ? 1 : this.state.showLeader1 ? 0.33 : 0}}
                                     className={`anime-gym-leader-1-v${this.state.gameVersion} ${this.state.highlightLeader1 ? "anime-highlight-gym-leader" : ""}`}
                                     src={this.state.leader1Path} alt={"Gym Leader"}/>
                                <span style={{"opacity": this.state.showLeader1 ? 1 : 0}} className={"anime-gym-leader-spotlight"}/>
                                <img style={{"opacity": this.state.highlightLeader2 ? 1 : this.state.showLeader2 ? 0.33 : 0}}
                                     className={`anime-gym-leader-2-v${this.state.gameVersion} ${this.state.highlightLeader2 ? "anime-highlight-gym-leader" : ""}`}
                                     src={this.state.leader2Path} alt={"Gym Leader"}/>
                                <img style={{"opacity": this.state.highlightLeader3 ? 1 : this.state.showLeader3 ? 0.33 : 0}}
                                     className={`anime-gym-leader-3-v${this.state.gameVersion} ${this.state.highlightLeader3 ? "anime-highlight-gym-leader" : ""}`}
                                     src={this.state.leader3Path} alt={"Gym Leader"}/>
                            </div>
                                <div ref={this.myRef} className={"anime-textbox anime-typewriter-text-wrap"}>
                                <h1 className={"anime-react-typewriter-text"}>
                                    {this.state.text}
                                    <div
                                        className="anime-react-typewriter-pointer anime-add-cursor-animate"
                                        style={{ backgroundColor: this.state.cursorColor }}
                                    ></div>
                                </h1>
                                <ReactCSSTransitionGroup transitionName = "anime-footer-text-transition"
                                                         transitionEnterTimeout = {500}
                                                         transitionLeave = {false}>
                                    {this.state.doneTyping && this.state.currentLine < 3 ?
                                        <h1 className={"anime-react-typewriter-text"} id={"anime-footer-text"}>
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