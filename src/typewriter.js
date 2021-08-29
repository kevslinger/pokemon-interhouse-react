import React from 'react';
import { Delay, contentInView } from './utils';
import './typewriter.css';

const DEFAULT_TYPESPEED = 30;
const WHITE = "white";
const BLACK = "black";
const CLICK_TO_CONTINUE = "(click anywhere in the text box to continue)";

class Typewriter extends React.Component {
    state = {
        // We're going to append to text one character at a time to get the typewriter effect in pokemon starting games.
        text: '',
        // Lines is the script we need to say
        lines: [
            'Hello there! Welcome to the world of Pottamon! My name is Squash, but people call me the Pottamon Professor.\n\n',
            'As you know, our world is inhabited by magical little creatures called Pottamon. Some people keep them as pets, others use them for battles.',
            'Team Ravenclaw studies the Pottamon, to learn more about them and their natural habitat!',
            'Do you want to help me out? Great! Your very own Pottamon legend is about to unfold! A world of dreams and adventures with Pottamon awaits! Let\'s go!',
            'Recently, Team Ravenclaw and I have been focussing our studies on the different element types Pottamon can have. ' +
            'We believe the secret in discovering more about these adorable creatures and their powers lies in their connection to the different elements that make up this world! ' +
            'What? No, not Hydrogen and Helium, then Lithium, Beryllium, but the Pottamon elements. Rock, Water and Electric, for example.',
            'Oh, you already knew this? And you’re already part of a team? That’s marvellous! I’d love to speak with your team representative, and hear their research from them! W' +
            'hat, you do not have a representative yet? Well, could you perhaps choose one, and tell me about it **before October 4th** so we can get this journey started?',
            'We at Team Ravenclaw are so happy that you are willing to join us in this adventure! It is sure to be a blast.'
        ],
        footer: '',
        // CurrentLine is the state attribute which we'll update as we read off each line
        currentLine: 0,
        // TODO: I forget why we have this animate thing
        animate: false,
        // doneTyping is an attribute we use to handle clicks.
        // The user will click inside the text box to advance to the next line of text.
        // If the text has not yet finished
        doneTyping: false,
        typeSpeed: DEFAULT_TYPESPEED,
        cursorColor: BLACK,
        footerDelay: new Delay(3000),
        showOpening: true,
        showMain: false
    }

    myRef = React.createRef();

    handleClick = async () => {
        this.setState({footer: ''});
        if (this.state.doneTyping) {
            this.setState({
                doneTyping: false,
                typeSpeed: DEFAULT_TYPESPEED,
                cursorColor: BLACK
            });
            await this.runAnimation(++this.state.currentLine);

            this.setState(
                {doneTyping: true,
                    cursorColor: WHITE
            });
        }
        else {
            this.setState({typeSpeed: 1});
        }
    };

    multiTextDisplay = async () => {
        const openingDelay = new Delay(5000);
        await openingDelay.getPromise();
        await this.runAnimation(0);
    };

    runAnimation = async (idx) => {
        const textArr = this.state.lines[idx];
        if (textArr) {
            let text = '';
            let typeSpeedDelay = new Delay(this.state.typeSpeed || 1);
            this.setState({typeSpeedDelay});
            for (let char = 0; char < textArr.length; char++) {
                await typeSpeedDelay.getPromise();
                text += textArr[char];
                this.setState({text});
                typeSpeedDelay = new Delay(this.state.typeSpeed || 1);
                this.setState({typeSpeedDelay});
            }
        }
        this.setState({
            doneTyping: true,
            typeSpeed: DEFAULT_TYPESPEED,
            cursorColor: WHITE
        });
        await this.state.footerDelay.getPromise();
        if (this.state.doneTyping) {
            this.setState({footer: CLICK_TO_CONTINUE});
        }
    };

    componentDidMount() {
        this.multiTextDisplay();
        //this.runAnimation(0);
        this.setState({ scrollAreaIsSet: false });
    }

    startGame() {
        this.setState({showOpening: false, showMain: true});
    }

    render() {
        return (
            <div className={"my-bigass-app"}>
                {this.state.showOpening && (
                    <div className={"opening-scene"}>
                        <button className={"new-game"}
                                onClick={this.startGame.bind(this)}>
                            New Game
                        </button>
                    </div>
                )}
                {this.state.showMain && (
                    <div className={"main-scene"}>
                        <img className="center" src="avatar.png" alt="Professor Squash"/>
                        <div ref={this.myRef} className={'textbox typewriter-text-wrap'} onClick={this.handleClick}>
                            <h1 className='react-typewriter-text'>
                                {this.state.text}
                                <div
                                    className='react-typewriter-pointer add-cursor-animate'
                                    style={{ backgroundColor: this.state.cursorColor }}
                                ></div>
                            </h1>
                            <br/>
                            <h1 className={'footer-text'}>
                                {this.state.footer}
                            </h1>
                        </div>
                    </div>
                )}
            </div>
        );
    }
};

export default Typewriter;