import React from 'react';
import {Link} from "react-router-dom";
import TableHeader from "../components/TableHeader";
import {useSelector} from "react-redux";

const ProductList = () => {
    const products = useSelector(state => state.products)
    return (
        <>
        <div className='container'>
            <div className="title">Product List</div>
            <div className='product-table'>
                <TableHeader/>
                {
                    products.map(product=>(
                        <div key={product.id} className="product-table__row">
                            <span className="product__cell">{product.id}</span>
                            <span className="product__cell">{product.name}</span>
                            <span className="product__cell">{product.sku}</span>
                            <span className="product__cell">{product.ram}</span>
                            <span className="product__cell">{product.hdd}</span>
                            <span className="product__cell">{product.price}</span>
                            <span className="product__cell">
                                <Link to={`/${product.id}/order`} className="product__order">Order</Link>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
            </>
    );
};

export default ProductList;