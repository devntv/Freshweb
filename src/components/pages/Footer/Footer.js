import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaReact
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { DiCode } from "react-icons/di";

function Footer() {
   
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 >About Us</h2>
            <Link to='/sign-up' >How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='' target='_blank'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <FaReact style={{fontSize:'32px', color:'aqua'}} className="navbar-icon" />
              React<span style={{color:"#61dafb"}}>Fresh</span>
              <DiCode style={{fontSize:"28px"}}/>
            </Link>
          </div>
          <small className='website-rights'>ReactFresh © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to=''
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook href='www.facebook.com/Dinh.nt1097' className='fa-myfacebook' />
            </Link>
            <Link
              className='social-icon-link'
              to='www.facebook.com/Dinh.nt1097'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram className='fa-myinsta'/>
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube className='fa-myytb'/>
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter className='fa-mytw'/>
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin className='fa-mylinked'/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;