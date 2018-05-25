import React, { Component } from 'react';

import Section from '../../components/Section';
import Container from '../../components/Layout/Container';
import Title from '../../components/Title';
import Project from '../../components/Project';

import {projects} from '../../services/projects';

class WorkSection extends Component {
    state ={
        projects: []
    }

    componentDidMount() {
        this.setState({
            projects
        })
    }

    render(){
        let projectList = null;
        this.state.projects ? projectList = this.state.projects.map(project => {
            return (
                <Project
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    demoLink={project.demoLink}
                    codeLink={project.codeLink}
                    languages={project.languages}
                />
            )
        }) : projectList = <div>Loading...</div>

        return (
            <Section dark>
                <Container>
                    <div className="ph2-ns pt6-ns tc tl-ns">
                        <Title>Work</Title>
                        <div className="cf">
                            {projectList}
                        </div>
                    </div>
                    <div className="tc mt5">
                        <a className="link fw5 white bb b--yellow" href="https://github.com/darrionramdin">See More on Github</a>
                    </div>
                </Container>
            </Section>
        )
    }
    
}
 
export default WorkSection;