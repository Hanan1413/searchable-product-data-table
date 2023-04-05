import React ,{ useState } from "react";
import SearchBar from "../components/search-bar/SearchBar";
import ProductTable from "../components/product/ProductTable";

function FilterableProductTable({products}) {
    const[filterText, setFilterText]= useState('');
   const [inStockOnly, setInStockOnly] = useState(false);
    // console.log(products)
    return<>



{/* SearchBar update the FilterableProductTable’s state,
so pass these functions down to SearchBar: */}
    <SearchBar
    filterText={filterText} 
    inStockOnly={inStockOnly} 
    onFilterTextChange={setFilterText} 
    onInStockOnlyChange={setInStockOnly}
     />
    {/* pass products as props */}
    <ProductTable 
     products={products}
     filterText={filterText}
     inStockOnly={inStockOnly}
    
     />
    

    
    </>;
}

export default FilterableProductTable;