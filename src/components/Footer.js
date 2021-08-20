import React from 'react'

export default function Footer() {
    return(
        <footer>
        <div className="main-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">

                    <div className="col-md-3 mx-auto">
                        <ul className="list-unstyled">
                        <li><a href="https://github.com/akoster15"target="blank"><i class="links"></i>GitHub</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mx-auto">
                        <ul className="list-unstyled">
                        <li><a href="https://www.linkedin.com/in/andrew-n-koster/"target="blank"><i class="links"></i>LinkedIn</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mx-auto">
                        <ul className="list-unstyled">
                        <li><a href="https://twitter.com/AKoster15"target="blank"><i class="links"></i>Twitter</a>
                        </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
        </footer>
    );
}