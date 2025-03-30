import { href, Link } from 'react-router-dom';
import "./nav.css"
 const menus = [
  {
    label:'home',
    href:'/',
    icons: <i className="ri-home-3-fill"></i>,
  },

  {
    label:'Teachers',
    href:'/Teachers',
    icons:<i className="ri-presentation-line"></i>,
  },

  {
    label:'Holidays',
    href:'/Holidays',
    icons: <i className="ri-calendar-fill"> </i>,
  },

  {
    label:'Contact Us',
    href:'/Contact-Us',
    icons: <i className="ri-contacts-book-3-fill"></i>,
  },
 ]


const Nav = () => {
  return (
    <div>
      <nav
        style={{
          background: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 48px',
          boxShadow: '0 8px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          {/* Use <img> for the logo */}
          <img
            src="./images/logo.png"
            alt="Logo"
            width="60px"
            height="60px"
          />
          <h1>Apna School</h1>
        </div>

        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }} >

            
           {
           menus.map(function(menu){
            return (
              <li
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '32px 24px',
            }}>
            {/* Use <Link> with the "to" attribute */}
            <Link
              to={menu.href}
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: 17,
              }}
            >
             {menu.icons}  {menu.label}
            </Link>
          </li>

            )
           })
           }

          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '32px 24px',
            }}
          >
            <Link
              to="/TalkToUs" className='talk-btn'
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: 17,
                background: 'dodgerblue',
                padding: '12px 46px',
                borderRadius: 5,
              }}
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