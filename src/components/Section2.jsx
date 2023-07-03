import React from 'react'
import img from '../image/piggy.png'
import img2 from '../image/piggybank.png'
import img3 from '../image/safelock.png'
import img4 from '../image/safelockarr.png'

const Section2 = () => {
    return (
        <div>
            <div className="row mx-auto ps-5" id="sect2">
                <div className="col-lg-3 col-md-3 col-sm-11 mx-auto p-5" id='sect2a'>
                    <h1 className="" id="sect2i">4 ways to build your savings</h1>
                    <p id="sect2ii">Earn 5%-15% when you save with any of these PiggyVest plans.</p>
                    <button className="bg-dark rounded-3 text-light fw-bold p-3">Start Saving</button>
                    </div>
                <div className="col-lg-3 col-md-3 col-sm-11 mx-auto p-3">
                    <img src={img} id="sect2iii" alt="" />
                    <h4 id="sect2iv">Automated Savings</h4>
                    <p id="sect2v">Build a dedicated savings faster on your terms automatically or manually.</p>
                    <a href=""  id="sect2vi"> <img src={img2} alt="" /> piggybank</a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-11 mx-auto p-2"><img src={img3} id="sect2vii" alt="" />
                <h4 id="sect2viii" >Fixed Savings</h4>
                <p id="sect2ix" className='col-lg-10 col-sm-10' >Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.</p>
                <a href="" id="sect2x"> <img src={img4}   alt="" /> Safe Lock</a>
                </div>
               
            </div>
            
        </div>
    )
}

export default Section2
