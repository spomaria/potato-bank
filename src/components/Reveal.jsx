import React from 'react';
import './Reveal.css';
import Images from './Images';
import img1 from '../images/img3.jpeg';


function Image(){
    console.log(img1);
    return(
        <div>
            <img src={img1} alt="potato image" />
        </div>
    );
}


const Reveal = () => {

  return (
    <div className='reveal'>
        <div className='welcome'>
            <h1>Welcome to <span className='bolder'>Jos<span className='bolder' id='brown'>Potato</span></span></h1>
            <p>We supply potato grown on the Jos Plateau</p>
            <p>If you are a buyer or seller, kindly check out our services section</p>
        </div>
        <div id='slideshow'>
            <Image />
        </div>
    </div>
  )
}

export default Reveal;