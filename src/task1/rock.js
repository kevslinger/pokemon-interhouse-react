import React from "react";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";


class RockGym extends React.Component {
    render() {
        return (
            <div style={{"backgroundColor": "#D1C17D"}}>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/home"} className={"task-pottamon-logo"}>
                        <img className={"task-pottamon-logo"} src={"pottamon_text_title.png"} alt={"Pottamon!"}/>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"mj.png"}>
                            <img className={"task-gym-leader-image"} src={"mj.png"} alt={"Mjenious, the Rock Gym Leader"}/>
                        </a>
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        Y’all ready to rock and roll? Hey! I’m the stone-faced gym leader MJ, and I hope y’all are
                        ready for your first challenge! <i>takes a clean bite out of a pome-
                        <strong>granite</strong></i> Took your sweet time getting here, Professor Squash said I should
                        have expected you days ago, you had me quarried sick. Well anyways, back to the script, to be
                        the Pottamon champion you need to remember to always keep your <i>coal</i> and work hard to climb
                        yourself up from rock bottom. But before you can be the champion you’ll need to finish my challenge.
                        <br/><br/>
                        To beat me and earn the Mineral Badge, I’m asking you to design your own Pottamon! Every
                        Pottamon has a name, a drawing, one or two Pokemon types, a species, and a Pottadex description
                        of no more than two sentences. Stuck or need some inspiration? Check out
                        our <Link to={"/home"}>homepage</Link> for some example Pottamon Team Ravenclaw has been researching.
                        <br/><br/>
                        Pottamon are not only our battle and training partners, they’re also our friends. So make sure
                        you come up with a good one! You can’t be a Pottamon master till you’ve got a Pottamon of your
                        own. Duh!
                    </p>
                </div>
            </div>
        );
    }
}

export default RockGym;