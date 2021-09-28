import React from "react";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";


class ElectricGym extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/"} className={"task-pottamon-title"}>
                        <h1 className={"task-pottamon-title"}>PoTTa&#8202;MoN</h1>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"xancanstand.png"}>
                            <img className={"task-gym-leader-image"} src={"xancanstand.png"} alt={"Xan, the Electric Gym Leader"}/>
                        </a>
                        {/*<figcaption className={"task-gym-leader-caption"}>Hi, I'm Eldis!</figcaption>*/}
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        &#9889;MWAHAHAHA!&#9889; Welcome to the toughest gym yet! This challenge will wipe the floors
                        with you! ECCLETRIXITY! The Type all witches and wizards are weak against!
                        <br/><br/>
                        How does it work? Your only hope is to interview any muggleborns you may have in your class.
                        We’re all familiar with the way most magical folk are oblivious to muggle technology. For this
                        challenge, we want to hear from witches and wizards who spent their first 11 years in the modern
                        muggle world during this digital age. We want to know, from their perspective, about all the
                        things in the Wizarding world that have helped them acclimate and adjust to being unplugged.
                        What spells, potions, and arcane artifacts have taken the place of their phones and tablets
                        and internet (and light bulbs and refrigerators and A/C and cars and . . .)?
                        <br/><br/>
                        I’ll need an interview from one or more of these students, with four total examples for specific
                        magical substitutions of their muggle world technologies, and photos, drawings or digital art
                        are encouraged. Each magical substitution should touch on what it is, how it fills the gap left
                        by an absent technology, and why the student needed this substitution or how they feel about its
                        replacement while living at Hogwarts.
                        <br/><br/>
                        Now! Get amped! It’s challenge time!
                    </p>
                </div>
            </div>
        );
    }
}

export default ElectricGym;