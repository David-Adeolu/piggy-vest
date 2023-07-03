import React from 'react'
import image from '../image/compliance-f24fa70ce98ff6f4dcdfddeefc2bdd5a.png';
import image2 from '../image/piggyicon.svg';
import image3 from '../image/capture 2.png'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
const Section7 = () => {
  return (
    <div>
        <div className="row mx-auto">
            <div className="col-3" id='sect7a'>
           <div className="py-4"> <img src={image2}id='sect7i'  alt="" /></div>
              <div className=""><img src={image} id='sect7ii' alt="" /></div>
              </div>
            <div className="col-2 py-4">
              <p className='p1'>Products</p>
              <p className='p2'>Piggybank</p>
              <p className='p3'>Investiment</p>
              <p className='p4'>Safelock</p>
              <p className='p5'>Target Saving</p>
              <p className='p6'>Flex Naira</p>
            </div>
            <div className="col-2 py-4">
              <p className='pa'>Company</p>
              <p className='pb'>About</p>
              <p className='pc'>FAQs</p>
              <p className='pd'>Blog</p>
            </div>
            <div className="col-2 py-4">
              <p className='pi'>Legal</p>
              <p className='pii'>Term</p>
              <p className='piii'>Privacy</p>
              <p className='piv'>Security</p>
            </div>
            <div className="col-3 pe-5 py-4 ">
              <img src={image3} alt="" />
              <p className='pv'>Tesmot house, Abdulrahman Okene</p>
              <p className='pvi'>close, Victoria Island, Lagos, Nigeria.</p>
              <p className='pvii'>contact@piggyvest.com</p>
              <p className='pviii'>+234 700 933 933 933</p>
            </div>
            {/* <FontAwesomeIcon icon={faCoffee} /> */}
            {/* <FontAwesomeIcon icon={faUser} /> */}

            {/* <i class="fa-solid fa-user"></i> */}



        </div>



    </div>
  )
}

export default Section7