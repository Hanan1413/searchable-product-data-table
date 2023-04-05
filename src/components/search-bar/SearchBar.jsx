import React from "react";
import './search-bar.css'

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
    return <>

    <form>
       <div className="inputs">
         <input 
           type="text" 
           value={filterText} 
           placeholder="Search..."
           onChange={(e) => onFilterTextChange(e.target.value)}
            />

           <div className="product-mark">
             <input
              type="checkbox" 
              id="stock"
              checked={inStockOnly}
              
              onChange={(e) => onInStockOnlyChange(e.target.checked)} />
            {' '}


               <label htmlFor="stock">product in the stock</label> 

           </div>


       </div>
    </form>
    
    </>;
}

export default SearchBar;