import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Filter = () => {
  const marks = useSelector((state) => state.products.mark)

  return (
    <div>
      <h1>soy el filter bb</h1>
      <form action="">
        <span>Marca</span>
        <select type="select" />
        <span>Activo</span>
        <select type="select" />
      </form>
    </div>
  )
}

export default Filter
