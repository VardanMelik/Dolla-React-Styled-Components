import React from 'react';
import {
    HeroContainer
} from './Hero.elements';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg 
                    autoPlay 
                    loop 
                    scr={Video}
                    type='video/mp4'
                />
            </HeroBg>
            
        </HeroContainer>
    )
}

export default Hero
