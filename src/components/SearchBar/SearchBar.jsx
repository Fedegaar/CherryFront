import React, {useEffect, useState} from 'react'
import { getAllProducts, searchByName } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
  const allProducts = useSelector(state => state.products)
  const [searches, setSearches] = useState(allProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  },[])

  function onInputChange(e){   
    e.preventDefault(); 
    setSearches(e.target.value)
    dispatch(searchByName(e.target.value))
    console.log(e.target.value, "soy el value del ONINPUTCHANGE")
  }
  
  // function onSubmit(e){
  //   e.preventDefault();
  //   dispatch(searchByName(searches))
  //   console.log(searches, "soy searches")
  // }  

  return (
    <form  > 
            <input   type="search" placeholder='Busca un producto' onChange={(e) => onInputChange(e)} value={searches} />
            <input type="submit"/>
    </form >
  )
}

export default SearchBar
