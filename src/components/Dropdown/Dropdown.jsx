import { NavLink } from 'react-router-dom';
import s from './Dropdown.module.css';

export const Dropdown = ({ data, to }) => {
  return (
    <ul className={s.list}>
      {data.map(el => {
        return (
          <li key={Object.values(el)}>
            <NavLink
              to={`${to}/${Object.keys(el)}`}
              className={({ isActive }) =>
                s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
              }
            >
              {Object.values(el)}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
