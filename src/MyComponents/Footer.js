import React from 'react'


const Footer = () => {
  let footerStyle={
    position: "relative",
    top:"10vh",
    width:"100%",
    


  }
  return (
    
    <footer className=" text-dark py-3" style={footerStyle} >
        
        <p className="text-center" style={{ fontWeight: 'bold',fontSize:'0.8em'}}>
        Copyright &copy; bhavya1999sharma@gmail.com
        
        </p>
       
      
    </footer>
  )
}

export default Footer
