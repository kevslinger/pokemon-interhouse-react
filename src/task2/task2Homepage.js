import React from "react";
import { Link } from "react-router-dom";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";

class Task2Homepage extends React.Component {
    render() {
        return (
            <div style={{"backgroundColor": "#3c5aa6"}}>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/home"} className={"task-pottamon-wand"}>
                        <img className={"task-pottamon-wand"} src={"pottamon_wand_logo.png"} alt={"Pottamon!"}/>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"professor_squash.png"} target={"_blank"} rel={"noreferrer"}>
                            <img className={"task-gym-leader-image"} src={"professor_squash.png"} alt={"Professor Squash"}/>
                        </a>
                        <figcaption className={"task-gym-leader-caption"}>3 badges down, 5 to go!</figcaption>
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        Hello again! How goes the quest to become the greatest team of Pottamon masters the world has
                        ever seen? And how about the work on learning more about these magical creatures and the elements
                        they harness? I’m certainly impressed with the reports I’ve been receiving, you are advancing
                        our course of study with Pottamon types tremendously!
                        <br/><br/>
                        I think it’s time you moved onto some of the other gyms in our area, to challenge their leaders
                        and get even closer to gaining mastery of your calling. Head up north by Route 14 to Virens Loch
                        where the Grass gym is. Spludgie, the Grass Gym Leader, will put you through your paces, as
                        well as treat you to some of the finest restaurants and food stalls in town!
                        <br/><br/>
                        There is a Psychic gym off Route 16 in Zimbardo Village. The gym leader there... well, he will
                        have a most interesting challenge for all who knock knock upon his door. Feel free to inquire
                        about his award-winning art or controversial astronomy theorems.
                        <br/><br/>
                        And going out west on Route 18 to Horcrux Cave will lead you to the mysterious Poison gym whose
                        leader has a unique and difficult task planned. Shrouded in <i>Shadow</i>, it is a puzzling
                        place I have longed to learn the secrets of. You’ll find the leader there equally inexplicable.
                        Be careful of the wild Pottamon, and whatever you do, don’t stare at the mask. Let me know what you find out!
                        <br/><br/>
                        I'm expecting the next reports from your representatives
                        by <a href={"https://www.timeanddate.com/countdown/generic?p0=179&iso=20211018T115959&year=2021&month=10&day=18&hour=11&min=59&sec=59&msg=Gotta%20Catch%20%27Em%20All%3a%20Challenge%20%232%20Countdown"} target={"_blank"} rel={"noreferrer"}>October 18th, 11:59pm EDT</a>.
                        See you then!
                    </p>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure4"}}>
                        <Link to={"/grass"} target={"_blank"} rel={"noreferrer"}>
                            <img className={"task-gym-leader-image"} src={"spludgiexx.png"} alt={"Grass Gym Leader Spludgie"}/>
                        </Link>
                        <figcaption className={"task-gym-leader-caption"}>Spludgie, the Grass Gym Leader</figcaption>
                    </figure>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure5"}}>
                        <Link to={"/psychic"} target={"_blank"} rel={"noreferrer"}>
                            <img className={"task-gym-leader-image"} src={"ra.png"} alt={"Psychic Gym Leader Ra's"}/>
                        </Link>
                        <figcaption className={"task-gym-leader-caption"}>Ra's, the Psychic Gym Leader</figcaption>
                    </figure>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure8"}}>
                        <Link to={"/poison"} target={"_blank"} rel={"noreferrer"}>
                            <img className={"task-gym-leader-image"} src={"shadow.png"} alt={"Poison Gym Leader ShadowOfApollo"}/>
                        </Link>
                        <figcaption className={"task-gym-leader-caption"}>ShadowOfApollo, the Poison Gym Leader</figcaption>
                    </figure>
                    <form className={"task-submit-form"} style={{"gridArea": "submit"}} method={"get"} target={"_blank"} rel={"noreferrer"} action={"https://docs.google.com/forms/d/e/1FAIpQLSe--LiE_b_8VnBo24ZKYtz0dWLv58_fpMCJpwgxTobMlw4v4A/viewform"}>
                        <button className={"task-submit-button"} >SUBMIT HERE</button>
                    </form>
                    <p className={"task-footer task-footer-left"}><br/><br/>Proudly created by Ravenclaw House.</p>
                </div>
            </div>
        );
    }
}

export default Task2Homepage;