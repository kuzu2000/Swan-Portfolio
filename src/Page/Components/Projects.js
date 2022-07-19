import React from 'react';
import TeamCIgarette from './teamcigarette.PNG';
import Blog from './Blog.PNG'
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1>My Projects</h1>
      <div className="myProjects">
        <div className="myProject">
          <img src={TeamCIgarette} alt="Team Cigarette" />
          <div className="myTechs">
            <div className="myTech">styled-components</div>
            <div className="myTech">React</div>
            <div className="myTech">ReduxJS/toolkit</div>
            <div className="myTech">Node</div>
            <div className="myTech">Express</div>
          </div>
          <div className="techName">Team Cigarette</div>
          <div className="techInfo">As the world is going digital, esports have become much more
              popular. This app is
              about an esports team with news, players' info and e-commerce to
              buy merchandise to support the team.</div>
          <div className="techLinks">
            <a
              target="_blank"
              href="https://teamcigarette.herokuapp.com/"
              className="techLink"
              rel="noreferrer"
            >
              Live Demo
            </a>
            <a
              target="_blank"
              href="https://github.com/kuzu2000/teamcigarette"
              className="techLink"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className="myProject">
          <img src={Blog} alt="Blog App" />
          <div className="myTechs">
            <div className="myTech">CSS</div>
            <div className="myTech">React</div>
            <div className="myTech">ReduxJS/toolkit</div>
            <div className="myTech">Node</div>
            <div className="myTech">Express</div>
          </div>
          <div className="techName">Blog App</div>
          <div className="techInfo">
            This blog app allows users to post, like and comment just like
            social media apps. Users can see the popular posts dynically just
            like Twitter.
          </div>
          <div className="techLinks">
            <a
              target="_blank"
              href="https://mernreactblog.herokuapp.com/posts"
              className="techLink"
              rel="noreferrer"
            >
              Live Demo
            </a>
            <a
              target="_blank"
              href="https://github.com/kuzu2000/React-MERN-Blog"
              className="techLink"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
