import React from "react";
import { Link } from "react-router-dom";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";

class Task3Homepage extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/home"} style={{"gridArea": "header"}}>
                        <h1 className={"task-pottamon-title"}>PoTTa&#8202;MoN</h1>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"professor_squash.png"}>
                            <img className={"task-gym-leader-image"} src={"professor_squash.png"} alt={"Professor Squash"}/>
                        </a>
                        <figcaption className={"task-gym-leader-caption"}>Hi, I'm Professor Squash!</figcaption>
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        Welcome back!
                        <br/><br/>
                        Only two gym badges remain unattained by your teams, you’ve come so far in such a short time!
                        I’m very proud of all we’ve accomplished together. Our research will soon be completed, and then
                        this whole magical world will be <strike>mine for the taking!</strike> a bit better understood.
                        Now then... the final gyms.
                        <br/><br/>
                        Head out east using Route 23 to get to Sencha Springs, a piping hot tourist destination with one
                        of the most renowned gyms of this region, the Fire gym. A little Pidgey told me its leader
                        actually <i>dances</i> on the fire, how intense! You'll need to be passionate if you want to
                        to take home the Exothermic badge.
                        <br/><br/>
                        And finally, way down south through the desert Route 25 takes you to the Tapu Fiti Oasis and
                        the Ground gym. It’s the only thing out in those wastes, and you certainly won’t miss it; it’ll
                        be the first spot of green you’ll see after all those miles of travel. I dunno why so many
                        people live out there in that little commune but the <strike>worshippers</strike> gym members
                        certainly seem happy, and the gym leader is very welcoming indeed.
                        Good luck with her challenge, and with returning here afterwards!
                        <br/><br/>
                        The end of your goal is within your grasp! Representatives, please get back here and let me know
                        how your team did by October 25 at 11:59pm EDT.
                    </p>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure4"}}>
                        <Link to={"/fire"}>
                            <img className={"task-gym-leader-image"} src={"dancing.png"} alt={"Fire Gym Leader Dancing"}/>
                        </Link>
                        <figcaption className={"task-gym-leader-caption"}>Dancing, the Fire Gym Leader</figcaption>
                    </figure>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure5"}}>
                        <Link to={"/ground"}>
                            <img className={"task-gym-leader-image"} src={"mlap.png"} alt={"Psychic Gym Leader Mlap"}/>
                        </Link>
                        <figcaption className={"task-gym-leader-caption"}>Mlap, the Ground Gym Leader</figcaption>
                    </figure>
                    <form className={"task-submit-form"} style={{"gridArea": "submit"}} method={"get"} target={"_blank"} rel={"noreferrer"} action={"https://docs.google.com/forms/d/e/1FAIpQLSfc3AviP1O4XSK4PxgiL3NDb670gaXTZAs6QGtzVDiYGITtUg/viewform?usp=sf_link"}>
                        <button className={"task-submit-button"} >SUBMIT HERE</button>
                    </form>
                    <p className={"task-footer task-footer-right"}>Proudly created by Ravenclaw House.</p>
                </div>
            </div>
        );
    }
}

export default Task3Homepage;