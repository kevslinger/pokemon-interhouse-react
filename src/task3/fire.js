import React from "react";
import { Link } from "react-router-dom";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";


class WaterGym extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/"} className={"task-pottamon-title"}>
                        <h1 className={"task-pottamon-title"}>PoTTa&#8202;MoN</h1>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"dancing.png"} target={"_blank"} rel={"noreferrer"}>
                            <img className={"task-gym-leader-image"} src={"dancing.png"} alt={"Dancing, the Fire Gym Leader"}/>
                        </a>
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        HEYA FRIEND! Huh? We just met? Then that just means we're new friends! Partners even!
                        So since you’re here that means you’ve come for the Exothermic badge huh? Well don’t get too
                        cocky, cause I’m here to put your feet to the fire! I’m Dancing and I specialize in just that!
                        Me and my fire Pottamon are gonna set you ablaze on the dance floor.
                        <br/><br/>
                        Fire is all about passion and this gym is all about sharing passion! The world is so full of
                        things, so many things that we’ll never get to experience ourselves so that’s why we gotta share
                        it with each other! So with all that said I have a burning question. Before we battle you have
                        to show me what gets the fire dancing behind your eyes! You can write, draw, take a video,
                        whatever! Just show me something that you’re passionate about.
                        <br/><br/>
                        But before that I need a dance partner! Oh, are you sweating already? Cause we’re just gettin’
                        started!
                    </p>
                </div>
            </div>
        );
    }
}

export default WaterGym;