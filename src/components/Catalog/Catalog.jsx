import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/actions'
import Card from '../Card/Card'
import Filter from '../Filter/Filter'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import s from './Catalog.module.css'

const Catalog = () => {
  const dispatch = useDispatch();

  let allProducts = useSelector(state => state.products)
  let productsAtView = useSelector(state => state.productsToShow)

  useEffect(() => {
    if (!allProducts.length){
      dispatch(getAllProducts()) 
    }    
   },[dispatch, allProducts.length])

  return (
    <>
        <Navbar/>
        <div className={s.mainContainer}>
            <h3>Aca estan Todos los malditos productos!</h3>
            <span>Por ende deberiamos agregar: cards, metodos de ordenamiento (ordenar por nombre, por </span>
            <SearchBar/>
            <Filter/>
            <div className={s.cardsContainer}>
              {productsAtView?.map((prod) => {
                return <Card 
                key = {prod._id}
                id = {prod._id}
                name = {prod.name}
                image = {prod.image}
                presentation = {prod.presentation}
                price = {prod.price}
                active = {prod.active}
                mark = {prod.mark}
                />
              }) } 
            </div>  
        </div>
    </>
  )
}

export default Catalog
