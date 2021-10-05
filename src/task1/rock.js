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
                    <p className={"task-intro-p-text"} style={{"gridArea": "meta"}}>
                        <strong>Meta</strong>
                        <br/>
                        This task is to design your own pottamon. Your submission should include the image of your
                        pottamon, its name, its Pokémon type(s) (one or two), a species, and a description of up to two
                        sentences. Extensive Pokémon knowledge is <i>not</i> required for this task, and we will not be
                        grading based on how closely your Pottamon relates to a Pokémon.
                        <br/><br/>
                        This gym task is due by <a href={"https://www.timeanddate.com/countdown/generic?iso=20211011T235959&p0=179&msg=Gotta+Catch+%27Em+All%3A+Challenge+%231+Countdown&font=cursive"} target={"_blank"} rel={"noreferrer"}>October 11, 11:59pm EDT</a>.
                    </p>
                    <form className={"task-submit-form"} style={{"gridArea": "submit"}} method={"get"} target={"_blank"} rel={"noreferrer"} action={"https://docs.google.com/forms/d/e/1FAIpQLSeNqBgtBiczLutFa7Zd-KYPT3ATplKxD4scLlPoR2pjDK5kkw/viewform?usp=sf_link"}>
                        <button className={"task-submit-button"}>SUBMIT HERE</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RockGym;