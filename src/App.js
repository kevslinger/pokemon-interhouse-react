import React from "react";
import IntroHomepage from "./intro/introHomepage";
import IntroAnimation from "./intro/introAnimation";
import Task1Homepage from "./task1/task1Homepage";
import Task1Animation from "./task1/task1Animation";
import ZubatMaze from "./zubat-cave/game";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route exact path={"/"} component={IntroHomepage}/>
            <Route exact path={"/intro"} component={IntroAnimation}/>
            <Route exact path={"/part1"} component={Task1Homepage}/>
            <Route exact path={"/gryffindorpart1"}>
                <Task1Animation house={"Gryffindor"} time={"00:05:00"} badges={"0"} pottadex={"0"}/>
            </Route>
            <Route exact path={"/hufflepuffpart1"}>
                <Task1Animation house={"Hufflepuff"} time={"00:02:59"} badges={"0"} pottadex={"0"}/>
            </Route>
            <Route exact path={"/slytherinpart1"}>
                <Task1Animation house={"Slytherin"} time={"00:04:30"} badges={"0"} pottadex={"0"}/>
            </Route>
            <Route exact path={"/snapebat"} component={ZubatMaze}/>
        </Switch>
    );
}


export default App;
