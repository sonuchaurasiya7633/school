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
     <Nav/>
      <div>
        <header style={{
          height:280,
          backgroundImage: 'linear-gradient( 85.2deg,  rgba(33,3,40,1) 7.5%, rgba(65,5,72,1) 88.7% )',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <h1 style={{
            fontSize:60,
            color:'white'
          }}><i class="ri-user-voice-fill" style={{
            marginRight:'89px'
          }}> Teachers</i> </h1>
        </header>

        <section style={{
          width:'80%',
          margin: '0 auto',
          padding:'80px 0',
          display:'flex',
          flexWrap:'wrap',
          columnGap:'5%',
          roeGap:48
        }}>

           {
           teachers.map(function(item,index) {
             return (
              <div style={{
                width:'20%'
              }}  key = {index}>
              <img src={item.image} width="100%" alt="Teacher"/>
              <h1 style={{padding:0, marginBottom:4}}> {item.name}</h1>
              <p style={{padding:0, margin:0 , color:'gray'}}>{item.qua}</p>
              </div>
             )
           })
           }
        </section>
      </div>
     <Footer/>
   </div>
  )
}
export default Teachers