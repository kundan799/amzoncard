import React from 'react'
import styles from "./cart.module.css"

const CartMacker = (props) => {
  console.log(props);
  return (
    <div className={(props.gift=="Amazone Gift Pay") ? styles.ycard :styles.wcard}>
      <div className={styles.div1}>
        <p>{props.date}</p>
        <img src={props.logo}/>
      </div>
      <div>
        <h4 className={styles.black}>{props.case}</h4>
        <h1 className={styles.amzonpay}>{props.gift}</h1>
      </div>
      <div className={styles.destop}>
        <p>{props.where}</p>

      </div>
      
    </div>
  )
}

export default CartMacker

