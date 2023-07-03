import React from 'react'
import img from '../image/security.png'

const section1 = () => {
    return (
        <div>
           <div className="row " id="sect1">
           <div className="col-lg-3 col-md-5 col-sm-11 "><img src={img} className="imagy" alt="" /></div>
            <div className="col-lg-6 col-md-5 col-sm-12 mx-auto pe-5" id="pdf">
                <h1 id="df1">Your security is our priority</h1>
                <p id="df2">PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>
                <div className="df3"><a id="lem" href="">Learn More</a></div>
            </div>
           </div>

        </div>
    )
}

export default section1
