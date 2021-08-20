import React from 'react'
import Project from '../Project';
import PasswordGenerator from '../../images/password.PNG';

export default function Portfolio() {
    return(
        <div className="container">
            <h1 className="text-center">My Projects</h1>
            <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
            <Project name={"Password Generator"} img={PasswordGenerator} github={"https://github.com/akoster15/password-generator.git"} liveapp={"https://akoster15.github.io/password-generator/"} description={"This app displays will create a random password..."}/>
            <Project name={"Password Generator"} img={PasswordGenerator} github={"https://github.com/akoster15/password-generator.git"} liveapp={"https://akoster15.github.io/password-generator/"} description={"This app displays will create a random password..."}/>
            <Project name={"Password Generator"} img={PasswordGenerator} github={"https://github.com/akoster15/password-generator.git"} liveapp={"https://akoster15.github.io/password-generator/"} description={"This app displays will create a random password..."}/>

            <Project name={"Password Generator"} img={PasswordGenerator} github={"https://github.com/akoster15/password-generator.git"} liveapp={"https://akoster15.github.io/password-generator/"} description={"This app displays will create a random password..."}/>
            <Project name={"Password Generator"} img={PasswordGenerator} github={"https://github.com/akoster15/password-generator.git"} liveapp={"https://akoster15.github.io/password-generator/"} description={"This app displays will create a random password..."}/>
            </div>
        </div>

    );
}