import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {GiAchievement} from 'react-icons/gi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="Yujia's self-potrait" />
            </div>
        </div>
        <div className="about_content">

          <div className="about_cards">
            <article className="about_card">
              <GiAchievement className='about_icon'/>
              <h5> Experience</h5>
              <small>Undergraduate Studying</small>
            </article>

            <article className="about_card">
              <AiOutlineFolderOpen className='about_icon'/>
              <h5> Projects</h5>
              <small>4 Completed</small>
            </article>

          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus magnam omnis itaque voluptas harum necessitatibus veniam beatae eius nam dolor reiciendis quos sunt impedit a, quia illo consequatur officiis quae.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About