import React from "react";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";


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
                        <a href={"eldis.png"}>
                            <img className={"task-gym-leader-image"} src={"eldis.png"} alt={"Eldis, the Water Gym Leader"}/>
                        </a>
                        {/*<figcaption className={"task-gym-leader-caption"}>Hi, I'm Eldis!</figcaption>*/}
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        Ahoy, mateys, nice to make your <i>aqua</i>intance! Welcome to Seafare Port, where the wind is
                        salty, the streets <i>tide</i>y, the views are <i>sea</i>nic, and the - but you already knew all
                        that, if you read the <a href={"https://www.reddit.com/r/TheQuibbler"} target={"_blank"} rel={"noreferrer"}>Quibbladex</a>!
                        <br/><br/>
                        <i>gasp</i> You haven’t? How dare you approach me with such insolence! You’re in deep water now,
                        kid, because I’m going to kick up a storm. Want to prove you’re not as shallow as you seem?
                        Well then, accept my challenge!
                        <br/><br/>
                        Water is the most changeable element out there. It can take any shape it wants. Even when
                        manipulated by magic, water is a trickly thing! Because of this, water Pottamon really enjoy it
                        when you make other things flow too. Like words! So to get yourself out of this hot water you’ve
                        gotten yourself into, write me a poem!
                        <br/><br/>
                        Whether you want to write a haiku, a Petrarchan or Shakespearean sonnet, an acrostic poem, a
                        ballad, a limerick, a Villanelle or go for free or blank verse and make up your own rules along
                        the way, let those words inside of you flow! Be playful and creative, use it to calm the storm
                        inside of you or make some waves!
                        <br/><br/>
                        So, are you going to give it a try? Your poem has to be creative, original and be recognisable
                        as a poem. You can type it out here, upload a picture of it written or typed out if you want it
                        to be formatted a certain way (concrete poetry) or even link a video if you want to read it out!
                        <br/><br/>
                        Now, it’s time to jump in and accept my challenge!
                    </p>
                </div>
            </div>
        );
    }
}

export default WaterGym;