import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Golang",
    "Python",
    "Spring Boot",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Git"
];

const labelsSecond = [
    "Rasa",
    "OpenAI",
    "Python",
    "CrewAI",
    "LangChain",
    "Hugging Face Transformers",
];

const labelsThird = [
    "Apache Airflow",
    "Pandas",
    "Scikit-learn",
    "XGBoost",
    "SQL",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Back-End Engineering</h3>
                    <p>I specialize in building robust, scalable, and high-performance backend systems. From architecting RESTful APIs to managing complex workflows and data pipelines, I’ve developed backend services powering real-world platforms like EAD learning systems using modern frameworks and efficient programming paradigms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI Integration & Chatbots</h3>
                    <p>Bringing intelligent behavior into software products is my passion. I’ve applied AI at multiple levels — from building conversational agents with Rasa and integrating LLMs like OpenAI and Llama, to creating AI-driven workflows using CrewAI. My focus is on embedding intelligence into systems to enhance decision-making, automation, and user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Data Engineering & ML Automation</h3>
                    <p>I’ve handled data extraction, transformation, and load using Airflow, built ML pipelines to classify data, and deployed models into production. I thrive in solving real business problems with applied machine learning and automation workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;