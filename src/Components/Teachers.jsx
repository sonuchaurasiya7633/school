import React from 'react'
import Nav from './Nav/index.jsx'
import Footer from './Footer'

const teachers = [
  {
    image:'./images/a.jpeg',
    name: 'Soni Singh',
    qua:'MCA (Indian University)'
  },

  {
    image:'./images/b.jpeg',
    name: 'Kalpna Singh',
    qua:'BCA (Bhopal University)'
  },

  {
    image:'./images/c.jpeg',
    name: 'Anjali kumari',
    qua:'M.Tech (Indian University)'
  },

  {
    image:'./images/d.jpeg',
    name: 'Mamta Singh',
    qua:'MCA (Delhi University)'
  },

  {
    image:'./images/e.jpeg',
    name: 'Shreya Kumari',
    qua:'BCA (Jaipur University)'
  },

  {
    image:'./images/f.jpeg',
    name: 'Shreya Kumari',
    qua:'BCA (Jaipur University)'
  },

  {
    image:'./images/g.jpeg',
    name: 'Sangeeta seth',
    qua:'B.com (Indian University)'
  },

  {
    image:'./images/h.jpeg',
    name: 'Kalpna Negi',
    qua:'BCA (Bhopal University)'
  },

  {
    image:'./images/i.jpeg',
    name: 'ALakh Sir',
    qua:'M.Tech (Indian University)'
  },

  {
    image:'./images/j.jpeg',
    name: 'Sita Rathor',
    qua:'MCA (Delhi University)'
  },

  {
    image:'./images/k.jpeg',
    name: 'Karan Sir',
    qua:'B.Tech (Jaipur University)'
  },

  {
    image:'./images/l.jpeg',
    name: 'Sonu Kumar',
    qua:'BCA (Jaipur University)'
  },
]

const Teachers = () => {
  return (
    <div>
      <Nav />
      <div>
        <header className="h-72 bg-gradient-to-r from-purple-900 to-purple-700 flex justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-white flex items-center">
            <i className="ri-user-voice-fill mr-4"></i> Teachers
          </h1>
        </header>

        <section className="w-11/12 mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teachers.map((item, index) => (
            <div className="w-full" key={index}>
              <img src={item.image} alt="Teacher" className="w-full rounded-md" />
              <h1 className="text-lg font-semibold mt-2">{item.name}</h1>
              <p className="text-gray-500 text-sm">{item.qua}</p>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  )
}
export default Teachers