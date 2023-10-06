import React from "react";
import img1 from '../images/img1.jpeg';

function Image(){
    console.log(img1);
    return(
        <div>
            <img src={img1} alt="potato image" />
        </div>
    );
}

export default Image;