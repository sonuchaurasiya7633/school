const Footer= () =>{
  return(
    <footer style={{
       padding:" 60px 100px",
       background:"#183B4E",
       display:"flex",
       gap:32
    }}>
    <div style={{width:"100%"}}>
      <h1 style={{
      color:"#f5f5f5",
      fontWeight:"500"
      }}>Apna School</h1>
      <p style={{
        color:"white"
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, nunc at sollicitudin ultrices, odio nisl varius nisl, nec feugiat justo dolor nec</p>
    </div>

    <div style={{width:"100%"}}>
      <h2 style={{
      color:"#f5f5f5",
      fontWeight:"500"
      }}>Usefull Links</h2>
      <ul style={{
        padding:0,
        margin:0,
        display:"flex",
        flexDirection:"column",
        gap:12

      }}>
        <li>
          <a href="#" style={{
            color:"white",
            textDecoration:"none", 
          }}>Home</a>
        </li>

        <li>
          <a href="#" style={{
            color:"white",
            textDecoration:"none", 
          }}>Home</a>
        </li>
         
        <li>
          <a href="#" style={{
            color:"white",
            textDecoration:"none", 
          }}>Teachers</a>
        </li>

        <li>
          <a href="#" style={{
            color:"white",
            textDecoration:"none", 
          }}>Holidays</a>
        </li>

        <li>
          <a href="#" style={{
            color:"white",
            textDecoration:"none", 
          }}>contact Us</a>
        </li>

        <li>
          <a href="#" style={{
            color:"white",
            textDecoration:"none", 
          }}>Talk to Us</a>
        </li>
      </ul>
    </div>

    <div style={{width:"100%"}}>
      <h2 style={{
      color:"#f5f5f5",
      fontWeight:"500"
      }}>Social Links</h2>
      <ul style={{
        padding:0,
        margin:0,
        display:"flex",
        flexDirection:"column",
        gap:12

      }}>
        <li>
          <a href="#" style={{
            color:"white",
            textDecoration:"none", 
          }}>facebook</a>
        </li>

        <li>
          <a href="#" style={{
            color:"white",
            textDecoration:"none", 
          }}>Whatsapp</a>
        </li>
         
        <li>
          <a href="#" style={{
            color:"white",
            textDecoration:"none", 
          }}>Twitter</a>
        </li>

        <li>
          <a href="#" style={{
            color:"white",
            textDecoration:"none", 
          }}>Instagram</a>
        </li>

        <li>
          <a href="#" style={{
            color:"white",
            textDecoration:"none", 
          }}>Telegram</a>
        </li>

        <li>
          <a href="#" style={{
            color:"white",
            textDecoration:"none", 
          }}>linkedin</a>
        </li>
      </ul>
      
    </div>

    <div style={{width:"100%"}}>
      <h1 style={{
      color:"#f5f5f5",
      fontWeight:"500"
      }}>Enquiry</h1>
      
      <form action="">
        <input name ="fullName" placeholder="Full Name" required style={{
          border:"none",
          borderRadius:4,
          padding:12,
          width:"100%",
          background:"lightgray",
          marginBottom:12
        }}/>

<input name ="email" placeholder="example@.com" type="email" required style={{
          border:"none",
          borderRadius:4,
          padding:12,
          width:"100%",
          background:"lightgray",
          marginBottom:12
        }}/>

<textarea name ="message" placeholder="Message" style={{
          border:"none",
          borderRadius:4,
          padding:12,
          width:"100%",
          background:"lightgray",
          marginBottom:12
        }}/>

        <button style={{
          border:"none",
          borderRadius:4,
          padding:12,
          width:"fit-content",
          background:"orange",
          color:"white",
          marginBottom:"12px 24px"
        }}>Submit</button>
      </form>
    </div>
    </footer>
  )
}
export default Footer