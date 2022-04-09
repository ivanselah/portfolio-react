import React from 'react';
import { about } from '../../editable-stuff/config';

const AboutMe = () => {
  return (
    <div id='aboutme' className='jumbotron jumbotron-fluid m-0'>
      <div className='container container-fluid section'>
        <img src={about.imageLink} alt="IvanSelah's profile photo" class='home__avatar' width={about.imageSize} />
        <h1 className='display-4 pb-5 text-center'>About me</h1>
        <p>{about.message}</p>
        <p className='whoAboutMe'>{about.text}</p>
        <span className='about__tags'>{about.tags}</span>
        <div className='about__majors'>
          <div className='major'>
            <div className='major__icon mainMajor'>
              <i className='fab fa-react'></i>
            </div>
            <h2 className='major__title'>Frontend</h2>
            <div className='major__description'>
              HTML, CSS, <br />
              JS(ES6)↑, TS, React
            </div>
          </div>
          <div className='major'>
            <div className='major__icon'>
              <i className='fas fa-server'></i>
            </div>
            <h2 className='major__title'>Backend</h2>
            <div className='major__description'>NodeJS, ExpressJS</div>
          </div>
          <div className='major'>
            <div className='major__icon'>
              <i className='fas fa-database'></i>
            </div>
            <h2 className='major__title'>DataBase</h2>
            <div className='major__description'>MySQL, MongoDB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
