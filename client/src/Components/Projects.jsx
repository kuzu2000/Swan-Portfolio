import { data } from '../static/constant';
import { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
const allCategories = ['All', ...new Set(data.map((item) => item.category))];
console.log(allCategories);
const Projects = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section className="projects" id="projects">
      <h1>My Projects</h1>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  );
};

export default Projects;
