import React from 'react'
import image from '../image/google-icon.svg'

const Section5 = () => {
  return (
    <div>
       <div className="row">
       <div className="col-4"></div>
        <div className="col-4 mx-auto p-5" id='sect5'>
            <h1 className='py-2' id='sect5i'>4 Million + customers</h1>
            <p className='py-2' id='sect5ii'>Since launching in 2016, over 4,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable.</p>
            <button className="bg-dark text-light rounded-2 fw-bold p-2 " id="">Creat Free account</button>

            <div className="py-5">
                    <button className="rounded-3 p-2 mx-2 bg-light border-1">❤Get on iPhone</button>  <button className="rounded-3 p-2 mx-2 bg-light border-1"> <img src={image} alt="" /> Get On Android</button>

                    </div>
                    <div className="col-4"></div>

                    


        </div>
        

       </div>

    </div>
  )
}

export default Section5