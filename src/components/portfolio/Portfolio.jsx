import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>A Collection of My Work</h5>
      <h2>Portfolio</h2>

      {/* List of projects  */}
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt='yujia project'></img>
          </div>
          <h3>Portfolio title</h3>
          <div className='portfolio_item-content'>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio repellat officia ut hic consequatur ducimus reprehenderit voluptatem a eveniet. Laborum soluta corrupti eum, tempore itaque vero voluptate iure suscipit!</small>
          </div>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href='https://youtube.com' className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt='yujia project'></img>
          </div>
          <h3>Portfolio2 title</h3>
          <div className='portfolio_item-content'>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio repellat officia ut hic consequatur ducimus reprehenderit voluptatem a eveniet. Laborum soluta corrupti eum, tempore itaque vero voluptate iure suscipit!</small>
          </div>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href='https://youtube.com' className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt='yujia project'></img>
          </div>
          <h3>Portfolio3 title</h3>
          <div className='portfolio_item-content'>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio repellat officia ut hic consequatur ducimus reprehenderit voluptatem a eveniet. Laborum soluta corrupti eum, tempore itaque vero voluptate iure suscipit!</small>
          </div>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href='https://youtube.com' className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt='yujia project'></img>
          </div>
          <h3>Portfolio4 title</h3>
          <div className='portfolio_item-content'>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio repellat officia ut hic consequatur ducimus reprehenderit voluptatem a eveniet. Laborum soluta corrupti eum, tempore itaque vero voluptate iure suscipit!</small>
          </div>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href='https://youtube.com' className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Portfolio