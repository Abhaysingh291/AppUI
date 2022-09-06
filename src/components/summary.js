import React from 'react'
import { useLocation, Link } from 'react-router-dom';
const Summary = () => {
  const location = useLocation();
  return (<div style={{display:"flex",flexDirection: 'column',justifyContent:"center",alignItems:"center",height:"100vh",color:"white"}}>
    <div className='container mt-3'>
      <div
        dangerouslySetInnerHTML={{ __html: location.state.decription }}
      ></div>
     
    </div>
    <Link to="/BookTicket" className='summary' style={{padding:'5px',background:"red"}} state={{ name: location.state.name}}>Book A ticket</Link>
  </div>
  )
}
export default Summary;