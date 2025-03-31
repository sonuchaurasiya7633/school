import { useState } from 'react';
import Swal from 'sweetalert2'
import React from 'react';
import Nav from './Nav/index.jsx';
import Footer from './Footer';

const ContactUs = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullname, email, message); 
    Swal.fire({
      icon:'success',
      title:'Congrats!',
      text:'Thank You ! we will try to reach you soon'
    })
  };

  return (
    <div>
      <Nav />
      <div
        style={{
          display: 'flex',
          padding: 64,
          gap: 34,
        }}
      >
        <img src="./images/contact.svg" width="50%" alt=" " />
        <div
          style={{
            width: '50%',
          }}
        >
          <form
            onSubmit={handleSubmit} // Updated to use handleSubmit
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 9,
              }}
            >
              <label
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Fullname
              </label>
              <input 
              value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                type="text"
                name="fullname"
                placeholder="Enter your Fullname"
                style={{
                  border: '2px solid #ccc',
                  borderRadius: 5,
                  padding: 14,
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 9,
              }}
            >
              <label
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Email
              </label>
              <input
                 value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                placeholder="example@email.com"
                style={{
                  border: '2px solid #ccc',
                  borderRadius: 5,
                  padding: 14,
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 9,
              }}
            >
              <label
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Message
              </label>
              <textarea
                value={message} // for default
                onChange={(e) => setMessage(e.target.value)}
                required
                name="message"
                placeholder="Write your query or message here"
                rows={4}
                style={{
                  border: '2px solid #ccc',
                  borderRadius: 5,
                  padding: 14,
                }}
              />
            </div>
            <button
              type="submit" // Ensure the button is of type "submit"
              style={{
                border: 'none',
                width: 'fit-content',
                padding: '14px 32px',
                borderRadius: 4,
                background: '#6c63ff',
                color: 'white',
                fontWeight: 700,
              }}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;