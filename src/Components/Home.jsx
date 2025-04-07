import React from 'react'
import Nav from './Nav/index.jsx'
import Footer from './Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Home = () =>{
  return(
    <div>
      <Nav/>
      <div>
       <header className='grid grid-cols-1 md:grid-cols-2 p-4 md:p-12 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500'>
        <div>
          <img src='./images/student.jpg' alt='' className='rounded-full w-full md:w-3/4 border-4 animate-pulse transition-all duration-1000 ease-in-out hover:scale-150 hover:rotate-12' />
        </div>
        <div className='flex flex-col gap-4 justify-center'>
          <h1 className='text-2xl md:text-5xl font-bold text-white'>"Say Hello! Success Point"</h1>
          <p className='text-base md:text-xl font-semibold'>Enjoy complete digital learning experience with Success Point School</p>
          <div className='flex flex-col md:flex-row gap-4'>
            <button className='bg-[#100d22] text-white px-4 py-2 md:px-8 md:py-3 rounded-md font-semibold text-sm md:text-lg hover:bg-orange-600'>Learn More</button>
            <button className='border border-[#100d22] text-[#100d22] px-4 py-2 md:px-8 md:py-3 rounded-md font-semibold text-sm md:text-lg hover:bg-white'>Watch Video</button>
          </div>
        </div>
       </header>
   
        <div className='p-4 md:p-12'>
          <h1 className='text-center text-xl md:text-3xl font-bold'>Benefits & Advantages</h1>
          <p className='text-gray-600 text-center mt-2 text-sm md:text-base'>
            सक्सेस पॉइंट स्कूल गुणवत्तापूर्ण शिक्षा, विशेषज्ञ मार्गदर्शन और सुरक्षित एवं आधुनिक वातावरण में विद्यार्थियों के सर्वांगीण विकास को सुनिश्चित करता है।
          </p>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-6'>
            <div className='shadow-lg border rounded-md p-4 text-center'>
              <i className="ri-artboard-line text-3xl md:text-5xl text-purple-700"></i>
              <h1 className='text-lg md:text-xl font-semibold mt-2'>Great Faculty</h1>
              <p className='text-gray-600 text-sm md:text-base'>
                सक्सेस पॉइंट स्कूल के शिक्षक अनुभवी, समर्पित और प्रेरणादायक हैं।
              </p>
            </div>

            <div className='shadow-lg border rounded-md p-4 text-center'>
              <i className="ri-edit-2-line text-3xl md:text-5xl text-indigo-600"></i>
              <h1 className='text-lg md:text-xl font-semibold mt-2'>Latest Curriculum</h1>
              <p className='text-gray-600 text-sm md:text-base'>
                सक्सेस पॉइंट स्कूल नवीनतम और आधुनिक पाठ्यक्रम अपनाता है।
              </p>
            </div>

            <div className='shadow-lg border rounded-md p-4 text-center'>
              <i className="ri-tree-line text-3xl md:text-5xl text-green-800">🍃</i>
              <h1 className='text-lg md:text-xl font-semibold mt-2'>Green Enviroment</h1>
              <p className='text-gray-600 text-sm md:text-base'>
                सक्सेस पॉइंट स्कूल एक स्वच्छ, हरा-भरा और शांत वातावरण प्रदान करता है।
              </p>
            </div>

            <div className='shadow-lg border rounded-md p-4 text-center'>
              <i className="ri-send-plane-line text-3xl md:text-5xl text-teal-600"></i>
              <h1 className='text-lg md:text-xl font-semibold mt-2'>Future Planning</h1>
              <p className='text-gray-600 text-sm md:text-base'>
                सक्सेस पॉइंट स्कूल में हम छात्रों की भविष्य की योजनाओं पर विशेष ध्यान देते हैं।
              </p>
            </div>
          </div>
        </div>

        <div className='p-4 md:p-12 bg-gradient-to-t from-sky-500 to-indigo-500'>
          <h1 className='text-center text-xl md:text-2xl font-bold text-white'>What Makes Us Unique!</h1>
          <p className='text-center text-white mt-2 text-sm md:text-base'>
            सक्सेस पॉइंट स्कूल में शिक्षा सिर्फ किताबों तक सीमित नहीं है।
          </p>
          <div className='flex flex-wrap justify-center gap-4 mt-4'>
            <Swiper className="mySwiper flex justify-center items-center">
              <SwiperSlide>
                <img src='./images/1.jpeg' alt='' className='w-16 h-16 md:w-24 md:h-24 object-cover' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='./images/2.jpeg' alt='' className='w-16 h-16 md:w-24 md:h-24 object-cover' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='./images/3.jpeg' alt='' className='w-16 h-16 md:w-24 md:h-24 object-cover' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='./images/4.jpeg' alt='' className='w-16 h-16 md:w-24 md:h-24 object-cover' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='./images/5.jpeg' alt='' className='w-16 h-16 md:w-24 md:h-24 object-cover' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='./images/6.jpeg' alt='' className='w-16 h-16 md:w-24 md:h-24 object-cover' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='./images/7.jpeg' alt='' className='w-16 h-16 md:w-24 md:h-24 object-cover' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='./images/8.jpeg' alt='' className='w-16 h-16 md:w-24 md:h-24 object-cover' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='./images/9.jpeg' alt='' className='w-16 h-16 md:w-24 md:h-24 object-cover' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Home