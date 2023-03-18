import { NavLink } from 'react-router-dom';

import items from './items';
import css from './nav-bar.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const NavBar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={getClassName} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <header className={css.wrapper}>
      <ul className={css.menu}>{elements}</ul>
    </header>
  );
};
export default NavBar;
