import React from 'react'

function Contactus() {
  return (
    <div className='container d-flex flex-column mt-4 mb-4'>
        <div className='row justify-content-center'>
            <form className='col-lg-5 col-6'>
                <h2 className='text-center'>Contact Me</h2>
                <div>
                    <input type="text" className='w-100 mb-2 p-2' placeholder='Your Name' />
                </div>
                <div className='mb-2'>
                    <input type="email" className='w-100 mb-2 p-2' placeholder="Your Email"/>
                </div>
                <div className='mb-2'>
                    <textarea placeholder="Your Message" className='w-100 mb-2 p-2'></textarea>
                </div>
                <div>    
                    <button type="submit" className='w-100 mb-2 p-2 btnContact text-white'>Send Message</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contactus
