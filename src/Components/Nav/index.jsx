import { Link } from 'react-router-dom';
import "./nav.css";

const menus = [
  {
    label: 'home',
    href: '/',
    icons: <i className="ri-home-3-fill"></i>,
  },
  {
    label: 'Teachers',
    href: '/Teachers',
    icons: <i className="ri-presentation-line"></i>,
  },
  {
    label: 'Holidays',
    href: '/Holidays',
    icons: <i className="ri-calendar-fill"></i>,
  },
  {
    label: 'Contact Us',
    href: '/Contact-Us',
    icons: <i className="ri-contacts-book-3-fill"></i>,
  },
];

const Nav = () => {
  return (
    <div className="sticky top-0 left-0 z-50">
      <nav className="bg-white flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-4 shadow-md">
        <div className="flex items-center gap-4 md:gap-6">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <h1 className="text-lg md:text-2xl font-bold">Success Point School</h1>
        </div>

        <ul className="flex flex-col md:flex-row list-none p-0 m-0 gap-4 md:gap-6">
          {menus.map((menu, index) => (
            <li key={index} className="flex items-center">
              <Link
                to={menu.href}
                className="flex items-center text-black text-sm md:text-base no-underline hover:text-blue-500"
              >
                {menu.icons} <span className="ml-2">{menu.label}</span>
              </Link>
            </li>
          ))}

          <li className="flex items-center">
            <Link
              to="/TalkToUs"
              className="talk-btn text-white text-sm md:text-base bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md"
            >
              Talk to Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;


