import React from 'react';

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-intro">Hello, My name is</div>
        <div className="home-name">Swan Thu Zaw</div>
        <div className="home-title">
          <div className="home-title-wrapper">
            <div className="home-title-item">Web Developer</div>
            <div className="home-title-item">Frontend Developer</div>
            <div className="home-title-item">Backend Developer</div>
            <div className="home-title-item">Full Stack Developer</div>
            <div className="home-title-item">MERN Stack Developer</div>
          </div>
        </div>
        <div className="home-button">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/kuzu2000"
            className="home-github"
          >
            <i className="fa fa-github"></i>
            Github
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/swan-thu-zaw-666b161a7/"
            className="home-linkedin"
          >
            <i className="fa fa-linkedin"></i>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
