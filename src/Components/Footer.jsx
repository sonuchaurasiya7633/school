import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#183B4E] p-6 md:p-12 flex flex-col md:flex-row gap-8 text-white">
      <div className="flex-1">
        <h1 className="text-lg font-medium mb-4"><i className="ri-school-fill"> Success Point School</i></h1>
        <p>
          Success Point School offers quality education with a focus on values, innovation, and all-round development to shape a successful future for every student.
        </p>
      </div>

      <div className="flex-1">
        <h2 className="text-lg font-medium mb-4"><i className="ri-corner-up-right-double-line"> Useful Links</i></h2>
        <ul className="flex flex-col gap-3">
          <li>
            <Link to="/" className="text-white no-underline hover:text-gray-300">
              <i className="ri-home-4-line"> Home</i>
            </Link>
          </li>
          <li>
            <Link to="/teachers" className="text-white no-underline hover:text-gray-300">
              <i className="ri-presentation-line"> Teachers</i>
            </Link>
          </li>
          <li>
            <Link to="/holidays" className="text-white no-underline hover:text-gray-300">
              <i className="ri-calendar-fill"> Holidays</i>
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="text-white no-underline hover:text-gray-300">
              <i className="ri-contacts-book-3-fill"> Contact Us</i>
            </Link>
          </li>
          <li>
            <Link to="/TalkToUs" className="text-white no-underline hover:text-gray-300">
              <i className="ri-kakao-talk-fill"> Talk to Us</i>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <h2 className="text-lg font-medium mb-4">Social Links</h2>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              to="https://www.facebook.com/profile.php?id=61571967564365"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline hover:text-gray-300"
            >
              <i className="ri-facebook-circle-fill"> Facebook</i>
            </Link>
          </li>
          <li>
            <Link to="#" className="text-white no-underline hover:text-gray-300">
              <i className="ri-youtube-fill"> YouTube</i>
            </Link>
          </li>
          <li>
            <Link to="#" className="text-white no-underline hover:text-gray-300">
              <i className="ri-twitter-fill"> Twitter</i>
            </Link>
          </li>
          <li>
            <Link to="#" className="text-white no-underline hover:text-gray-300">
              <i className="ri-instagram-fill"> Instagram</i>
            </Link>
          </li>
          <li>
            <Link to="#" className="text-white no-underline hover:text-gray-300">
              <i className="ri-telegram-fill"> Telegram</i>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/sonu-kumar-b738a6289/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline hover:text-gray-300"
            >
              <i className="ri-linkedin-box-fill"> LinkedIn</i>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <h1 className="text-lg font-medium mb-4">Enquiry</h1>
        <form className="flex flex-col gap-3">
          <input
            name="fullName"
            placeholder="Full Name"
            required
            className="border-none rounded-md p-3 w-full bg-gray-200"
          />
          <input
            name="email"
            placeholder="example@.com"
            type="email"
            required
            className="border-none rounded-md p-3 w-full bg-gray-200"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border-none rounded-md p-3 w-full bg-gray-200"
          />
          <button
            className="border-none rounded-md p-3 bg-orange-500 text-white hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};
export default Footer;
