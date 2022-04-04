import React from 'react';
import styles from './ProductCard.module.css';


const ProductCard = (props) => {
  const amount=0;
  const {id, name, units, url } = props.product;
    return (
      <div className={styles.card}>
    <img src={url} alt="Product"></img>
    <div>
      <div className={styles.card}>
        <span>{name}</span>
        <span>{units} Units</span>
        <button>Add to cart</button>
      </div>
      <div>
        <span>{amount}</span>
        <button onClick={plus}>+</button>
        <button>-</button>
      </div>

    </div>
    
  </div>
    )
    function plus(){
      this.amount +=1;
    }
  };


ProductCard.propTypes = {};

ProductCard.defaultProps = {};

export default ProductCard;
