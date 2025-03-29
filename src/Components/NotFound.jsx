const NotFound = () => {
  return (
    <div style={{
      background:'#f5f5f5',
      height:'100vh',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'


    }}>
      <img src="./images/not-found.svg" alt="" width="600"/>
      <h4 style={{
        fontSize:18,
        color:'#6c63ff'
      }}>404 | Not found</h4>
    </div>
  ) 
}

export default NotFound