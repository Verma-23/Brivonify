import React from "react";
import './PromotionalBar.css';

let promotionalMessage = 'Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!';

const PromotionalBar = () => {
    return (
        <>
        <nav className="navbar promotionalNavBar">
            <p className="promotionalMessageStyle">{promotionalMessage}&nbsp;&nbsp;&nbsp;<u>ShopNow</u></p>
        </nav>
        </>
    )
    
}

export default PromotionalBar;