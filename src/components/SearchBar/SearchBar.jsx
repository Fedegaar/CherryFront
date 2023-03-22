import React, { useState } from 'react'
import { searchByName } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
  const allProducts = useSelector(state => state.products)
  const [searches, setSearches] = useState(allProducts)
  const dispatch = useDispatch()

  function onInputChange(e){   
    e.preventDefault(); 
    setSearches(e.target.value)
    dispatch(searchByName(e.target.value))
  }

  return (
    <form  > 
            <input type="search" placeholder='Busca un producto' onChange={(e) => onInputChange(e)} value={searches} />
    </form >
  )
}

export default SearchBar
