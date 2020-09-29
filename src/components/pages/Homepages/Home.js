import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing';
import { homeObjOne,homeObjTwo, homeObjThree,homeObjFour} from './Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />    
            <Pricing />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Home;
