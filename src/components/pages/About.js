import React from 'react'
import portrait from '../../images/portrait.jpg';

export default function About() {
    return (
        <section class="section about-section gray-bg" id="about">
    <div class="container">
        <div class="row align-items-center justify-content-around flex-row-reverse">
            <div class="col-lg-6">
                <div class="about-text">
                    <h3 class="dark-color">Do some awsome stuff with me.</h3>
                    <h4 class="theme-color">UI / UX Designer &amp; Web Developer</h4>
                    <p>I am orginally graduated from Clemson University with a civil engineering degree, but now have decided that I want to become a web developer. I am currently finishing </p>
                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                
                </div>
            </div>
            <div class="col-lg-5 text-center">
                <div class="about-img">
                    <img src={portrait}>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
    );
}