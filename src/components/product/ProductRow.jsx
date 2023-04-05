import React from "react";


function ProductRow({product}) {
    // if product.stocked true give me product.name 
    // if product.stocked false give me product.name  in span

    const name = product.stocked ? product.name:
    <span style={{color:'red'}}>{product.name}</span>
    
    return<>
    <tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>
       
    </>;
}

export default ProductRow;