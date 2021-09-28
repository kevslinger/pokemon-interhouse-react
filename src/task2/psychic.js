import React from "react";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";


class PsychicGym extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/"} className={"task-pottamon-title"}>
                        <h1 className={"task-pottamon-title"}>PoTTa&#8202;MoN</h1>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"ra.png"}>
                            <img className={"task-gym-leader-image"} src={"ra.png"} alt={"Ra's, the Psychic Gym Leader"}/>
                        </a>
                        {/*<figcaption className={"task-gym-leader-caption"}>Hi, I'm Eldis!</figcaption>*/}
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        They say you can learn a lot about someone by their humor... SHOW ME YOURS!!!!
                        <br/><br/>
                        This gym contest is one of mental exercises to show me the creativity and wit you have by coming
                        up with the joke to get me STOKED. The goal? Come up with three original jokes
                        or <i>checks notes</i> memes, and the audience will decide if they are up to snuff. These must be your
                        own jokes or memes, no fakes or frauds allowed on the standup stage*!
                        <br/><br/>
                        The first joke must be Harry Potter related, the second related specifically to your house!
                        The final ha ha can be about whatever you want. Then it's up to the audience to decide which of
                        you challengers had the heartiest haha the chuckle of champions!! Don’t laugh this off, it's
                        time for our BATTLE!

                    </p>
                    <p className={"task-intro-p-text"} style={{"gridArea": "submit"}}>
                        *: Jokes searchable via google search will be disqualified
                    </p>
                </div>
            </div>
        );
    }
}

export default PsychicGym;