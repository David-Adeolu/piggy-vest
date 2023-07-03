import React from 'react'
import img from '../image/PiggyVest_files/target.png'
import img2 from '../image/targetsaving.png'
import img3 from '../image/PiggyVest_files/flex.png'
import img4 from '../image/Flexn.png'



const section3 = () => {
    return (
        <div>
          <div className="row" id="sect3"> 
            <div className="col-3">

            </div>
            <div className="col-lg-3 col-md-3 col-sm-11 mx-auto sect3i ">
                <img src={img} className="sec3ii" alt="" />
                <h4 className="sec3iii">Goal-oriented Savings</h4>
                <p className="sec3iv">Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
                <a href="" className="sec3v"> <img src={img2}  alt="" /> Target Saving</a>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-11 sec3vb">
                <img src={img3} className="sec3vi" alt="" />
                <h4 className="sec3vii">Flexible Savings</h4>
                <p className="sec3viii">Save, transfer, withdraw, manage and organise your money for free at any time.</p>
                <a href=""  className="sec3ix">  <h6> <img src={img4} alt="" />Flex Naira</h6></a>


            </div>
          </div>
            
        </div>
    )
}

export default section3
