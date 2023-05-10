import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Features from '../../Feactures/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;