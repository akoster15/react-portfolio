import React from 'react'
import Project from '../Project';
import PasswordGenerator from '../../images/password.PNG';
import Planner from '../../images/planner.PNG';
import Weather from '../../images/weather.PNG';

export default function Portfolio() {
    return(
        <div className="container">
            <h1 className="text-center">My Projects</h1>
            <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
            <Project name={"Password Generator"} img={PasswordGenerator} github={"https://github.com/akoster15/password-generator.git"} liveapp={"https://akoster15.github.io/password-generator/"} description={"This app displays will create a random password..."}/>
            <Project name={"Work Day Scheduler"} img={Planner} github={"https://github.com/akoster15/work-day-scheduler.git"} liveapp={"https://akoster15.github.io/work-day-scheduler/"} description={"This app lets a user creat a schedule for work..."}/>
            <Project name={"Weather Dashboard"} img={Weather} github={"https://github.com/akoster15/password-generator.git"} liveapp={"https://akoster15.github.io/password-generator/"} description={"This app displays the weather for a specific city..."}/>

            <Project name={"Password Generator"} img={PasswordGenerator} github={"https://github.com/akoster15/password-generator.git"} liveapp={"https://akoster15.github.io/password-generator/"} description={"This app displays will create a random password..."}/>
            <Project name={"Password Generator"} img={PasswordGenerator} github={"https://github.com/akoster15/password-generator.git"} liveapp={"https://akoster15.github.io/password-generator/"} description={"This app displays will create a random password..."}/>
            </div>
        </div>

    );
}