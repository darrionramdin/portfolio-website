import React from 'react';

import Section from '../../components/Section';
import Container from '../../components/Layout/Container';
import Title from '../../components/Title';

const AboutSection = () => {
    return (
        <Section dark>
            <Container>
                <div className="cf ph2-ns pt6-ns">
                    <div className="fl w-100 w-60-ns pa2">
                        <Title>About</Title>
                        <div className="pr4 white fw3">
                            <p>
                                Born and raised on the Caribbean Island of Trinidad
                                was a boy who had a burning desire to become a 
                                developer in the software engineering world.
                            </p>
                            <p>
                                It all started when he wanted to hack this dude's
                                facebook account. This idea of becoming a feared
                                hacker lead him to discover HTML which was where
                                we found the love for making websites. As he grew
                                older, he learnt more technologies like CSS and 
                                JavaScript and tried out many other programming
                                languages like Python and C#. His toolkit became
                                so lethal, he was ready to take over the world.
                            </p>
                            <p>
                                He worked hard, day and night, with hopes of one
                                day moving out of his country and chase him dreams
                                of become a web developer. In the meantime, while
                                he searched, he studied, improving his skills
                                each day. The story will continue and Darrion
                                will keep chasing this dream.
                            </p>
                        </div>
                        <p className="f3 fw3 gray o-20 pv4">"Work Hard, Play Hard"<br/>
                            <span className="f5 pl1">-Wiz Khalifa</span>
                        </p>
                    </div>
                    <div className="fl w-100 w-40-ns pa2">
                        <div>
                            <Title>Experience</Title>
                            <div className="pv1">
                                <h3 className="mb1 fw4 yellow">Web Developer</h3>
                                <h5 className="mv0 fw4 ttu white">Class Calc</h5>
                                <h6 className="mt3 fw6 ttu mid-gray">(Remote)</h6>
                            </div>
                            <div>
                                <h3 className="mb1 fw4 yellow">Creator</h3>
                                <h5 className="mv0 fw4 ttu white">All his life</h5>
                            </div>
                        </div>
                        <div className="mt5">
                            <Title>Hire Him</Title>
                            <h5 className="mv0 fw4 white">
                                You can contact him at <a className="link fw4 white bb b--yellow" href="mailto:darrionr007@gmail.com">
                                darrionr007@gmail.com</a>
                            </h5>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
 
export default AboutSection;