import React from 'react'
import Res from '../../images/resume.PNG'

export default function Resume() {
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="row">
                    <h1 className="text-center">Resume</h1>
                        <img className="img-responsive img-fluid" src={Res} alt="resumeIMG" width="10%" height="10%"
                    >
                    </img>
        </div>
        </div>
        </div>

    );
}