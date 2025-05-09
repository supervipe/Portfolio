import React from "react";
import consult from '../assets/images/consult-panel.png';
import viralizo from '../assets/images/viralizo - panel.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/supervipe/Consult-Chatbot/" target="_blank" rel="noreferrer"><img src={consult} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/supervipe/Consult-Chatbot/" target="_blank" rel="noreferrer"><h2>Consult</h2></a>
                <p>Developed a health consultant system featuring a chatbot that interacts with users to provide guidance and advice on symptoms.
                    The system connects to a mobile app and a back-end API to collect and present user data.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1TlvwAKVfIKgOMVGGxN9znCTdzX0G_Diw/view?usp=sharing" target="_blank" rel="noreferrer"><img src={viralizo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1TlvwAKVfIKgOMVGGxN9znCTdzX0G_Diw/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Viral.izo</h2></a>
                <p>Designed, developed, and presented a 2D competitive game with C# and Unity that won 2nd place in the national game competition on the health category. The objective is to destroy all the bacterias with
                    the boosts while educating the user about the risks of Covid-19 
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;