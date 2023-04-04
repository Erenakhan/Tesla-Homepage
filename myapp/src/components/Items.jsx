import React from "react";
import './Items.css'
import Button from "./Button";

const Items =({title,desc,descLink,backgroundImg,leftbtn,leftbtnLink,rightbtn,rightbtnLink,twobtn})=>{
    console.log(twobtn )
 return (
    <div className="item" style={{
        backgroundImage: `url(${backgroundImg})`
    }}>
        <div className="item-container">
            <div className="item-text">
                    <p>{title}</p>
                      <div className="item-desc">
                         <p>{desc}</p>
                       </div>
                    </div>
                    
        <div className="item-lower">
            <div className="buttons">
                <Button imp='primary' text={leftbtn} 
                link={leftbtnLink} />
                {
                twobtn && (
                        <Button imp='secondary' text={rightbtn} 
                        link={rightbtnLink}/>
                    )
                }
            </div>
            </div>

        </div>
    </div>
    )
}

export default Items;