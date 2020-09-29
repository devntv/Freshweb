import React from 'react'
import { FaFire } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { IconContext } from "react-icons";
import './Pricing.css'


function Pricing() {
    return (
        <IconContext.Provider value={{color:'white', size:64}}>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Feature</h1>
                    <div className="pricing__container">
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>ReactJS</h3>
                                <h4> openSource</h4>
                                <p>by Facebook</p>
                                <ul className="pricing__container-features">
                                    <li>1 million + website used</li>
                                    <li>Speed performance</li>
                                    <li>great support community </li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Build website</Button>
                            </div>
                        </Link>

                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>Es6-JavaScript</h3>
                                <h4>programming</h4>
                                <p>Popular today</p>
                                <ul className="pricing__container-features">
                                    <li>1 million + website used</li>
                                    <li>Speed performance</li>
                                    <li>great support community </li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'>Build website</Button>
                            </div>
                        </Link>

                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>NodeJS</h3>
                                <h4>programming </h4>
                                <p>Popular </p>
                                <ul className="pricing__container-features">
                                    <li>1 million + website used</li>
                                    <li>Speed performance</li>
                                    <li>great support community </li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Build website</Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Pricing
