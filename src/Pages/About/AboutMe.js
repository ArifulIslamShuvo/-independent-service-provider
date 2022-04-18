import React from 'react';
import Shuvo from '../../imagea/shuvo.png'

const AboutMe = () => {
    return (
        <div style={{ borderRadius: '20px' }} className='bg-secondary container mx-auto d-block m-5'>
            <div>
                <img style={{ height: '300px', width:'310px' }} className='mx-auto d-block p-2' src={Shuvo} alt="" />
                <h1 className='text-center text-info'>Md: Ariful Islam</h1>
            </div>
            <div className='p-4'>
                <p className='text-white text-center'>My goal is to be a good developer. For this I am practicing every day and learning something new every day, I will go through every step of the programming hero to reach my goal and I will practice very well what will be taught from the programming hero so that my skills become stronger. And I will go to my goal inshaAllah.</p>
            </div>
        </div>
    );
};

export default AboutMe;