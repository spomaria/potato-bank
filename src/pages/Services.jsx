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
              Potato Variety <input type="text" /> <br /> <br />
              Category <input type="text" /> <br /> <br />
              Price/Kg <input type="text" /> <br /> <br />
              Quantity (Kg) <input type="text" placeholder='please input a number'/> <br /> <br />
              Email Address: <input type='email' placeholder='youremail@email.com'/> <br /><br />
              Phone Number: <input type="phone" placeholder='+234806 000 1000'/> <br /><br />
              Preffered Pick Up Date <input type="date" /> <br /> <br />

            </form>
            <button>Proceed to Pay</button>
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
              Potato Variety <input type="text" /> <br /> <br />
              Category <input type="text" /> <br /> <br />
              Price/Kg <input type="text" /> <br /> <br />
              Quantity (Kg) <input type="text" placeholder='please input a number'/> <br /> <br />
              Email Address: <input type='email' placeholder='youremail@email.com'/> <br /><br />
              Phone Number: <input type="phone" placeholder='+234806 000 1000'/> <br /><br />
              Proposed Transaction Date <input type="date" /> <br /> <br />
              Farm Location <input type="text" placeholder='Village and LGA'/> <br /> <br />
            </form>
            <button>Set Payment Method</button>
          </Invoice>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Services;