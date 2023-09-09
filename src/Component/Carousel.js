import React from 'react'

export default function 
() {
  return (
    <div>
        <h2 className='text-center mt-5'>Portfolio</h2>
        <div id="carouselExampleCaptions" className="carousel slide mt-2">
            <div className="carousel-inner" style={{height:"500px"}}>
                <div className="carousel-item active" style={{width: "100%",height:"100%"}}>
                <img src="coastal.jpg" className="d-block w-100 img-fluid" alt="..." style={{width: "100%",height:"100%"}}/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div className="carousel-item" style={{width: "100%",height:"100%"}}>
                <img src="greeny.jpg" className="d-block w-100 h-100" alt="..." style={{width: "100%",height:"100%"}}/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div className="carousel-item" style={{width: "100%",height:"100%"}}>
                <img src="lonely boy.jpg" className="d-block w-100" alt="..." style={{width: "100%",height:"100%"}}/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}
