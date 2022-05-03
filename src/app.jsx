import React, { useEffect, useRef } from 'react';
import { mainBody, about, skills, notionSite } from './editable-stuff/config.js';
import MainBody from './components/home/MainBody';
import Navigation from './components/Navbar';
import AboutMe from './components/home/AboutMe';
import Footer from './components/Footer';
import Skills from './components/home/Skills';
import Project from './components/home/Project';
import { Card, Button } from 'react-bootstrap';

let home;
let homeHeight;
let arrowUp;

function App() {
  const titleRef = useRef();

  useEffect(() => {
    home = document.querySelector('#home');
    homeHeight = home.getBoundingClientRect().height;
    arrowUp = document.querySelector('.arrow-up');
    document.addEventListener('scroll', arrowVisible);
    arrowUp.addEventListener('click', arrowClick);
  }, []);

  const arrowVisible = () => {
    if (window.scrollY > homeHeight / 2) {
      arrowUp.classList.add('visible');
    } else {
      arrowUp.classList.remove('visible');
    }
  };

  const arrowClick = () => {
    home.scrollIntoView(true);
  };

  return (
    <>
      <Navigation ref={titleRef} />
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName}:${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={titleRef}
      />
      {about.show && <AboutMe heading={about.heading} message={about.message} link={about.imageLink} imgSize={about.imageSize} />}
      {skills.show && <Skills heading={skills.heading} hardSkills={skills.hardSkills} />}
      <NotionComponent />
      <Project />
      <Footer />
      <button className='arrow-up'>
        <i className='fas fa-arrow-up'></i>
      </button>
    </>
  );
}

export default App;

function NotionComponent() {
  return (
    <Card style={{ width: '100%', fontWeight: 'bold', fontSize: '30px', textAlign: 'center', border: '1px solid tomato' }}>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>경력기술서</Card.Text>
        <a href={notionSite} target='_blank'>
          <Button
            style={{
              fontWeight: 'bold',
              fontSize: '20px',
              color: 'white',
              backgroundColor: 'tomato',
              border: 'none',
              height: '50px',
              width: '100px',
            }}
          >
            노션 이동
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
}
