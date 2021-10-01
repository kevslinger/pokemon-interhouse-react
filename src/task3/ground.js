import React from "react";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";


class GroundGym extends React.Component {
    render() {
        return (
            <div style={{"backgroundColor": "#EBD69D"}}>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/home"} className={"task-pottamon-logo"}>
                        <img className={"task-pottamon-logo"} src={"pottamon_text_title.png"} alt={"Pottamon!"}/>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"mlap.png"}>
                            <img className={"task-gym-leader-image"} src={"mlap.png"} alt={"Mlap, the Ground Gym Leader"}/>
                        </a>
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        Forgive me, I didn't see you there! I was just reading
                        the <a href={"https://www.reddit.com/r/TheQuibbler"} target={"_blank"} rel={"noreferrer"}>Quibbladex</a>. <i>Ahem</i>,
                        now back to business, Welcome to my Gym!! I'm sure you know who I am- er, you don't? How very
                        insulting. I am Mlap, Goddess of Resurrection, and Master of These Lands. I see that you've
                        gotten all the other 7 badges, it's quite impressive. But can you defeat me? Well, we'll find
                        out soon enough.
                        <br/><br/>
                        Once upon a time, Tapu Fiti Oasis was not such a desert, but was home to one of the biggest
                        forests in the world. But alas, some travelers invaded the land and destroyed everything. They
                        left in search of new lands soon after, and I stayed here, trying desperately to restore the
                        forest to its former glory. It took me 300 years to grow all the plants seen around you, and
                        they still aren't nearly enough. Your challenge, should you choose to accept it, is to plant
                        something with the help of your pottamons!! But beware, the land is very stubborn. You must
                        prove yourself to them in order to be worthy. Or you could just accept the holy ground as your
                        lord and saviour, and sign this contract right here. Give in and join us!
                        <br/><br/>
                        You can either plant seeds or you could use a repotted plant. You must share a picture and
                        let us know what you've planted. I wish
                        you the best of luck!! Oh, these glasses? My good friend, <Link to={"/water"}>Eldis</Link> gave them to me!! Aren't they
                        gorgeous?
                    </p>
                    <form className={"task-submit-form"} style={{"gridArea": "submit"}} method={"get"} target={"_blank"} rel={"noreferrer"} action={"https://docs.google.com/forms/d/e/1FAIpQLSfc3AviP1O4XSK4PxgiL3NDb670gaXTZAs6QGtzVDiYGITtUg/viewform?usp=sf_link"}>
                        <button className={"task-submit-button"} >SUBMIT HERE</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default GroundGym;