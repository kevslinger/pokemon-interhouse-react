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
                        Me and my fire Pottamon are gonna set you ablaze on the dance floor (and maybe the dance floor
                        too while we're at it).
                        <br/><br/>
                        Fire is all about passion and this gym is all about sharing passion! The world is so full of
                        things, so many things that we’ll never get to experience ourselves so that’s why we gotta share
                        it with each other! So with all that said I have a burning question. Before we battle you have
                        to show me what gets the fire dancing behind your eyes! Tell me a hobby of yours so I can know
                        what my new friend does in their spare time. Actually, pitch it to me like a blazing fast ball
                        so I can join in on the fun! What is it? What do you like about it? How’d you start it? How
                        would I start it? You can draw, make a collage, hand me a pamphlet, make a Quibbladex entry,
                        whatever! Just show me something that you’re passionate about! Oh, and make sure there’s at
                        least one picture because everyone knows I have trouble reading with these glasses. While you’re
                        at it, can you submit two hobbies for me? That’s waaay hotter than just one!
                        <br/><br/>
                        But before that I need a dance partner! Oh, are you sweating already? Cause we’re just gettin’
                        started!
                    </p>
                </div>
            </div>
        );
    }
}

/*
Tell me a hobby of yours so I can know what my new friend does in their spare time. Actually, pitch it to me like a blazing fast ball so I can join in on the fun! What is it? What do you like about it? How’d you start it? How would I start it? You can draw, make a collage, hand me a pamphlet, make a Quibbladex entry, whatever! Just show me something that you’re passionate about! Oh, and make sure there’s at least one picture because everyone knows I have trouble reading with these glasses. While you’re at it, can you submit two hobbies for me? That’s waaay hotter than just one!

But before that I need a dance partner! Oh, are you sweating already? Cause we’re just gettin’ started!

 */

export default WaterGym;