import React from "react";
import Footer from '../components/Footer';
import './About.css'

function About(){
    return(
        <div>
            <div className="about">
                <div className="potato about-div divs">
                    <h1>About Potato</h1> <br />
                    <p>Potato is a perishable crop with a short shelf life; yet has high nutritional value</p>
                    <br />
                    <p>Potato is a crop that is highly sort after by people from different spheres of life</p>
                </div>
                <div className="farmer about-div divs">
                    <h1>The Potato Farmer</h1> <br />
                    <p>Potato farmers incur so much loss in production due to post harvest losses</p>
                    <br />
                    <p>Our solution is, buying from the farmer early enough to minimize the incidence of post harvest losses thereby, increasing the profit margin of the farmer.</p>
                    <br />
                    <p>The farmer becomes richer, poverty is eliminated (SDG Goal 1). Also, we make available more ware potato thereby reducing hunger (SDG Goal 2).</p>
                </div>
                <div className="consumer about-div divs">
                    <h1>Potato Consumption</h1> <br />
                    <p>By reducing post harvest loss through off-taking, balance is maintained between demand and supply of potato thereby, creating a fair market price for potato.</p>
                    <br />
                    <p>Also, we promote responsible production and consumption (SDG Goal 12)by ensuring that potato is put into good use irrespective of size or variety. This is achieved through processing.</p>
                </div>
                <div className="about-div">
                    <h1>Summary</h1><br />
                    <ul>
                        <li>SDG Goals 1 & 2: <br />The farmer receives fair wage for production while the consumer gets value for money paid. Thus poverty and hunger are eliminated</li> <br />
                        <li>SDG Goals 12: <br /> Responsible Consumption and Production is promoted through the reduction of post harvest losses</li> <br />
                        <li>SDG Goals 3: <br />Good Health and Wellbeing is achieved by default when SDG Goals 1, 2 and 12 are achieved.<br /></li>
                    </ul>
                    <h1>Will you join us to achieve these Sustainable Development Goals?</h1>
                </div>   
            </div>
            <Footer />
        </div>
    );
}

export default About;