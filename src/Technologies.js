import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Technologies = () => {
    const listStyle= {
        listStyleType: 'none'
    }

    return (
        <section>
            <h2>Coding skills that I have learned so far</h2>
            <ul style={listStyle}>
                <li>HTML <FaHtml5 /></li>
                <li>CSS <FaCss3Alt /></li>
                <li>Javascript <DiJavascript /></li>
                <li>NodeJS <FaNodeJs /></li>
                <li>Express <SiExpress /></li>
                <li>MongoDB <SiMongodb /></li>
                <li>React <FaReact /></li>
            </ul>
        </section>
    )
}


export default Technologies