import React from 'react'
import card1 from '../../Assets/images/card1.jpeg'
function Card() {
    return (
        <>
        <div width="100vh" style={{borderRadius:"20px",  margin:"30px" }}>
            
        <img width="100%" src={card1} object-fit="cover" />
        
        </div>
        </>
    )
}

export default Card
