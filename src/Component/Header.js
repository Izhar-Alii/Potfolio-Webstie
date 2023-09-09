import React from 'react'

function Header (props) {
  return (
    <header className='masthead' style={{backgroundImage: `url(${props.image})`}}>
      <div className='overlay'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8  col-md-10 mx-aut'>
            <div className='page-heading text-center'>
              <h1>{props.title}</h1>
              <span className='sub-heading'>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    // <header className='container mt-5 w-50'>
    //   <div className='row'>
    //     <p className='mb-5 fs-5 lh-base'>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum excepturi, quidem atque beatae facere aliquam voluptatem temporibus necessitatibus consequuntur iste reiciendis fugiat, tenetur fuga enim, eos ullam? Amet, aspernatur?
    //     </p>
    //   </div>
    //   <div className='row'>
    //     <p className='mb-5 fs-5 lh-base'>
    //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos velit cum soluta ipsa, reprehenderit magnam, dicta aspernatur vitae, commodi enim temporibus aperiam expedita doloremque dolores. Pariatur inventore repudiandae quas reprehenderit.
    //     </p>
    //   </div>
    //   <div className='row'>
    //     <p className='mb-5 fs-5 lh-base'>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus totam rerum quia aliquam consequatur, modi, dignissimos eaque, natus iusto non vitae repudiandae? Id magni earum cum vel perferendis numquam!
    //     </p>
    //   </div>
    // </header>
  )
}

export default Header;