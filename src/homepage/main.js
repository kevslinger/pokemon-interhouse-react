import React from "react";
import "./main.css";
import Navbar from "./navbar";


class Homepage extends React.Component {
    render() {
        return (
          <div>
              <Navbar/>
              <div style={{"position": "relative"}} className={"container"}>
                <h1 style={{"color": "black",
                    "fontFamily": "Pokemon Solid, sans-serif",
                    "fontSize": "64px",
                    "textAlign": "center",
                    "gridArea": "header"}}>PoTTaMoN</h1>
                  <figure className={"pottamon-figure"} style={{"gridArea": "professor"}}>
                      <img className={"pottamon-image"} src={"avatar2.png"} alt={"Professor Squash"}/>
                    <figcaption>Hi, I'm Professor Squash!</figcaption>
                </figure>
                  <p className={"intro-p-text"} style={{"gridArea": "text"}}>
                    Welcome to the world of Pottamon! My name's Squash, and I'm a Pottamon Professor for Team Ravenclaw.
                    <br/><br/>
                    In an effort to accelerate our Pottamon research, Team Ravenclaw is hosting a challenge for our neighboring research teams to compete in.
                    Throughout the month, you'll be exploring our home, the Clawla region, meeting new people, and challenging experienced gym leaders to
                      learn more about the mysteries behind the Pottamon and their elements.
                    <br/><br/>
                      But before we begin, let me introduce you to some of the Pottamon you'll be seeing as you venture out into our world.
                      The Clawla region is famous for its abundance of <strong>Flying</strong> type Pottamon, like this Mlappogriff.
                      <br/><br/>
                      While we've focused most of our research on Pottamon in the skies, there are still hundreds of Pottamon yet to be discovered all throughout the region!
                      That's why we need your help to uncover the mysteries of the Pottamon of different elements.
                      For this month, Team Ravenclaw's Research Challenge will involve Pottamon with the Rock, Water, Electric, Grass, Psychic, Poison, Fire, and Ground types.
                      The 8 cities you'll travel to will each have a local expert in one type, called a gym leader.
                      Your job is to meet the gym leader, learn about their Pottamon, and challenge them to a gym battle!
                      If you defeat them, you'll earn a Pottamon badge. So the goal for this month is for your team to earn all 8 possible badges!
                </p>
                <figure className={"pottamon-figure"} style={{"gridArea": "pottamon1"}}>
                    <img className={"pottamon-image"} src={"mlappogriff.png"} alt={"Mlappogriff"}/>
                    <figcaption>Mlappogriff. Flying/Water. The Mlap Pottamon.<br/><i>Sightings of the Mlappogriff have been known to cause spontaneous cult formation.</i></figcaption>
                </figure>
                <figure className={"pottamon-figure"} style={{"gridArea": "pottamon2"}}>
                    <img className={"pottamon-image"} src={"fledgetrail.png"} alt={"Fledgetrail"}/>
                    <figcaption>Fledgetrail. Dark/Flying. Undead Horse Pottamon. <br/><i>The Fledgetrail is one of the rarer Pottamon in the Clawla region.
                        Legend says only researchers who have seen death are able to spot it.</i></figcaption>
                </figure>
                <figure className={"pottamon-figure"} style={{"gridArea": "pottamon3"}}>
                    <img className={"pottamon-image"} src={"infernawks.png"} alt={"Infernawks"}/>
                    <figcaption>Infernawks. Flying/Fire. Phoenix Pottamon. <br/><i>Making their nests near and around volcanos, baby Infernawks dip their tails in lava to gain power.</i></figcaption>
                </figure>
                <figure className={"pottamon-figure"} style={{"gridArea": "pottamon4"}}>
                    <img className={"pottamon-image"} src={"wyverni.png"} alt={"Wyverni"}/>
                    <figcaption>Wyverni. Dragon/Water. Water Serpent Pottamon.<br/><i>The Wyverni mainly presides near the bottom of dark lakes. Rarely coming up to breathe, it is a prized possession of any Pottamon fisher.</i></figcaption>
                </figure>
                <figure className={"pottamon-figure"} style={{"gridArea": "pottamon5"}}>
                    <img className={"pottamon-image"} src={"wydraig.png"} alt={"Wydraig"}/>
                    <figcaption>Wydraig. Poison/Dragon. idk Squash probably has something for me here.</figcaption>
                </figure>
                <figure className={"pottamon-figure"} style={{"gridArea": "pottamon6"}}>
                    <img className={"pottamon-image"} src={"aileroink.png"} alt={"Aileroink"}/>
                    <figcaption>Aileroink. Ground/Normal???</figcaption>
                </figure>
                <p style={{"gridArea": "footer", "fontSize": "14px"}}>Proudly created by Ravenclaw House.</p>
              </div>
          </div>
        );
    }
}

export default Homepage;