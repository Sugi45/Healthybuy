import React from 'react'
import img3 from '../assets/img2.png';
import img2 from '../assets/img3.png';
export default function Banner() {
  return (
<>
<div className="container">
    <div className="row">
        <div className="col-md-6">
<img src={img2} />
        </div>
        <div className="col-md-6">
        <img src={img3} />    
        </div>
    </div>
</div>



</>
  )
}
