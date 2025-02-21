import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An e-commerce website is an online platform that facilitate online transactions of goods and services through transfer of information and funds over the Internet. 
                It serves as a virtual marketplace where businessess and individuals can showcase their products, interacts with customers and conduct transactions without need for a physical presence.
                E-commerce websites have gained immense popularity due to their convenience, accessibility and the global reach they offer.
            </p>
            <p>
                E-commerce websites typically display products or services a services along with detailed descriptions, images, prices and any available variations
                (eg., sizes, colors). Each product usually has its own dedicated page with relevant information.
            </p>
        </div>
    </div>
  )
}
