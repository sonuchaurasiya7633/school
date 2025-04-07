import React from 'react';
import Navbar from './Nav/index.jsx';
import Footer from './Footer';

const Holidays = () => {
  const Holidays = [
    { title: 'Summer Vacation', duration: '1 Month', date: '10-04-2025' },
    { title: 'Holi', duration: '1 Day', date: 'March 25 2025' },
    { title: 'Good Friday', duration: '1 Day', date: 'Apr 18 2025' },
    { title: 'Independence Day (India)', duration: '1 Day', date: 'Aug 15 2025' },
    { title: "New Year's Day", duration: '1 Day', date: 'Jan 1 2025' },
    { title: 'Republic Day (India)', duration: '1 Day', date: 'Jan 26 2025' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-center text-2xl font-bold mb-6">Your Holidays</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4 border border-gray-300">S/No</th>
                <th className="p-4 border border-gray-300">Title</th>
                <th className="p-4 border border-gray-300">Duration</th>
                <th className="p-4 border border-gray-300">Date</th>
              </tr>
            </thead>
            <tbody>
              {Holidays.map((item, index) => (
                <tr key={index} className="text-center odd:bg-gray-100 even:bg-white">
                  <td className="p-4 border border-gray-300">{index + 1}</td>
                  <td className="p-4 border border-gray-300">{item.title}</td>
                  <td className="p-4 border border-gray-300">{item.duration}</td>
                  <td className="p-4 border border-gray-300">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Holidays;