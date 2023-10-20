import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box">Reviews (122)</div>
      </div>
      <div className="discriptionbox-description">
        <p>An e-commerce website is an online platform that facilitate the buying and selling of products or services over the interne.It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presences. E-commerce websites have gained immense popularity due to their convenience accessibility, and the global reach they offer.</p>
      </div>
      <p>E-commerce website typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g.sizes, colors). Each procuct usually has its own dedicated page with relevant information</p>
    </div>
  )
}

export default DescriptionBox
