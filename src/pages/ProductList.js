import React, {useState} from 'react';
import {Link} from "react-router-dom";
import TableHeader from "../components/TableHeader";
import {useSelector} from "react-redux";
import downArrow from "../icons/down-arrow.svg";
import upArrow from '../icons/up-arrow.svg'

const ProductList = () => {
    const [flag, setFlag] = useState(true)
    const [products, setProducts] = useState(useSelector(state => state.products))

    const filterHandler = () =>{
        setProducts(products.reverse())
        setFlag(!flag)
    }

    return (
            <div className='container'>
                <div className="title">Product List</div>
                <div className='product-table'>
                    <TableHeader filterHandler={filterHandler} icon={flag ? downArrow : upArrow}/>
                    {
                        products && products.map(product => (
                            <div key={product.id} className="product-table__row">
                                <div className="product__cell">{product.id}</div>
                                <div className="product__cell">{product.name}</div>
                                <div className="product__cell">{product.sku}</div>
                                <div className="product__cell">{product.ram}</div>
                                <div className="product__cell">{product.hdd}</div>
                                <div className="product__cell">{product.price}</div>
                                <div className="product__cell">
                                <Link to={`/${product.id}/order`} className="product__order">Order</Link>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    );
};

export default ProductList;