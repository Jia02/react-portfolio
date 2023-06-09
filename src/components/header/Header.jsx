import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials' 

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hai, I'm </h5>
        <h1>Lim YuJia</h1>
        <h5 className="text-light"> An Undergraduate Student</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="my profile picture"/>
        </div>
        <a href='#contact' className='scroll_down'>Scroll Me Down</a>
      </div>
    </header>
  )
}

export default Header