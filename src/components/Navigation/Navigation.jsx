import { Dropdown } from 'components/Dropdown/Dropdown';
import { Logo } from 'components/Logo/Logo';
import { subMenuBuilding, subMenuRestoration } from 'data/subMenu';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { Transition } from 'react-transition-group';
import { useRef } from 'react';

const duration = 150;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  display: 'none',
};

const transitionStyles = {
  entering: { display: 'block', opacity: 0 },
  entered: { display: 'block', opacity: 1 },
  exiting: { display: 'block', opacity: 0 },
  exited: { display: 'none', opacity: 1 },
};

export const Navigation = () => {
  const [listSubmenuBuilding, setListSubmenuBuilding] = useState(false);
  const [listSubmenuRestoration, setListSubmenuRestoration] = useState(false);
  const nodeRef = useRef(null);

  const handleShowSubmenuBuilding = () => {
    setListSubmenuBuilding(true);
  };
  const handleHideSubmenuBuilding = () => {
    setListSubmenuBuilding(false);
  };
  const handleShowSubmenuRestoration = () => {
    setListSubmenuRestoration(true);
  };
  const handleHideSubmenuRestoration = () => {
    setListSubmenuRestoration(false);
  };

  return (
    <header className={s.header}>
      {/* <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
        {state => (
          <div
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            !!!!!@@@@@@
          </div>
        )}
      </Transition> */}
      <Logo />

      <nav className={s.navContainer}>
        <ul className={s.navList}>
          <li className={s.item}>
            <div className={s.link}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
                }
              >
                ПРО НАС
              </NavLink>
            </div>
          </li>
          {/* <li className={s.item}>
            <div className={s.submenuContainer}>
              <div className={s.submenuBuildingContainer}></div>

              <div className={s.link}>
                <NavLink
                  to="/building"
                  className={({ isActive }) =>
                    s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
                  }
                >
                  БУДІВНИЦТВО
                </NavLink>
              </div>
              <div className={s.subMenuBuilding}>
                <Dropdown data={subMenuBuilding} to={'building'} />
              </div>
            </div>
          </li> */}
          <li
            className={s.item}
            onMouseEnter={handleShowSubmenuBuilding}
            onMouseLeave={handleHideSubmenuBuilding}
            onClick={handleHideSubmenuBuilding}
          >
            <div className={s.submenuContainer}>
              <Transition
                nodeRef={nodeRef}
                in={listSubmenuBuilding}
                timeout={duration}
              >
                {state => (
                  <div
                    ref={nodeRef}
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                  >
                    {/* {listSubmenuBuilding && ( */}
                    <Dropdown data={subMenuBuilding} to={'building'} />
                    {/* )} */}
                  </div>
                )}
              </Transition>
              <div className={s.link}>
                <NavLink
                  to="/building"
                  className={({ isActive }) =>
                    s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
                  }
                >
                  БУДІВНИЦТВО
                </NavLink>
              </div>
            </div>
          </li>
          <li
            className={s.item}
            onMouseEnter={handleShowSubmenuRestoration}
            onMouseLeave={handleHideSubmenuRestoration}
            onClick={handleHideSubmenuRestoration}
          >
            <div className={s.submenuContainer}>
              <Transition
                nodeRef={nodeRef}
                in={listSubmenuRestoration}
                timeout={duration}
              >
                {state => (
                  <div
                    ref={nodeRef}
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                  >
                    {/* {listSubmenuRestoration && ( */}
                    <Dropdown data={subMenuRestoration} to={'restoration'} />
                    {/* )} */}
                  </div>
                )}
              </Transition>
              <div className={s.link}>
                <NavLink
                  to="/restoration"
                  className={({ isActive }) =>
                    s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
                  }
                >
                  РЕСТАВРАЦІЯ
                </NavLink>
              </div>
            </div>
          </li>
          <li className={s.item}>
            <div className={s.link}>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
                }
              >
                ПРОЕКТИ
              </NavLink>
            </div>
          </li>
          <li className={s.item}>
            <div className={s.link}>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
                }
              >
                КАР'ЄРА
              </NavLink>
            </div>
          </li>
          <li className={s.item}>
            <div className={s.link}>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
                }
              >
                КОНТАКТИ
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
      <a href="tel:+380674076156" className={s.phoneNumber}>
        +38(067)407-61-56
      </a>
    </header>
  );
};
