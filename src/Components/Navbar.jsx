const Navbar = () =>{
  return(
    <div>

     <nav style={{
     background:'white',
      display:"flex",justifyContent:"space-between",
      padding:" 0 48px",
      boxShadow:"0 8px 8px rgba(0, 0, 0, 0.1)"
      }}>
      <div style={{
        display:"flex",
        alignItems:"center",
        gap:20
      }}>
       <img 
           src="./images/logo.png"
           width="60px"
           height="60px"
       />
       <h1>Apna School</h1>
      </div>
       
       <ul style={{
        display:"flex",
        listStyle:"none",
        padding:0,
        margin:0,
        }}>
        <li style={{
          display:'flex',
          alignItems:"center",
          padding:'32px 24px'

        }}>
          <a href="#" style={{
          textDecoration:"none",
          color:"black",
          fontSize:17
        }}>Home</a>
        </li>
        
        <li style={{
          display:'flex',
          alignItems:"center",
          padding:'16px 24px'

        }}>
          <a href="#" style={{
          textDecoration:"none",
          color:"black",
          fontSize:17
        }}>teachers</a>
        </li>

        <li style={{
          display:'flex',
          alignItems:"center",
          padding:'16px 24px'

        }}>
          <a href="#" style={{
          textDecoration:"none",
          color:"black",
          fontSize:17
        }}>holidays </a>
        </li>

        <li style={{
          display:'flex',
          alignItems:"center",
          padding:'32px 24px'

        }}>
          <a href="#" style={{
          textDecoration:"none",
          color:"black",
          fontSize:17
        }}>Contact Us</a>
        </li>

        <li style={{
          display:'flex',
          alignItems:"center",
          padding:'32px 24px'

        }}>
          <a href="#" style={{
          textDecoration:"none",
          color:"white",
          fontSize:17,
          background:'dodgerblue',
          padding:'12px 46px',
          borderRadius:5

        }}>talk to Us</a>
        </li>
       </ul>

     </nav>

    </div>
  )
}
export default Navbar