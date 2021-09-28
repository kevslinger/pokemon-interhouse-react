import React from "react";
import "./introHomepage.css";
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";


class IntroHomepage extends React.Component {
    render() {
        return (
          <div>
              <Navbar/>
              <div style={{"position": "relative"}} className={"home-container"}>
                  <Link to={"/home"} className={"home-pottamon-title"}>
                      <h1 className={"home-pottamon-title"}>PoTTa&#8202;MoN</h1>
                  </Link>
                {/*<h1 className={"home-pottamon-title"}>PoTTa&#8202;MoN</h1>*/}
                  <figure className={"home-pottamon-figure"} style={{"gridArea": "professor"}}>
                      <a href={"professor_squash.png"}>
                        <img className={"home-pottamon-image"} src={"professor_squash.png"} alt={"Professor Squash"}/>
                      </a>
                    <figcaption className={"home-pottamon-caption"}>Hi, I'm Professor Squash!</figcaption>
                </figure>
                  <p className={"home-intro-p-text"} style={{"gridArea": "text"}}>
                    Hello there! Welcome to the world of Pottamon! My name is Squash, but people call me the
                      Pottamon Professor.
                    <br/><br/>
                    As you know, our world is inhabited by magical little creatures called Pottamon. Look at all the
                      Pottamon we've been researching over the years!
                    <br/><br/>
                    Some people keep them as pets, others use them for battles. Team Ravenclaw studies Pottamon to learn
                      more about them and their natural habitat!
                    <br/><br/>
                    Recently, Team Ravenclaw and I have been focusing our studies on the different element types
                      Pottamon can have. We believe the secret in these adorable creatures and their powers lies in
                      their connection to the different elements that make up this world!
                    <br/><br/>
                    What? No, not Hydrogen and Helium, then Lithium, Beryllium, but the Pottamon elements. Rock, Water,
                      and Electric, for example.
                    <br/><br/>
                    Oh, you already knew this? And you’re already part of a team? That’s marvellous! I’d love to speak
                      with your team representatives, and hear their research from them!
                    <br/><br/>
                    What’s that? You don’t have a representative yet? Well, could you perhaps choose two, and tell me
                      about them before October 4th, 11:59pm EDT so we can get this journey started?
                    <br/><br/>
                    Get ready, your very own Pottamon legend is about to unfold! A world of dreams and adventures with
                      Pottamon awaits! Let’s go!
                  </p>
                <figure className={"home-pottamon-figure"} style={{"gridArea": "pottamon1"}}>
                    <a href={"mlappogriff.png"}>
                        <img className={"home-pottamon-image"} src={"mlappogriff.png"} alt={"Mlappogriff"}/>
                    </a>
                    <figcaption className={"home-pottamon-caption"}>Mlappogriff. Flying/Water. The Mlap Pottamon.<br/><i>Sightings of the Mlappogriff have been known to cause spontaneous cult formation.</i></figcaption>
                </figure>
                <figure className={"home-pottamon-figure"} style={{"gridArea": "pottamon2"}}>
                    <a href={"fledgetrail.png"}>
                        <img className={"home-pottamon-image"} src={"fledgetrail.png"} alt={"Fledgetrail"}/>
                    </a>
                    <figcaption className={"home-pottamon-caption"}>Fledgetrail. Ghost/Ground. Undead Horse Pottamon.<br/><i>Rumor has it that only those that have seen death can see a Fledgetrail.</i></figcaption>
                </figure>
                <figure className={"home-pottamon-figure"} style={{"gridArea": "pottamon3"}}>
                    <a href={"infernawks.png"}>
                        <img className={"home-pottamon-image"} src={"infernawks.png"} alt={"Infernawks"}/>
                    </a>
                    <figcaption className={"home-pottamon-caption"}>Infernawks. Fire/Flying. Phoenix Pottamon.<br/><i>Tears from an Infernawks are known for their healing properties.</i></figcaption>
                </figure>
                <figure className={"home-pottamon-figure"} style={{"gridArea": "pottamon4"}}>
                    <a href={"wyverni.png"}>
                        <img className={"home-pottamon-image"} src={"wyverni.png"} alt={"Wyverni"}/>
                    </a>
                    <figcaption className={"home-pottamon-caption"}>Wyverni. Fairy/Dark. The Dreameater Pottamon.<br/><i>Wyverni like to enter children's dreams and eat their nightmares.</i></figcaption>
                </figure>
                <figure className={"home-pottamon-figure"} style={{"gridArea": "pottamon5"}}>
                    <a href={"toxadraig.png"}>
                        <img className={"home-pottamon-image"} src={"toxadraig.png"} alt={"Toxadraig"}/>
                    </a>
                    <figcaption className={"home-pottamon-caption"}>Toxadraig. Poison/Dragon.<br/><i>Fond of music, Toxadraig come slithering out of their caves upon hearing a delightful tune.</i></figcaption>
                </figure>
                <figure className={"home-pottamon-figure"} style={{"gridArea": "pottamon6"}}>
                    <a href={"aileroink.png"}>
                        <img className={"home-pottamon-image"} src={"aileroink.png"} alt={"Aileroink"}/>
                    </a>
                    <figcaption className={"home-pottamon-caption"}>Aileroink. Dark/Electric. <i>Aileroink can track scents from miles away. It usually uses this skill to find gourmet food.</i></figcaption>
                </figure>
                <p className={"home-footer"}><br/>Proudly created by Ravenclaw House.</p>
              </div>
          </div>
        );
    }
}

export default IntroHomepage;