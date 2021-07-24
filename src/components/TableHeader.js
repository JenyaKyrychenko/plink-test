import React from 'react';

const TableHeader = () => {
    return (
        <div className="product-table__row">
            <span className="table-title__cell">ID</span>
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