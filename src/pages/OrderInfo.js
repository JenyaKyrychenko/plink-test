import React from 'react';
import ProductInfo from "../components/ProductInfo";
import PersonInfo from "../components/PersonInfo";
import {useSelector} from "react-redux";

import {useParams} from 'react-router-dom'

const OrderInfo = () => {
    const urlParams = useParams()
    const product = useSelector(state => state.products[urlParams.id-1])
    const user = useSelector(state => state.user)
    return (
        <>
            <div className='container'>
                <div className="product-info">

                    {/*Product Info*/}
                    <ProductInfo product={product}/>

                    {/*Personal Info*/}
                    <PersonInfo user={user}/>
                </div>
            </div>
        </>
    );
};

export default OrderInfo;