import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

export const RelatedProduct = () => {
  return (
    <div className='relatedproduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproduct-item">
            {data_product.map((item, index)=>{
                return <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
