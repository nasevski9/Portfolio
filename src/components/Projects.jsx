import React from "react";
import weatherapp from "./images/weather.png";
import wordguess from "./images/wordguess.png";
import password from "./images/password.png";
import todo from './images/todo.jpg'
import backend from './images/backend.jpg';
import ecommerce from './images/ecommerce.png';

export default function Projects() {
    return (
        <>
        <div className="d-flex justify-content-center">
            <h1 className="fs-1 mt-3">Projects</h1>
        </div>
        
        <div className="card-container">
        <div class="card border-success border-5">
            <img src={weatherapp} class="card-img-top" alt="Weather Application" />
            <div class="card-body">
            <h5 class="card-title">Weather Application</h5>
            <p class="card-text">When the city is searched, the current weather is displayed, and the forecast for the next 5 days.After looking up a city, the city is saved in the search History section of the page.</p>
            <a href="https://github.com/nasevski9/Weather-Dashboard-App" class="btn btn-success d-flex  justify-content-center git">Github Repository</a>
            </div>
        </div>
        
        <div class="card border-success border-5">
            <img src={password} class="card-img-top" alt="Password Generator" />
            <div class="card-body">
            <h5 class="card-title">Password Generator</h5>
            <p class="card-text">The app provides a randomly generated password that meets certain criteria when the button is clicked. The criteria is set by the user.</p>
            <a href="https://github.com/nasevski9/Password-Generator-Javascript" class="btn btn-success d-flex  justify-content-center git">Github Repository</a>
            </div>
        </div>

        <div class="card border-success border-5">
            <img src={ecommerce} class="card-img-top" alt="E-commerce Front End" />
            <div class="card-body">
            <h5 class="card-title">E-commerce Front End</h5>
            <p class="card-text">E-Commerce website built with React and Redux that uses an API to fetch products. User has to be logged in to view thhe products and shop.</p>
            <a href="https://github.com/nasevski9/e-shop" class="btn btn-success d-flex justify-content-center git">Github Repository</a>
            </div>
        </div>
        
        <div class="card border-success border-5">
            <img src={wordguess} class="card-img-top" alt="Word Gues Game" />
            <div class="card-body">
            <h5 class="card-title">Guess Game</h5>
            <p class="card-text">This application is a timed game of guessing some words that are displayed as blanks.</p>
            <a href="https://github.com/nasevski9/Key-Guess-Game" class="btn btn-success d-flex justify-content-center git">Github Repository</a>
            </div>
        </div>

        <div class="card border-success border-5">
            <img src={todo} class="card-img-top" alt="To-do Application" />
            <div class="card-body">
            <h5 class="card-title">To-Do Application</h5>
            <p class="card-text">A simple to-do application, organizational tool designed to help individuals manage their tasks. Users can add and remove tasks, it uses local storage to save the tasks.</p>
            <a href="https://github.com/nasevski9/To-do" class="btn btn-success d-flex justify-content-center git">Github Repository</a>
            </div>
        </div>

        <div class="card border-success border-5">
            <img src={backend} class="card-img-top" alt="E-commerce Back End" />
            <div class="card-body">
            <h5 class="card-title">E-commerce Back End</h5>
            <p class="card-text">This app shows how the back-end routes of an e-commerce store work in ThunderClient.</p>
            <a href="https://github.com/nasevski9/E-Commerce-Back-End" class="btn btn-success d-flex justify-content-center git">Github Repository</a>
            </div>
        </div>

        </div>
        </>
    )
}