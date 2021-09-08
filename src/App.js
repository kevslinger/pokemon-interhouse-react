import React from "react";
import Homepage from "./homepage/main";
import Part0 from "./part0/part0";
import Part1 from "./part1/part1";
import ZubatMaze from "./zubat-cave/game";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route exact path={"/"} component={Homepage}></Route>
            <Route exact path={"/intro"} component={Part0}></Route>
            <Route exact path={"/gryffindorpart1"}>
                <Part1 house={"Gryffindor"} time={"2:25:00"} badges={"3"} pottadex={"5"}/>
            </Route>
            <Route exact path={"/hufflepuffpart1"}>
                <Part1 house={"Hufflepuff"} time={"5:30:59"} badges={"3"} pottadex={"15"}/>
            </Route>
            <Route exact path={"/slytherinpart1"}>
                <Part1 house={"Slytherin"} time={"7:34:20"} badges={"3"} pottadex={"32"}/>
            </Route>
            <Route exact path={"/zubat"} component={ZubatMaze}/>

        </Switch>
    );
}


export default App;
