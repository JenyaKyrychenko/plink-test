import React from 'react';

const PersonInfo = ({user}) => {
    return (
        <>
            <div className="title">Personal information</div>
            <div className="info-body">
                <div className="info-body__row">
                    <div className="info-body__title">Full name:</div>
                    <input type="text" className='info-body__desc' defaultValue={user.name}/>
                </div>
                <div className="info-body__row">
                    <div className="info-body__title">Email:</div>
                    <input type="text" className='info-body__desc' defaultValue={user.email}/>
                </div>
                <div className="info-body__row">
                    <div className="info-body__title">Country:</div>
                    <input type="text" className='info-body__desc' defaultValue={user.country}/>
                </div>
                <div className="info-body__row">
                    <div className="info-body__title">City:</div>
                    <input type="text" className='info-body__desc' defaultValue={user.city}/>
                </div>
                <div className="info-body__row">
                    <div className="info-body__title">Address:</div>
                    <input type="text" className='info-body__desc' defaultValue={user.address}/>
                </div>
            </div>
        </>
    );
};

export default PersonInfo;