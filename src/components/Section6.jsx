import React from 'react'
import img1 from '../image/image.png'
import img2 from '../image/image1.png'
import img3 from '../image/image2.png'

const Section6 = () => {
  return (
    <div>
        <div className=" d-flex mx-auto"id='sect6'>
            <div className="mx-5" id='sect6i'><h1>As featured in</h1></div>
            <div className="mx-5" ><img src={img1} id='sect6ii' alt="" /></div>
            <div className="mx-5" ><img src={img2} id='sect6iii' alt="" /></div>
            <div className="mx-5" ><img src={img3} id='sect6iv' alt="" /></div>



        </div>


    </div>
  )
}

export default Section6