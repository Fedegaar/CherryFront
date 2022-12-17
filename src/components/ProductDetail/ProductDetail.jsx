import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../../redux/actions'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

const ProductDetail = (props) => {
    const {id: currentProductId} = useParams
    let prodDetail = useSelector(state => state.productDetail)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProductDetail(currentProductId))
      console.log(" SOY EL DETAIL", currentProductId)
    })
    
  return (
    <>
    <Navbar />
      <div>
        <img src={prodDetail.image} alt="TUCARA" />
        <h6>{prodDetail.name}</h6>
        <span>{prodDetail.description}</span>
        <span>{prodDetail.available}</span>
        <span>{prodDetail.price}</span>
      </div>
    </>
  )
}

export default ProductDetail
