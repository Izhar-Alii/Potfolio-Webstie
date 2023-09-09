import React from 'react'

function Footer() {
  return (
    <footer className='py-4 text-center mt-5'>
      <div className='mb-4'>
        <i className="fa fa-twitter me-3" style={{fontSize:"60px"}}></i>
        <i className="fa fa-facebook-f me-3" style={{fontSize:"60px"}}></i>
        <i className="fa fa-github me-3" style={{fontSize:"60px"}}></i>
      </div>
      <p className='me-3'>&copy; 2023 Izhar Ali. All rights reserved.</p>
    </footer>
  )
}

export default Footer