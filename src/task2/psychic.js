import React from "react";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";


class PsychicGym extends React.Component {
    render() {
        return (
            <div style={{"backgroundColor": "#FA92B2"}}>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/home"} className={"task-pottamon-logo"}>
                        <img className={"task-pottamon-logo"} src={"pottamon_text_title.png"} alt={"Pottamon!"}/>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"ra.png"}>
                            <img className={"task-gym-leader-image"} src={"ra.png"} alt={"Ra's, the Psychic Gym Leader"}/>
                        </a>
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        They say you can learn a lot about someone by their humor... SHOW ME YOURS!!!!
                        <br/><br/>
                        This gym contest is one of mental exercises to show me the creativity and wit you have by coming
                        up with the joke to get me STOKED. The goal? Come up with three original jokes
                        or <i>checks notes</i> memes, and the audience will decide if they are up to snuff. These must be your
                        own jokes or memes, no fakes or frauds allowed on the standup stage!
                        <br/><br/>
                        The first joke must be Harry Potter related, the second related specifically to your house!
                        The final ha ha can be about whatever you want. Then it's up to the audience to decide which of
                        you challengers had the heartiest haha the chuckle of champions!! Don’t laugh this off, it's
                        time for our BATTLE!
                    </p>
                    <p className={"task-intro-p-text"} style={{"gridArea": "meta"}}>
                        <strong>Meta</strong>
                        <br/>
                        This task is a joke contest. Each team will submit three jokes; the first must be related to
                        Harry Potter, the second related to your house, and the three can be about whatever you want.
                        All posts must follow r/harrypotter rules and be SFW. You may use whatever resources you want,
                        including meme formats/templates. Any joke that can be easily found via google search will be
                        disqualified.
                        <br/><br/>
                        This gym task is due by <a href={"https://www.timeanddate.com/countdown/generic?p0=179&iso=20211018T115959&year=2021&month=10&day=18&hour=11&min=59&sec=59&msg=Gotta%20Catch%20%27Em%20All%3a%20Challenge%20%232%20Countdown"} target={"_blank"} rel={"noreferrer"}>October 18, 11:59pm EDT</a>.
                    </p>
                    <form className={"task-submit-form"} style={{"gridArea": "submit"}} method={"get"} target={"_blank"} rel={"noreferrer"} action={"https://docs.google.com/forms/d/e/1FAIpQLSe--LiE_b_8VnBo24ZKYtz0dWLv58_fpMCJpwgxTobMlw4v4A/viewform"}>
                        <button className={"task-submit-button"} >SUBMIT HERE</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PsychicGym;