import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearDetail, getProductDetail } from '../../redux/actions'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import s from './ProductDetail.module.css'

const ProductDetail = () => {
    
    var prodDetail = useSelector(state => state.productDetail);    
    let { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProductDetail(id))
      // return () => {
      //   dispatch(clearDetail())
      // }
    },[dispatch, id])
    
  return (
      <>
        <Navbar />
        <div className={s.mainContainer}>        
          <div className={s.detailContainer}>
            <img src={prodDetail.image} alt="TUCARA" />
            <h2>{prodDetail.name}</h2>
            <span>{prodDetail.description}</span>
            <span>{prodDetail.available}</span>
            <span>${prodDetail.price}</span>
          </div>        
        </div>
      </>
  )
}

export default ProductDetail
