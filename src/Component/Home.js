import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container d-flex flex-column mt-5'>
        <div className='row justify-content-center'>
            <div className='col-lg-6 col-12'>
                <Link to="#" className='link text-black'>
                    You are never too old to set another goal or to dream a new dream.
                </Link>
                <p className='fs-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, eum.</p>
                <p>
                    date and writer
                </p>
                <hr />
            </div>
        </div>
        <div className='row justify-content-center mt-5'>
            <div className='col-lg-6 col-12'>
                <Link to="#" className='link text-black'>
                    The only limit to our realization of tomorrow will be our doubts of today.
                </Link>
                <p className='fs-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, eum.</p>
                <p>date and writer</p>
                <hr />
            </div>
        </div>
        <div className='row justify-content-center mt-5'>
            <div className='col-lg-6 col-12'>
                <Link to="#" className='link text-black'>
                    It does not matter how slowly you go as long as you do not stop.
                </Link>
                <p className='fs-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, eum.</p>
                <p>date and writer</p>
                <hr />
            </div>
        </div>
        <div className='row justify-content-center mt-5'>
            <div className='col-lg-6 col-12'>
                <Link className='link text-black'>
                    Challenges are what make life interesting, and overcoming them is what makes life meaningful.
                </Link>
                <p className='fs-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, eum.</p>
                <p>date and writer</p>
                <hr></hr>
            </div>
        </div>
        <div className='row justify-content-end'>
            <div className='col-lg-4 col-12'>
                <a href="#" className='btn btn-success p-2 btn'>older posts &#x2192;</a>
            </div>
        </div>
        <hr></hr>
    </div>
  )
}

export default Home