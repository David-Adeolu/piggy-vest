import React from 'react'
import image from '../image/piggybank.png'
import image2 from '../image/capture2.png'

const Section4b = () => {
    return (
        <div>
            <div className="row " id='sect4'>
                <div className="col-lg-7 col-md-5 col-sm-11" id='sect4i'>
                    <h1 id='sect4ii'>Meet Saver</h1>
                    <a href="" id='sect4iii'><h6>  <img src={image}id='sect4iv' alt="" />  Meet Saver of the Month</h6></a>
                </div>
                <div className="col-lg-5 col-md-3 col-sm-11" id='sect4V'>
                    <img src={image2} id='sect4Vi' alt="" />
                </div>
            </div>
        </div>
      )
}

export default Section4b