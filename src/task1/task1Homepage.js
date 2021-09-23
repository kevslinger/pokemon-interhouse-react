import React from "react";
import "./task1Homepage.css";
import Navbar from "../navbar/navbar";


class Task1Homepage extends React.Component {
    render() {
        return (
          <div>
              <Navbar/>
              <div style={{"position": "relative"}} className={"task1-container"}>
                <h1 className={"task1-pottamon-title"}>PoTTa&#8202;MoN</h1>
                  <figure className={"task1-gym-leader-figure"} style={{"gridArea": "professor"}}>
                      <img className={"task1-gym-leader-image"} src={"professor_squash.png"} alt={"Professor Squash"}/>
                    <figcaption className={"task1-gym-leader-caption"}>Hi, I'm Professor Squash!</figcaption>
                </figure>
                  <p className={"task1-intro-p-text"} style={{"gridArea": "text"}}>
                      Welcome, intrepid explorers, to the first steps of your Pottamon journey! Let’s get you started on
                      your path to becoming the next Pottamon Master.
                      <br/><br/>
                      ...oh? You don’t know where to go? Well, er, I suppose I could give you a map? No? You would prefer
                      some links to your destinations? Okay, sounds weird but if that’s what you’d like…. (kids these
                      days don’t know how to appreciate the novelty in doing things themselves). Ahem, excuse me. The
                      closest gyms to us would be of the Rock, Water, and Electric varieties. If you head up Rt 11
                      you’ll hit the Rock gym in no time! The gym leader, MJ, has a fortitude tougher than diamonds.
                      You’ll need to be bold if you want to defeat her! If you decide to face the Water gym, you’ll
                      need only to go down Rt 13. But be warned, she tends to speak exclusively in dad jokes. I hear
                      her favorite show is dancing with the staryus….. And if you dare, you might chance challenging
                      the electric gym leader off of Rt 15. Rumor has it that the gym leader keeps a pack of electric
                      alpacamons...best to be careful, I’ve read that petting their fur is enough to give you quite the
                      static shock!

                  </p>
                <figure className={"task1-gym-leader-figure"} style={{"gridArea": "leader1"}}>
                    <img className={"task1-gym-leader-image"} src={"mjenious.png"} alt={"Rock Gym Leader Mjenious"}/>
                    <figcaption className={"task1-gym-leader-caption"}>Mjenious, the Rock Gym Leader</figcaption>
                </figure>
                <figure className={"task1-gym-leader-figure"} style={{"gridArea": "leader2"}}>
                    <img className={"task1-gym-leader-image"} src={"eldis.png"} alt={"Water Gym Leader Eldis"}/>
                    <figcaption className={"task1-gym-leader-caption"}>Eldis, the Water Gym Leader</figcaption>
                </figure>
                <figure className={"task1-gym-leader-figure"} style={{"gridArea": "leader3"}}>
                    <img className={"task1-gym-leader-image"} src={"xancanstand.png"} alt={"Electric Gym Leader XanCanStand"}/>
                    <figcaption className={"task1-gym-leader-caption"}>XanCanStand, the Electric Gym Leader</figcaption>
                </figure>
                <p className={"task1-footer"}>Proudly created by Ravenclaw House.</p>
              </div>
          </div>
        );
    }
}

export default Task1Homepage;