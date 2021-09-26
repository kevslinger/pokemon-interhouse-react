import React from "react";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";


class RockGym extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/"} className={"task-pottamon-title"}>
                        <h1 className={"task-pottamon-title"}>PoTTa&#8202;MoN</h1>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"mj.png"} target={"_blank"} rel={"noreferrer"}>
                            <img className={"task-gym-leader-image"} src={"mj.png"} alt={"Mjenious, the Rock Gym Leader"}/>
                        </a>
                        {/*<figcaption className={"task-gym-leader-caption"}>Hi, I'm Eldis!</figcaption>*/}
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>

                    </p>
                </div>
            </div>
        );
    }
}

export default RockGym;