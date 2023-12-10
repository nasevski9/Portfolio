import React from "react";
import htmlicon from './images/icons/html.png';
import cssicon from "./images/icons/css.png";
import jsicon from "./images/icons/js.png";
import reacticon from "./images/icons/react.png";
import nodeicon from "./images/icons/node.png";
import expressicon from "./images/icons/express.png";
import bootstrapicon from "./images/icons/bootstrap.png";
import mongoicon from "./images/icons/mongo.png";
import sqlicon from "./images/icons/sql.png";
import java from './images/icons/java.png';
import springboot from './images/icons/springboot.png';


export default function Resume() {
    return (
        <div className="resume-container content container">
            <div className="my-5 d-flex justify-content-between">
                <h1 className="fs-1">Skills</h1>
                <h4>Download my<span> </span>
                    <a href="https://drive.google.com/file/d/1i6Hw2jsVtrtqpKfb_oiLgU7NfmgolwfM/view?usp=sharing" className="text-success fst-italic">
                        Resume.pdf
                    </a>
                </h4>
            </div>
            <div className="skills">
                <div className="row">
                    <div className="col border-bottom border-success border-3">
                        <h3>Languages:</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex flex-wrap flex-row col">
                        <div className="skill-icon">
                            <img src={htmlicon}></img>
                        </div>
                        <div className="skill-icon">
                            <img src={cssicon}></img>
                        </div>
                        <div className="skill-icon js">
                            <img src={jsicon}></img>
                        </div>
                        <div className="skill-icon js">
                            <img src={java}></img>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col border-bottom border-success border-3">
                        <h3>Libraries/Frameworks:</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex flex-wrap flex-row col">
                        <div className="skill-icon">
                            <img src={reacticon}></img>
                        </div>
                        <div className="skill-icon">
                            <img src={nodeicon}></img>
                        </div>
                        <div className="skill-icon">
                            <img src={expressicon}></img>
                        </div>
                        <div className="skill-icon">
                            <img src={bootstrapicon}></img>
                        </div>
                        <div className="skill-icon js">
                            <img src={springboot}></img>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col border-bottom border-success border-3">
                        <h3>Databases:</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex flex-wrap flex-row col">
                        <div className="skill-icon">
                            <img src={mongoicon}></img>
                        </div>
                        <div className="skill-icon">
                            <img src={sqlicon}></img>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}