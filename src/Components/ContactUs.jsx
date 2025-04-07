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
      <div className="flex flex-col md:flex-row p-4 md:p-16 gap-8">
        <img src="./images/contact.svg" className="w-full md:w-1/2 object-contain" alt=" " />
        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label className="text-base md:text-lg font-medium">Fullname</label>
              <input 
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                type="text"
                name="fullname"
                placeholder="Enter your Fullname"
                className="border-2 border-gray-300 rounded-md p-2 md:p-3 text-sm md:text-base"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base md:text-lg font-medium">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                placeholder="example@email.com"
                className="border-2 border-gray-300 rounded-md p-2 md:p-3 text-sm md:text-base"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base md:text-lg font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                name="message"
                placeholder="Write your query or message here"
                rows={4}
                className="border-2 border-gray-300 rounded-md p-2 md:p-3 text-sm md:text-base"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-md text-sm md:text-base hover:bg-indigo-700"
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