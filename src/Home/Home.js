import React from 'react';

import {
    Button,
    Row,
    Col
} from 'reactstrap';

import ProjectCard from '../Project/Card';
import '../Projects/Projects.css'

const headerStyle = {
    "margin" : "50px 0px 50px 0px",
    "text-align": "center",
}

const buttonStyle = {
    "margin" : "20px 10px",
}

const trendingStyle = {
    "padding" : "5px",
}


const home = (props) => {
    return (
        <div>
            <div style={headerStyle}>
                <h2>Thinkspaces</h2>
                <h4>Find and work on projects started by Yalies</h4>
                <Button href="https://goo.gl/forms/TWUv6iRejb64BHis2" style={buttonStyle} outline>Submit a Project</Button>
                <Button href="/projects" style={buttonStyle} color="danger">Browse Projects</Button>
            </div>
            <h2 style={trendingStyle}><span role="img" aria-label="Fire">🔥</span> Trending</h2>
            <Row className="cardGroup">
                 <Col lg>
                    <ProjectCard title="Homecooked" shortname="homecooked"
                     image='https://i.imgur.com/1zb0koc.jpg'
                     text = "A social dining app that lets you book homecooked meals made by people in your neighborhood"
                     />
                 </Col>
                <Col lg>
                    <ProjectCard title="Visionary Health" shortname="visionaryhealth"
                    image = 'https://i.imgur.com/PKpZUP9.jpg'
                    text = "An AI/Healthcare startup developing the first automated imaging screening platform"
                    />
                </Col>
                <Col lg>
                    <ProjectCard title = "Pearl" shortname="pearl"
                    image = 'https://i.imgur.com/a51qJgk.jpg'
                    text = "A biometric technology startup bringing the first global cloud-based biometric authentication platform to market."
                    />
                </Col>
            </Row>
        </div>
    );
}

export default home; 