import React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import './Services.css';
import OrderForm from './OrderForm';
import Invoice from './Invoice';

const Services = () => {
  
  // setting up function to enable pop up forms
  const [buttonPopup, setButtonPopup] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [selected, setSelected] = useState("");
  const [choice, setChoice] = useState("");

  return (
    <div>
      <div className="services">
        <div className="buy-potato">
          <h1>Do you wish to buy Potato? You can place your order here.</h1>
          <br />
          <button onClick={() => setButtonPopup(true)}>Order Here</button>
          <OrderForm trigger={buttonPopup} setTrigger = {setButtonPopup}>
            <h3>Order Form</h3>
            <br />
            <form>
              <PotatoVariety selected ={selected} setSelected ={setSelected}/>
              <PotatoCategory choice ={choice} setChoice ={setChoice}/>  
              Price/Kg <input type="text" /> <br /> <br />
              Quantity (Kg) <input type="text" placeholder='please input a number'/> <br /> <br />
              Email Address: <input type='email' placeholder='youremail@email.com'/> <br /><br />
              Phone Number: <input type="phone" placeholder='+234806 000 1000'/> <br /><br />
              Preffered Pick Up Date <input type="date" /> <br /> <br />

            </form>
            <button className='proceed'>Proceed to Pay</button>
          </OrderForm>
        </div>
        <div className="sell-potato">
          <h1>Do you have Potato for sale? We will be happy to buy from you.</h1>
          <br />
          <button onClick={() => setInvoice(true)}>Sell Here</button>
          <Invoice trigger={invoice} setTrigger = {setInvoice}>
            <h3>Generate Invoice</h3>
            <br />
            <form>
              <PotatoVariety selected ={selected} setSelected ={setSelected}/>
              <PotatoCategory choice ={choice} setChoice ={setChoice}/>  
              Price/Kg <input type="text" /> <br /> <br />
              Quantity (Kg) <input type="text" placeholder='please input a number'/> <br /> <br />
              Email Address: <input type='email' placeholder='youremail@email.com'/> <br /><br />
              Phone Number: <input type="phone" placeholder='+234806 000 1000'/> <br /><br />
              Proposed Transaction Date <input type="date" /> <br /> <br />
              Farm Location <input type="text" placeholder='Village and LGA'/> <br /> <br />
            </form>
            <button className='proceed'>Set Payment Method</button>
          </Invoice>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

// This function enables a dropdown menu
// for the potato variety
function PotatoVariety({selected, setSelected}){
    const [isActive, setIsActive] = useState(false);
    const varieties = ["Caruso", "Nicola",
      "Marabel", "Connect", "Lady Christyl"];

    return(
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => 
          setIsActive(!isActive)}>
            {selected}
            <span className='fas fa-caret-down'></span>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {varieties.map((variety) => (
              <div onClick={(e) =>{
                  setSelected(variety);
                  setIsActive(false);
                }} className="dropdown-item">
                  {variety}
              </div>
            ))}
          </div>
        )}
      </div>
    );
}

// This function enables a dropdown menu
// for the potato category by size
function PotatoCategory({choice, setChoice}){
  const [isChosen, setIsChosen] = useState(false);
  const options = ["Small Size", 
    "Midium Size", "Table Size"];

  return(
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => 
        setIsChosen(!isChosen)}>
          {choice}
          <span className='fas fa-caret-down'></span>
      </div>
      {isChosen && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div onClick={(e) =>{
                setChoice(option);
                setIsChosen(false);
              }} className="dropdown-item">
                {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Services;