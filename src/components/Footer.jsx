import React from "react";
import { FaLinkedin, FaRegCopyright, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="d-flex justify-content-center flex-wrap border-top border-success border-3 fs-3 p-3">
                <a href="https://www.linkedin.com/in/andrej-nasevski-a25446237/"><FaLinkedin className="icons mx-3"></FaLinkedin></a>
                <a href="https://twitter.com/nasevski9"><FaTwitter className="icons mx-3"></FaTwitter></a>
                <div className="d-flex flex-direction column">
                    <FaRegCopyright className="my-auto mx-3"></FaRegCopyright>
                    <h5 className="my-auto">Andrej Nasevski 2023</h5>
                </div>
        </footer>
    )
}