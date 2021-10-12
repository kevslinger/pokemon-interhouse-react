import React from "react";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";


class WaterGym extends React.Component {
    render() {
        return (
            <div style={{"backgroundColor": "#A7DB8D"}}>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/home"} className={"task-pottamon-logo"}>
                        <img className={"task-pottamon-logo"} src={"pottamon_text_title.png"} alt={"Pottamon!"}/>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"spludgiexx.png"}>
                            <img className={"task-gym-leader-image"} src={"spludgiexx.png"} alt={"Spludgie, the Water Gym Leader"}/>
                        </a>
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        Pssst. Hey, hey you. Psssssssst. I’m looking for some really good tea leaves? Have any good
                        recommendations? Er, you’re here for a badge? Well then.
                        <br/><br/>
                        I’m Spludgie - and I specialize in grass type Pottamon! My dream is to open up the best tea shop
                        in the Clawla region with the help of my leafy grass type companions.
                        <br/><br/>
                        Oh, right, the gym challenge. To beat me and earn the Poaceae Badge, I would like you to go
                        outside on a nature walk. Find me 3 cool grass type Pottamon and share your notes about what you see.
                        These can be plants or animals that you find on this walk. Be sure to include a photo of your
                        Pottamon, its name, describe/illustrate its habitat, any cool distinguishing markings, its
                        favorite kind of tea, and any special moves it might have! And if you happen to find tea leaves
                        on your nature walk... you know where to find me.
                    </p>
                    <p className={"task-intro-p-text"} style={{"gridArea": "meta"}}>
                        <strong>Meta</strong>
                        <br/>
                        Your task for this gym is to show me 3 cool grass type Pottamon on your nature walk. These
                        Pottamon can be plants or animals. You will need to include a photo of your Pottamon, its name,
                        describe and/or illustrate its habitat, any cool distinguishing markings it may have, its
                        favorite kind of tea, and any special moves! You may include anything else that you think I
                        would love to know! All artwork must be original content and created for this assignment.
                        <br/><br/>
                        This gym task is due by <a href={"https://www.timeanddate.com/countdown/generic?p0=179&iso=20211018T115959&year=2021&month=10&day=18&hour=11&min=59&sec=59&msg=Gotta%20Catch%20%27Em%20All%3a%20Challenge%20%232%20Countdown"} target={"_blank"} rel={"noreferrer"}>October 18, 11:59pm EDT</a>.
                    </p>
                    <form className={"task-submit-form"} style={{"gridArea": "submit"}} method={"get"} target={"_blank"} rel={"noreferrer"} action={"https://docs.google.com/forms/d/e/1FAIpQLSe--LiE_b_8VnBo24ZKYtz0dWLv58_fpMCJpwgxTobMlw4v4A/viewform"}>
                        <button className={"task-submit-button"} >SUBMIT HERE</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default WaterGym;