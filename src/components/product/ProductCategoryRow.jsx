import React from "react";


function ProductCategoryRow({category}) {
    return<>
    <tr>
        <th style={{color:'green' , paddingTop:'20px'}}> {category}</th>
    </tr>
       
    </>;
}

export default ProductCategoryRow;