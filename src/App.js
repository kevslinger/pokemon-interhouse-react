import React from "react";
import { Route, Switch } from "react-router-dom";

import IntroHomepage from "./intro/introHomepage";
import IntroAnimation from "./intro/introAnimation";
import Task1Homepage from "./task1/task1Homepage";
import Task1Animation from "./task1/task1Animation";
import Task2Homepage from "./task2/task2Homepage";
import Task2Animation from "./task2/task2Animation";
import Task3Homepage from "./task3/task3Homepage";
import Task3Animation from "./task3/task3Animation";

import RockGym from "./task1/rock";
import WaterGym from "./task1/water";
import ElectricGym from "./task1/electric";
import GrassGym from "./task2/grass";
import PsychicGym from "./task2/psychic";
import PoisonGym from "./task2/poison";
import ZubatMaze from "./zubat-cave/game";
import FireGym from "./task3/fire";
import GroundGym from "./task3/ground";


function App() {
    return (
        <Switch>
            <Route exact path={"/"} component={IntroHomepage}/>
            <Route exact path={"/home"} component={IntroHomepage}/>
            <Route exact path={"/intro"} component={IntroAnimation}/>
            <Route exact path={"/part1"} component={Task1Homepage}/>
            <Route exact path={"/part2"} component={Task2Homepage}/>
            <Route exact path={"/part3"} component={Task3Homepage}/>
            <Route exact path={"/red1"}>
                <Task1Animation house={"Gryffindor"} time={"00:05:00"} badges={"0"} pottadex={"0"}/>
            </Route>
            <Route exact path={"/red2"}>
                <Task2Animation house={"Gryffindor"} time={"02:39:27"} badges={"3"} pottadex={"24"} pottamon={"lionmon"}/>
            </Route>
            <Route exact path={"/red3"}>
                <Task3Animation house={"Gryffindor"} time={"06:50:01"} badges={"6"} pottadex={"57"}/>
            </Route>
            <Route exact path={"/badger1"}>
                <Task1Animation house={"Hufflepuff"} time={"00:02:59"} badges={"0"} pottadex={"0"}/>
            </Route>
            <Route exact path={"/badger2"}>
                <Task2Animation house={"Hufflepuff"} time={"01:57:05"} badges={"3"} pottadex={"19"} pottamon={"badgermon"}/>
            </Route>
            <Route exact path={"/badger3"}>
                <Task3Animation house={"Hufflepuff"} time={"4:02:10"} badges={"6"} pottadex={"40"}/>
            </Route>
            <Route exact path={"/slytherin1"}>
                <Task1Animation house={"Slytherin"} time={"00:04:30"} badges={"0"} pottadex={"0"}/>
            </Route>
            <Route exact path={"/slytherin2"}>
                <Task2Animation house={"Slytherin"} time={"03:03:30"} badges={"3"} pottadex={"33"} pottamon={"snekmon"}/>
            </Route>
            <Route exact path={"/slytherin3"}>
                <Task3Animation house={"Slytherin"} time={"06:15:09"} badges={"6"} pottadex={"50"}/>
            </Route>
            <Route exact path={"/rock"} component={RockGym}/>
            <Route exact path={"/water"} component={WaterGym}/>
            <Route exact path={"/electric"} component={ElectricGym}/>
            <Route exact path={"/grass"} component={GrassGym}/>
            <Route exact path={"/psychic"} component={PsychicGym}/>
            <Route exact path={"/poison"} component={PoisonGym}/>
            <Route exact path={"/fire"} component={FireGym}/>
            <Route exact path={"/ground"} component={GroundGym}/>
            <Route exact path={"/snapebat"} component={ZubatMaze}/>
        </Switch>
    );
}


export default App;
