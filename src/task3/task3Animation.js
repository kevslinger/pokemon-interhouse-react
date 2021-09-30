import "./task3Animation.css";
import Task1Animation from "../task1/task1Animation";
import {Delay} from "../utils";

class Task2Animation extends Task1Animation {
    constructor(props) {
        super(props);
        this.state.part2Script = [
            `Welcome back, Team ${props.house}! Only two gym badges remain. You've come so far in such a short time!` +
                "I'm very proud of all we've accomplished together.",
            "Our research will soon be completed, and then this whole magical world will be better understood.",
            "Now, let's introduce our final gyms.",
            "Head out east using Rt. 23 to get to Sencha Springs, a piping hot tourist destination with one of the " +
                "most renowned gyms of this region, the Fire gym. A little birdie told me its leader actually *dances* " +
                "on fire.",
            "Dancing: HEYA FRIEND! You're coming for the Exothermic Badge huh? Well don't get too cocky, cause I'm " +
                "here to put your feet to the fire!",
            // TODO: I think Dancing can get more here.
            "Fire is all about passion, and this gym is all about sharing passion. But before that, I need a dance " +
                "partner! Oh, are you sweating already? Cause we're just gettin' started!",
            "Prof. Squash: And finally, way down south through the desert Rt. 25 takes you to the Tapu Fiti Oasis, home " +
                "to the Ground gym. I dunno why so many people live out there in that commune, but the worshippers, er, " +
                "gym members certainly seem happy with cult, er, gym leader Mlap.",
            "Mlap: Welcome to my Gym!! I am Mlap, Goddess of Resurrection, and Master of these lands. I'm very " +
                "impressed you've come this far, but can you defeat me? we'll find out soon enough.",
            "Once upon a time, Tapu Fiti Oasis was not a desert, but one of the biggest forests in the world. The " +
                "land no longer looks favorably upon new travelers. You'll have to prove your worth to them (or just " +
                "sign right here and join my cult) to earn my badge.",
            `Prof. Squash: The end is near! I mean, your goal is within your grasp! Team ${this.props.house} ` +
                "representatives, please let me know how your team did by October 25th",
            "Until next time, good luck!"
        ];
        this.state.house = props.house;
        this.state.time = props.time;
        this.state.pottadex = props.pottadex;
        this.state.badges = props.badges;
        this.state.hideProf = false;
        this.state.leader1Path = "dancing.png";
        this.state.leader2Path = "mlap.png";
    }

    continueGame = async() => {
        // This is the function that gets called when the new game button is pressed.
        // we set showopening to false to start the fade to black transition.
        this.setState({showOpening: false,
                             curScript: this.state.part2Script,
                             gameVersion: 3,
                             redirectTo: "/part3",
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
        if (this.state.gameVersion === 3) {
            if (currentLevel === 3) {
                this.setState({showLeader1: true, highlightLeader1: true});
            } else if (currentLevel === 6) {
                this.setState({hideProf: false, showLeader2: true, highlightLeader2: true, highlightLeader1: false});
            } else if (currentLevel === 9) {
                this.setState({hideProf: false, showLeader3: true, highlightLeader3: true, highlightLeader2: false});
            } else if (currentLevel === 4 || currentLevel === 7 || currentLevel === 10) {
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

}

export default Task2Animation;