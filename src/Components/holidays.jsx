import React from 'react'
import Navbar from './Nav/index.jsx'
import Footer from './Footer'

const Holidays = () => {
const Holidays = [
 { title: 'summer Vacation',
  duration: '1 MOnth',
  date:'10-04-2025'
},

{ title: 'Holi',
  duration: '1 Day',
  date:'march 25 2025'
},

{ title: 'Good Friday',
  duration: '1 Day',
  date:'Apr 18 2025'
},

{ title: 'Independence Day (India)',
  duration: '1 Day',
  date:'Aug 15 2025'
},

{ title: 'New Year"s Day',
  duration: '	1 Day',
  date:'Jan 1 2025'
},

{ title: 'Republic Day (India)',
  duration: '	1 Day',
  date:'	Jan 26 2025'
},
]

  return (
    <div>
      <Navbar/>
        <div style={{
          width:'60%',
          margin:'0 auto',
          padding:'64px 0'
        }}>
          <h1 style={{
            textAlign:'center'
          }}> Your Holiday's</h1>
          <table width='100%'>
            <thead>
               <tr style={{
                    background:'#2C2C2C',
                    color:'white'
               }}>
                 <th style={{padding:14}}>S/No</th>
                 <th>Title</th>
                 <th>Duration</th>
                 <th>Date</th>
               </tr>
            </thead>

            <tbody>
             {
             Holidays.map((item,index)=>(
             <tr style={{
              textAlign:'center'
             }}>
              <td style={{padding:'14px',borderBottom:'2px solid #ddd'}}>{index+1}</td>
              <td style={{padding:'14px',borderBottom:'2px solid #ddd'}}>{item.title}</td>
              <td style={{padding:'14px',borderBottom:'2px solid #ddd'}}>{item.duration}</td>
              <td style={{padding:'14px',borderBottom:'2px solid #ddd'}}>{item.date}</td>
             </tr>
             ))
             }
            </tbody>

          </table>
        </div>
      <Footer/>
    </div>
  )
}
export default Holidays