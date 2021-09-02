import React from 'react';
import { Delay } from '../utils';
import './part0.css';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { DEFAULT_TYPESPEED, BLACK, WHITE, CLICK_TO_CONTINUE } from "../constants";


class Part0 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // We're going to append to text one character at a time to get the typewriter effect in pokemon starting games.
            text: '',
            curScript: [],
            // Script for part 0
            part0Script: [
                'Hello there! Welcome to the world of Pottamon! My name is Squash, but people call me the Pottamon Professor.\n\n',
                'As you know, our world is inhabited by magical little creatures called Pottamon. Some people keep them as pets, others use them for battles.',
                'Team Ravenclaw studies Pottamon to learn more about them and their natural habitat!',
                'Recently, Team Ravenclaw and I have been focusing our studies on the different element types Pottamon can have. ' +
                'We believe the secret in these adorable creatures and their powers lies in their connection to the different elements that make up this world!',
                'What? No, not Hydrogen and Helium, then Lithium, Beryllium, but the Pottamon elements. Rock, Water and Electric, for example.',
                'Oh, you already knew this? And you’re already part of a team? That’s marvellous! I’d love to speak with your team representative, and hear their research from them!',
                'What\'s that? You don\'t have a representative yet? Well, could you perhaps choose one, and tell me about it before October 4th so we can get this journey started?',
                'Get ready, your very own Pottamon legend is about to unfold! A world of dreams and adventures with Pottamon awaits! Let\'s go!',
            ],
            footer: CLICK_TO_CONTINUE,//'',
            // CurrentLine is the state attribute which we'll update as we read off each line
            currentLine: 0,
            // doneTyping is an attribute we use to handle clicks.
            // The user will click inside the text box to advance to the next line of text.
            // If the text has not yet finished
            doneTyping: false,
            // Typespeed is the number of milliseconds between printing each letter
            typeSpeed: DEFAULT_TYPESPEED,
            // When cursorcolor is black, it will be hidden. we make it white later on after the text has been printed.
            cursorColor: BLACK,
            // showOpening and showMain are two flags we use to transition from the
            // intro screen with new game button, and the professor screen.
            showOpening: true,
            showMain: false
        }
    }

    // keeps a reference of the typewriter
    myRef = React.createRef();

    /*
    Whenever the user clicks on the game while the text is printing, we want to make the text print faster
    (mimic the real game)
    If the text is done printing, then we want to go to the next line.
     */
    handleClick = async () => {
        // The footer will always read "(click anywhere to continue)" and we want it to be
        // after a <br> so we have to reset it awkwardly.
        //this.setState({footer: ''});

        // If all the text has been printed already and we received a click, then reset to defaults for typing speed,
        // remove the blinking cursor, and run the typewriter on the next line.
        if (this.state.doneTyping) {
            this.setState({
                doneTyping: false,
                typeSpeed: DEFAULT_TYPESPEED,
                cursorColor: BLACK
            });
            await this.runAnimation(++this.state.currentLine);
            // After the typing has finished, set doneTyping to true and reveal the cursor.
            this.setState(
                {doneTyping: true,
                    cursorColor: WHITE
            });
        }
        // If we receive a click but the typing hasn't finished, speed up the typing (1ms between letters)
        // TODO:
        else {
            this.setState({typeSpeed: 1});
        }
    };

    runAnimation = async (idx) => {
        const line = this.state.curScript[idx];
        if (line) {
            // text starts at nothing and we add one character to it each time at a speed of typeSpeedDelay (in ms).
            let text = '';
            let typeSpeedDelay = new Delay(this.state.typeSpeed || 1);
            this.setState({typeSpeedDelay});
            for (let char = 0; char < line.length; char++) {
                await typeSpeedDelay.getPromise();
                text += line[char];
                this.setState({text});
                // I do this to interact with the clicking mechanic to change this.state.typespeed dynamically.
                // TODO: it may not be worth it.
                typeSpeedDelay = new Delay(this.state.typeSpeed || 1);
                this.setState({typeSpeedDelay: typeSpeedDelay});
            }
        }
        // After we're done printing everything, set doneTyping flag to true, revert type speed to default,
        // and change the cursor color to be visible (white)
        this.setState({
            doneTyping: true,
            typeSpeed: DEFAULT_TYPESPEED,
            cursorColor: WHITE
        });
    };

    startGame = async() => {
        // This is the function that gets called when the new game button is pressed.
        // we set showopening to false to start the fade to black transition.
        this.setState({showOpening: false,
                            curScript: this.state.part0Script});
        // then we wait 3 seconds for the transition to finish, then start the fade in transition.
        let transitionDelay = new Delay(3000);
        await transitionDelay.getPromise();
        this.setState({showMain: true});
        const openingDelay = new Delay(2000);
        await openingDelay.getPromise();
        await this.runAnimation(0);
    }

    render() {
        return (
            <div ref={this.myRef} className={"app-root"}>
                <ReactCSSTransitionGroup
                                         transitionName = "opening-scene-transition"
                                         transitionEnter = {false}
                                         transitionLeaveTimeout = {2000}>
                {this.state.showOpening ?
                    <div className={"opening-scene"}>
                        <h2>PoTTa&#8202;MoN</h2>
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
                        <img className="center" src="avatar.png" alt="Professor Squash"/>
                        <div className={'textbox typewriter-text-wrap'}>
                            <h1 className='react-typewriter-text'>
                                {this.state.text}
                                <div
                                    className='react-typewriter-pointer add-cursor-animate'
                                    style={{ backgroundColor: this.state.cursorColor }}
                                ></div>
                            </h1>
                            <br/>
                            <ReactCSSTransitionGroup transitionName = "footer-text-transition"
                                                     transitionEnterTimeout = {500}
                                                     transitionLeave = {false}>
                                {this.state.doneTyping && this.state.currentLine < 3 ?
                                    <h1 className={'footer-text'}>
                                    {this.state.footer}
                                    </h1>
                                    :null}
                            </ReactCSSTransitionGroup>
                        </div>
                    </div>
                    : null}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default Part0;