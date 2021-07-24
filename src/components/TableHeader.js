import React from 'react';


const TableHeader = ({icon,filterHandler}) => {
    return (
        <div className="product-table__row">
            <span onClick={filterHandler} className="table-title__cell filter">ID<img className='filter__img' src={icon} alt="Arrow"/></span>
            <span className="table-title__cell">Product</span>
            <span className="table-title__cell">SKU</span>
            <span className="table-title__cell">RAM</span>
            <span className="table-title__cell">HDD</span>
            <span className="table-title__cell">Price</span>
            <span className="table-title__cell"></span>
        </div>
    );
};

export default TableHeader;