const Menu = ({ items }) => {
    return (
      <div className='myProjects'>
        {items.map((menuItem) => {
          const { id, title, img, category } = menuItem;
          return (
            <article key={id} className='myProject'>
              <img src={img} alt={title} className='photo' />
              <div className='item-info'>
                <header>
                  <h3>{title}</h3>
                  <p>{category}</p>
                  <div className="links">
                    <a href="https://google.com" rel="noreferrer" target="_blank">Demo</a>
                    <a href="https://google.com" rel="noreferrer" target="_blank">Source</a>
                  </div>
                </header>
              </div>
            </article>
          );
        })}
      </div>
    );
  };
  
  export default Menu;