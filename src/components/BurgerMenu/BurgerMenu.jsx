import { Dropdown } from 'components/Dropdown/Dropdown';
import { useEffect, useState } from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import { subMenuBuilding, subMenuRestoration } from 'data/subMenu';
import s from './BurgerMenu.module.css';
import { NavLink, useParams } from 'react-router-dom';
import arrowImg from '../../img/white-arrow.png';

export const BurgerMenu = () => {
  //   const showSettings = event => {
  //     event.preventDefault();
  //   };
  const { title } = useParams();
  console.log('~ title', title);
  const buildTitles = [
    'warming',
    'roofing',
    'apartment-renovation',
    'subMenu4',
    'subMenu5',
  ];
  const restorationTitles = ['subMenu6', 'subMenu7', 'subMenu8', 'subMenu9'];

  const isBuildingSubMenuOpen = buildTitles.includes(title);
  const isRestorationSubMenuOpen = restorationTitles.includes(title);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const [listSubmenuBuilding, setListSubmenuBuilding] = useState(false);
  console.log('~ listSubmenuBuilding', listSubmenuBuilding);
  const [listSubmenuRestoration, setListSubmenuRestoration] = useState(false);
  console.log('~ listSubmenuRestoration', listSubmenuRestoration);

  useEffect(() => {
    setListSubmenuBuilding(isBuildingSubMenuOpen);
    setListSubmenuRestoration(isRestorationSubMenuOpen);
  }, [isBuildingSubMenuOpen, isRestorationSubMenuOpen]);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const handleCloseSubMenu = () => {
    setListSubmenuBuilding(false);
    setListSubmenuRestoration(false);
  };
  const handleCheckMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    handleCloseSubMenu();
  };
  const handleCheckSubMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const handleToggleSubmenuBuilding = () => {
    setListSubmenuBuilding(!listSubmenuBuilding);
    if (listSubmenuRestoration) {
      handleToggleSubmenuRestoration();
    }
  };
  const handleToggleSubmenuRestoration = () => {
    setListSubmenuRestoration(!listSubmenuRestoration);
    if (listSubmenuBuilding) {
      handleToggleSubmenuBuilding();
    }
  };
  return (
    <Menu
      onOpen={handleToggleMenu}
      onClose={handleToggleMenu}
      isOpen={isOpenMenu}
      disableOverlayClick={handleToggleMenu}
      right
      width={280}
      burgerButtonClassName={s.bmBurgerButton}
      burgerBarClassName={s.bmBurgerBars}
      crossButtonClassName={s.bmCrossButton}
      crossClassName={s.bmCross}
      menuClassName={s.bmMenu}
      morphShapeClassName={s.bmMorphShape}
      itemListClassName={s.bmItemList}
      overlayClassName={s.bmOverlay}
    >
      <ul className={s.navList}>
        <li onClick={handleCheckMenu}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
            }
          >
            ПРО НАС
          </NavLink>
        </li>
        <li>
          <NavLink
            to="building"
            className={({ isActive }) =>
              s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
            }
            onClick={handleToggleSubmenuBuilding}
          >
            <div className={s.arrowContainer}>
              БУДІВНИЦТВО
              <img
                src={arrowImg}
                alt="arrow"
                className={
                  s.arrow + (listSubmenuBuilding ? ' ' + s.arrowUp : '')
                }
              />
            </div>
          </NavLink>
          {listSubmenuBuilding && (
            <div className={s.submenuContainer} onClick={handleCheckSubMenu}>
              <Dropdown data={subMenuBuilding} to={'building'} />
            </div>
          )}
        </li>
        <li>
          <NavLink
            to="/restoration"
            className={({ isActive }) =>
              s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
            }
            onClick={handleToggleSubmenuRestoration}
          >
            <div className={s.arrowContainer}>
              РЕСТАВРАЦІЯ
              <img
                src={arrowImg}
                alt="arrow"
                className={
                  s.arrow + (listSubmenuRestoration ? ' ' + s.arrowUp : '')
                }
              />
            </div>
          </NavLink>
          {listSubmenuRestoration && (
            <div className={s.submenuContainer} onClick={handleCheckSubMenu}>
              <Dropdown data={subMenuRestoration} to={'restoration'} />
            </div>
          )}
        </li>
        <li onClick={handleCheckMenu}>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
            }
          >
            ПРОЕКТИ
          </NavLink>
        </li>
        <li onClick={handleCheckMenu}>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
            }
          >
            КАР'ЄРА
          </NavLink>
        </li>
        <li onClick={handleCheckMenu}>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              s.btnMenu + (isActive ? ' ' + s.btnMenuAccent : '')
            }
          >
            КОНТАКТИ
          </NavLink>
        </li>
      </ul>
      {/* <a onClick={this.showSettings} className="menu-item--small" href="/">
        Settings
      </a> */}
    </Menu>
  );
};
