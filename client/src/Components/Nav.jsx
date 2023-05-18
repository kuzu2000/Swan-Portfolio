import { useState, useEffect } from 'react';

const Nav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add('nav--hidden');
      } else {
        nav.classList.remove('nav--hidden');
      }

      lastScrollY = window.scrollY;
    });
  }, []);

  return (
    <nav className="nav">
      <div className="container">
        <h1>Swan</h1>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={'hamburger ' + (open ? 'is-active' : '')}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={'menu ' + (open ? 'is-active' : '')}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
