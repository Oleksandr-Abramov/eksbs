import s from './Logo.module.css';
import logo from '../../img/logo2.png';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    // <div>
    <Link to="/" className={s.logoContainer}>
      <span className={s.logoText}>ЕКСТЕР'ЄР-БУДСЕРВІС</span>
      <img src={logo} alt="logo" className={s.logoImg} />
    </Link>

    // </div>
  );
};
