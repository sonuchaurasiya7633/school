import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "60px 100px",
        background: "#183B4E",
        display: "flex",
        gap: 32,
      }}
    >
      <div style={{ width: "100%" }}>
        <h1 style={{ color: "#f5f5f5", fontWeight: "500" }}><i class="ri-school-fill"> Apna School</i></h1>
        <p style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vehicula, nunc at sollicitudin ultrices, odio nisl varius nisl, nec
          feugiat justo dolor nec.
        </p>
      </div>

      <div style={{ width: "100%" }}>
        <h2 style={{ color: "#f5f5f5", fontWeight: "500" }}><i class="ri-corner-up-right-double-line"> Useful Links</i></h2>
        <ul
          style={{
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            listStyleType: "none",
          }}
        >
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <i class="ri-home-4-line"> Home</i>
            </Link>
          </li>
          <li>
            <Link to="/teachers" style={{ color: "white", textDecoration: "none" }}>
            <i class="ri-presentation-line"> Teachers</i> 
            </Link>
          </li>
          <li>
            <Link to="/holidays" style={{ color: "white", textDecoration: "none" }}>
            <i class="ri-calendar-fill"> Holidays</i>
            </Link>
          </li>
          <li style={{
            
          }}>
            <Link to="/contact-us" style={{ color: "white", textDecoration: "none" }}>
            <i class="ri-contacts-book-3-fill"> Contact Us</i>
            </Link>
          </li>
          <li>
            <Link to="/TalkToUs" style={{ color: "white", textDecoration: "none" }}>
            <i class="ri-kakao-talk-fill"> Talk to Us</i> 
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ width: "100%" }}>
        <h2 style={{ color: "#f5f5f5", fontWeight: "500" }}>Social Links</h2>
        <ul
          style={{
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            listStyleType: "none",
            gap: 12,
          }}
        >
          <li>
            <Link
              to="https://www.facebook.com/profile.php?id=61571967564365"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
             <i class="ri-facebook-circle-fill">  Facebook </i> 
            </Link>
          </li>
          <li>
            <Link to="#" style={{ color: "white", textDecoration: "none" }}>
            <i class="ri-youtube-fill">  YouTube</i>
            </Link>
          </li>
          <li>
            <Link to="#" style={{ color: "white", textDecoration: "none" }}>
            <i class="ri-twitter-fill">  Twitter</i>
            </Link>
          </li>
          <li>
            <Link to="#" style={{ color: "white", textDecoration: "none" }}>
            <i class="ri-instagram-fill">  Instagram</i>
            </Link>
          </li>
          <li>
            <Link href="#" style={{ color: "white", textDecoration: "none" }}>
            <i class="ri-telegram-fill">  Telegram</i> 
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/sonu-kumar-b738a6289/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              <i class="ri-linkedin-box-fill">  LinkedIn</i>
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ width: "100%" }}>
        <h1 style={{ color: "#f5f5f5", fontWeight: "500" }}>Enquiry</h1>
        <form action="">
          <input
            name="fullName"
            placeholder="Full Name"
            required
            style={{
              border: "none",
              borderRadius: 4,
              padding: 12,
              width: "100%",
              background: "lightgray",
              marginBottom: 12,
            }}
          />
          <input
            name="email"
            placeholder="example@.com"
            type="email"
            required
            style={{
              border: "none",
              borderRadius: 4,
              padding: 12,
              width: "100%",
              background: "lightgray",
              marginBottom: 12,
            }}
          />
          <textarea
            name="message"
            placeholder="Message"
            style={{
              border: "none",
              borderRadius: 4,
              padding: 12,
              width: "100%",
              background: "lightgray",
              marginBottom: 12,
            }}
          />
          <button
            style={{
              border: "none",
              borderRadius: 4,
              padding: 12,
              width: "fit-content",
              background: "orange",
              color: "white",
              margin: "12px 24px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
