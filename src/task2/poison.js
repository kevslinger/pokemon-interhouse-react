import React from "react";
import { Link } from "react-router-dom";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";


class WaterGym extends React.Component {
    render() {
        return (
            <div style={{"backgroundColor": "#C183C1"}}>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/home"} className={"task-pottamon-logo"}>
                        <img className={"task-pottamon-logo"} src={"pottamon_text_title.png"} alt={"Pottamon!"}/>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"shadow.png"}>
                            <img className={"task-gym-leader-image"} src={"shadow.png"} alt={"Shadow, the Poison Gym Leader"}/>
                        </a>
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        So, you've made it all the way to the Ethelene Center and wish to challenge me for the Toxin badge.
                        Congratulations are in order, I suppose. My gym specialises in poison type Pottamon, for example
                        the Clawla region's unique zubat variant. The Snapebat, as we call it, likes lurking in dark
                        places and - much like me - is easily irritated by the presence of humans - such as yourselves.
                        Make your way to the exit of
                        my <Link to={"/snapebat"}>Horcrux Cave</Link> disturbing
                        as few of them as possible and maybe I'll reward you with my badge. If you really
                        impress me, I might even throw in a free antidote to treat the inevitable zubat bites...
                    </p>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure2"}}>
                        <a href={"snapebat.png"}>
                            <img className={"task-gym-leader-image"} src={"snapebat.png"} alt={"Snapebat"}/>
                        </a>
                    </figure>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure3"}}>
                        <a href={"snapegolbat.png"}>
                            <img className={"task-gym-leader-image"} src={"snapegolbat.png"} alt={"Sevbat"}/>
                        </a>
                    </figure>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure4"}}>
                        <a href={"snapecrobat.png"}>
                            <img className={"task-gym-leader-image"} src={"snapecrobat.png"} alt={"Snivbat"}/>
                        </a>
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "meta"}}>
                        <strong>Meta</strong>
                        <br/>
                        This task is a game playable online at the Pottamon website. The aim of the game is to get from
                        the entrance at the bottom left to the exit at the top right, travelling through an invisible
                        maze and encountering as few zubats as possible. You may play the game as many times as you wish
                        before the deadline and scoring will be based on the smallest average number of zubats
                        encountered for each house with bonus points awarded for some other achievements. The game
                        requires a keyboard and is not supported for mobile or Safari. We encourage trainers to use
                        Firefox or Google Chrome on their computer, and apologize for the inconvenience.
                        <br/><br/>
                        This gym task is due by <a href={"https://www.timeanddate.com/countdown/generic?p0=179&iso=20211018T115959&year=2021&month=10&day=18&hour=11&min=59&sec=59&msg=Gotta%20Catch%20%27Em%20All%3a%20Challenge%20%232%20Countdown"} target={"_blank"} rel={"noreferrer"}>October 18, 11:59pm EDT</a>.
                        (You may continue to play after the deadline but scores will not count)
                    </p>
                </div>
            </div>
        );
    }
}

export default WaterGym;