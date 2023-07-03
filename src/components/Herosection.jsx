import React from 'react'
import img from '../image/google-icon.svg'
import pic from '../image/Capturepy.png'


const Herosection = () => {
    return (
        <>
            <div className="row container-lg col-lg-12 ">
                <div className="col-lg-7 col-md-5 col-sm-11">
                    <h1 className="bet" >The Better Way to Save & Invest.</h1>
                    <p className="bet2">
                    PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.
                    </p>

                    <button className="bg-dark text-light rounded-2 fw-bolder p-2 " id="but">Creat Free account</button>
                    <br />
                    <div className="but2">
                    <button className="rounded-3 p-2 mx-2 bg-light border-1">❤Get on iPhone</button>  <button className="rounded-3 p-2 mx-2 bg-light border-1"> <img src={img} alt="" /> Get On Android</button>

                    </div>

                   
                </div>
                <div className="col-lg-5 col-md-3 col-sm-3">
                    <img src={pic} className='img' alt="" />

                </div>
            </div>


            
           
        </>
    )
}

export default Herosection
