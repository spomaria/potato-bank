import React from 'react';
import './OrderForm.css';

function Invoice(props){
  return (props.trigger) ? (
    <div className='form'>
        <div className="form-inner">
            <button className="close" onClick={() => props.setTrigger(false)}>Close</button>
            {props.children}
        </div>
    </div>
  ) :"" ;
}

export default Invoice