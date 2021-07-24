import React from 'react';

const Form = ({label, changeFormElement, placeholder, name, isError}) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-row__label">{label}</label>
            <input onChange={changeFormElement}  placeholder={placeholder} type="text" name={name}
                   className={`form-row__input ${isError ? 'error' : 'correct'}`}/>
        </div>
    );
};

export default Form;