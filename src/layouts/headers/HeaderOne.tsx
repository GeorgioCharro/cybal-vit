 
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    title: string;
    link: string;
  }[];
}

const menu_data: DataType[] = [

  {
    id: 1,
    title: 'About',
    link: '/about',
    has_dropdown: false,
  },
  {
    id: 2,
    title: 'Why CyberMorph',
    link: '/why',
    has_dropdown: false,
  },
  {
    id: 3,
    title: 'Vendors',
    link: '/vendors',
    has_dropdown: false,
  },
  {
    id: 4,
    title: 'Partners',
    link: '/partners',
    has_dropdown: false,
  },
  {
    id: 2,
    title: 'Blog',
    link: '/blog',
    has_dropdown: false,
  },
  {
    id: 3,
    title: 'Contact',
    link: '/contact',
    has_dropdown: false,
  },
  
]

const HeaderOne = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const handleActive = () => setOpen(!open);


  const [navTitle, setNavTitle] = useState<string>("");

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };



  return (
    <>
      <div id="navigation" className="navbar-light bg-faded site-navigation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-20 align-self-center">
              <div className="site-logo">
                <Link to="/"><img src="assets/img/cybermorph.png" alt="" /></Link>
              </div>
            </div>

            <div className="col-60 d-flex justify-content-center">
              <nav id="main-menu">
                <ul>
                  {menu_data.map((item, i) => (
                    <li key={i} className={`${item.has_dropdown ? 'menu-item-has-children' : ''}`}>
                      <Link to={item.link}>{item.title}</Link>
                      {item.has_dropdown && (
                        <ul>
                          {item?.sub_menus?.map((sub_item, index) => (
                            <li key={index}><Link to={sub_item.link}>{sub_item.title}</Link></li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>


            <div id="sm_menu_ham" onClick={handleActive} className={`${open ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={`sm_menu_outer slide ${open ? 'active' : ''}`}>
              <ul className="mobile_menu">
                {menu_data.map((item, i) => (
                  <li key={i} className={`${item.has_dropdown ? 'hasChild' : ''} ${navTitle === item.title ? "active" : ""}`} onClick={() => openMobileMenu(item.title)}>
                    <Link to={item.link}>{item.title}</Link>
                    {item.has_dropdown && (
                      <ul className="sub-menu">
                        {item?.sub_menus?.map((sub_item, index) => (
                          <li key={index} className="back" onClick={() => openMobileMenu(item.title)}><Link to={sub_item.link}>{sub_item.title}</Link></li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;