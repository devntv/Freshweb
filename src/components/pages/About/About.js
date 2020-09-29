import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing';
import { homeObjOne,homeObjTwo, homeObjThree,homeObjFour} from './Data'

function About() {
    return (
        <>   
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            
        </>
    )
}

export default About;
