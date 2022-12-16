import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllServices } from '../../redux/actions'
import Card from '../Card/Card'
import Navbar from '../Navbar/Navbar'
import s from './Services.module.css'

const Services = () => {

    const dispatch = useDispatch()
    
    let allServices = useSelector(state => state.services)

    useEffect(() => {
        if(!allServices.length)
        dispatch(getAllServices())
    },[dispatch])

    return (
        <>
            <Navbar />
            <div className={s.mainContainer}>
                <h3>Servicios</h3>
                <span>En esta seccion visualizaremos los servicios ofrecidos.</span>
                <div className={s.cardsContainer}>
                    {allServices?.map((prod) =>{
                        return <Card 
                        key = {prod._id}
                        id = {prod._id}
                        name = {prod.name}
                        image = {prod.image}
                        price = {prod.price}
                        />
                    })}
                </div>
            </div>
        </>
    )
}

export default Services
