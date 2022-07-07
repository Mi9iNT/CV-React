import React from 'react';
import FormationsExperiences from '../components/FormationsExperiences';
import Profil from '../components/Profil';
import Skills from '../components/Skills';
import User from '../components/User';

const Home = () => {
    return (
        <div className='home'>
            <div className="grid-container">
                <div className="sidebar">
                    <User />
                    <Skills />
                </div>
                <div className="main">
                    <Profil />
                    <FormationsExperiences />
                </div>
            </div>
            
        </div>
    );
};

export default Home;