import { useState } from 'react'
import './App.css'
import FilterableProductTable from './pages/FilterableProductTable'
import products from './data/productData'


function App() {
console.log(products)

  return (
    <div className="App">
     <FilterableProductTable products={products} />
      
    </div>
  )
}

export default App
