import { Link } from 'react-router-dom';

const Navbar = () => {
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
          }}
        >
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '32px 24px',
            }}
          >
            {/* Use <Link> with the "to" attribute */}
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: 17,
              }}
            >
              Home
            </Link>
          </li>

          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 24px',
            }}
          >
            <Link
              to="/Teachers"
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: 17,
              }}
            >
              Teachers
            </Link>
          </li>

          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 24px',
            }}
          >
            <Link
              to="/Holidays"
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: 17,
              }}
            >
              Holidays
            </Link>
          </li>

          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '32px 24px',
            }}
          >
            <Link
              to="/Contact-Us"
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: 17,
              }}
            >
              Contact Us
            </Link>
          </li>

          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '32px 24px',
            }}
          >
            <Link
              to="/TalkToUs"
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

export default Navbar;