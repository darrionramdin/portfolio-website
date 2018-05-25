import React from 'react';
import illustration from './assets/illustration.png';

import Section from '../../components/Section';
import Container from '../../components/Layout/Container';

const Hero = () => {
    return (
        <Section dark>
            <Container>
                <div className="cf ph2-ns roboto min-vh-100 flex flex-row-ns items-center">
                    <div className="fl w-100 w-50-ns">
                        <div className="white tc tl-ns">
                            <h5 className="ma0 pv3 ttu fw6">Hello World</h5>
                            <h1 className="ma0 fw3">Darrion is the Name, <br/> and Web Development is his game</h1>
                        </div>
                        <div className="white mt5">
                            <h5 className="ttu fw6 tc tl-ns">Connect with him</h5>
                            <ul className="list pl0 flex inline flex-row-ns justify-center justify-start-ns tc">
                                <li className="mr3 grow">
                                    <a href="https://www.instagram.com/darrioncodes/" className="link blue fw5">LinkedIn</a>
                                </li>
                                <li className="mr3 grow">
                                    <a href="https://github.com/darrionramdin" className="link purple fw5">Github</a>
                                </li>
                                <li className="mh3 grow">
                                    <a href="https://codepen.io/darrionr/" className="link white fw5 dim">Codepen</a>
                                </li>
                                <li className="mh3 grow">
                                    <a href="https://twitter.com/darrionramdin" className="link blue fw5 dim">Twitter</a>
                                </li>
                                <li className="ml3 grow">
                                    <a href="https://medium.com/@darrion" className="link green fw5 dim">Medium</a>
                                </li>     
                            </ul>
                        </div>
                    </div>
                    <div className="fl w-100 w-50-ns pl5 dn db-ns">
                        <img className="o-50 grow" src={illustration} alt="Me" />
                    </div>
                </div>
            </Container>
        </Section>
    )
}
 
export default Hero;