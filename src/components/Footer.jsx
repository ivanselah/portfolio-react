import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = (props) => {
  const bgStyle = { backgroundColor: '#f5f5f5' };

  return (
    <div id='contact'>
      <footer style={bgStyle} className='mt-auto py-5 text-center'>
        <Container>
          {props.children}
          <i className='fas fa-code' /> with <i className='fas fa-heart' /> by{' '}
          <a className='badge badge-dark' href='https://github.com/ivanselah' aria-label='My GitHub' target='_blank'>
            GitHub IvanSelah
          </a>{' '}
          using <i className='fab fa-react' />
          <p>
            <small className='text-muted'>tft0720@gmail.com</small>
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
