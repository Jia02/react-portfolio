import React from 'react'
import './experience.css'
import {BsCheckSquareFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Posses</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">

        {/* =======================Frontend Development========== */}
        <div className="experience_fontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details"> 
              <BsCheckSquareFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience_details"> 
              <BsCheckSquareFill className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience_details"> 
              <BsCheckSquareFill className='experience_details-icon'/>
              <div>
                <h4>JavaScipt</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="experience_details"> 
              <BsCheckSquareFill className='experience_details-icon'/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>
        </div>

         {/* =======================Backend Development========== */}       
        <div className="experience_backend">
          <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details"> 
                <BsCheckSquareFill className='experience_details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience_details"> 
                <BsCheckSquareFill className='experience_details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience_details"> 
                <BsCheckSquareFill className='experience_details-icon'/>
                <div>
                  <h4>Oracle SQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience_details"> 
                <BsCheckSquareFill className='experience_details-icon'/>
                <div>
                  <h4>Scala</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className="experience_details"> 
                <BsCheckSquareFill className='experience_details-icon'/>
                <div>
                  <h4>NodeJS</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>

              <article className="experience_details"> 
                <BsCheckSquareFill className='experience_details-icon'/>
                <div>
                  <h4>Firebase</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>

              <article className="experience_details"> 
                <BsCheckSquareFill className='experience_details-icon'/>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience