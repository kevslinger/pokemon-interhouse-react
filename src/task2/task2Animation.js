import React from "react";
import "./task2Animation.css";
import Task1Animation from "../task1/task1Animation";
import {Delay} from "../utils";

class Task2Animation extends Task1Animation {
    constructor(props) {
        super(props);
        this.state.part2Script = [
            `Hello again, Team ${props.house}! How goes the quest to become the great team of Pottamon masters` +
                "the world has ever seen?",
            "And how about the work on learning more about these magical creatures and the elements they harness?",
            "I'm certainly impressed with the reports your reps have sent me, you're advancing our course of study " +
                "with Pottamon types tremendously!",
            "I think it's time you moved onto some of the other gyms in our area, to challenge their leaders and get " +
                "even closer to gaining mastery of your calling.",
            "Head up north by Rt. 14 to Virens Loch where the Grass gym is. Gym Leader Spludgie will put you through " +
                "your paces and treat you to the finest food stalls in town!",
            "Spludgie: Psssst. Hey you, hear about the new restaurant in town? Wanna go? I need to make sure their " +
                "beef noodle soup is up to snuff.",
            "Oh, you want a gym badge? Okay, I guess we can do that too... *after* I get some dumplings.",
            "Prof. Squash: There is a Psychic gym off Route 16 in Zimbardo Village. The gym leader there... well, Ra's " +
                "will have a most interesting challenge all who knock knock upon his door.",
            "Ra's: Baby, I'm a Mismagius. I'll make all your wildest dreams come true... That is, provided you can get me " +
                "STOKED with your best jokes or *checks notes* memes, as they call them.",
            "My gym challenge is one of mental exercises to show me your creativity and wit. They say you can learn a lot " +
                "about someone by their humor... SHOW ME YOURS!!!",
            "Prof. Squash: And going out west on Route 18 to Ethelene Center will lead you to the mysterious Poison gym. " +
                "We don't know much about it, or its gym leader, Shadow, but whatever you do, don't stare into the mask.",
            "Shadow: So, you're going to pay me a visit? That's unfortunate. Being around other people annoys me, " +
                "especially eager young researchers.",
            "Oh well, that doesn't matter. Let's see if you can escape my cave. Good luck... Oh, and don't let the snapebats bite.",
            `Prof. Squash: Thanks for all your help so far! We've learned a lot about the ${this.props.pottamon} since ` +
                "you discovered it!"
            ,
            `Well don't just stand there, Team ${props.house}! Go! Run! Earn more badges!`
        ];
        this.state.house = props.house;
        this.state.time = props.time;
        this.state.pottadex = props.pottadex;
        this.state.badges = props.badges;
        this.state.hideProf = false;
        this.state.leader1Path = "spludgiexx.png";
        this.state.leader2Path = "ra.png";
        this.state.leader3Path = "shadow.png";
    }

    continueGame = async() => {
        // This is the function that gets called when the new game button is pressed.
        // we set showopening to false to start the fade to black transition.
        this.setState({showOpening: false,
                             curScript: this.state.part2Script,
                             gameVersion: 2,
                             redirectTo: "/part2",
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
        if (this.state.gameVersion === 2) {
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

}

export default Task2Animation;