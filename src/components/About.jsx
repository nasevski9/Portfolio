import React from "react";
import { Link } from 'react-router-dom';
import img from './images/img.jpg'

export default function About() {
    return (
    <div className="py-5 content container col-lg-12">
        <div className="my-5 row">
            <div className="col-lg-4">
                <img src={img} alt="Image" id="logoImg"></img>
            </div>
            <div className="col-lg-7 offset-lg-1">
                <h1 className="text-success">👋 Hello, I'm Andrej </h1>
                <br />
                <p className="fs-4"> a tech enthusiast with a knack for creating elegant and efficient web solutions, skilled in :<br /><span className="fs-2 text-success fst-italic">JavaScript, React, Node Js, Java</span> and <span className="fs-2 text-success fst-italic">Springboot.</span> <br />I thrive on turning creative ideas into functional and visually appealing digital experiences. I'm a problem solver, and a lifelong learner. I believe in the power of teamwork and open communication to bring digital visions to life. Always open to new opportunities and challenges, so don't hesitate to contact me!</p>
                <br />
                <div className="d-flex justify-content-center">
                    <Link to='/Contact'>
                        <button className="btn btn-success border p-3 fs-3 rounded-pill">Contact Me</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}