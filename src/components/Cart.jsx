
import React from 'react'
import CartMacker from './Cartmacker'

const Cart = () => {
    const cardData = [
        {date:"28/10/2020",case:"Case Study",gift:"Amazone Gift Pay", where:"Desktop - Mobile", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png"},
        {date:"28/10/2020",case:"Case Study",gift:"Amazone Gift Pay", where:"Desktop - Mobile", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png"},
        {date:"17 Sep 2020",case:"Case Study",gift:"Apple Gift Payment", where:"MacOS - Mobile", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ri9Pzgni3ahHcAfcNv9hS5_SvupewCXhJA&usqp=CAU"},
    ]
  return (
    <div>
      {cardData.map((ele)=>(
          <CartMacker date={ele.date} case={ele.case} gift={ele.gift} where={ele.where} logo={ele.logo}/>
      ))}
      
    </div>
  )
}

export default Cart


