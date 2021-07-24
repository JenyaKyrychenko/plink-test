import React from 'react';

const ProductInfo = ({product}) => {

    return (
        <>
            <div className="title">Product information</div>
            <div className="info-body">
                <div className="info-body__row">
                    <div className="info-body__title">Product name:</div>
                    <div type="text" className='info-body__desc'>{product.name}</div>
                </div>
                <div className="info-body__row">
                    <div className="info-body__title">SKU:</div>
                    <div type="text" className='info-body__desc'>{product.sku}</div>
                </div>
                <div className="info-body__row">
                    <div className="info-body__title">RAM:</div>
                    <div type="text" className='info-body__desc' >{product.ram}</div>
                </div>
                <div className="info-body__row">
                    <div className="info-body__title">HDD:</div>
                    <div type="text" className='info-body__desc'>{product.hdd}</div>
                </div>
                <div className="info-body__row">
                    <div className="info-body__title">Price:</div>
                    <div type="text" className='info-body__desc'>{product.price}</div>
                </div>
            </div>
        </>
    );
};

export default ProductInfo;