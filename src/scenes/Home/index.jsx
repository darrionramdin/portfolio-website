import React from 'react';

import Navbar from '../../components/Navbar';

import Hero from '../../sections/Hero';
import AboutSection from '../../sections/AboutSection';
import WorkSection from '../../sections/WorkSection';
import BlogSection from '../../sections/BlogSection';
import ContactSection from '../../sections/ContactSection';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutSection />
            <WorkSection />
            <BlogSection />
            <ContactSection />
        </div>
    )
    
}
 
export default Home;