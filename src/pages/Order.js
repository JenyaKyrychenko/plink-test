import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import Form from "../components/Form";
import {useDispatch} from "react-redux";
import {addUserAction} from "../redux/reducers/userReducer";

const Order = () => {
    const history = useHistory()
    const urlParams = useParams()
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        name:'',
        email: '',
        country: '',
        city: '',
        address: '',
    })
    const [formErrors, setFormErrors] = useState({
        name:'e',
        email: 'e',
        country: 'e',
        city: 'e',
        address: 'e',
    })

    const changeFormElement = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const validateField = () => {
        let nameValid = form.name.length < 25 && form.name.match("[А-ЯA-ZЇІ][А-Яа-яA-Za-z' -іїІЇ]");
        formErrors.name = nameValid ? '' : "Name must start with a capital letter![2-25]";

        let emailValid = form.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formErrors.email = emailValid ? '' : 'Incorrect email!';

        let coutryValid = form.country.length < 25 && form.country.match("[А-ЯA-ZЇІ][А-Яа-яA-Za-z' -іїІЇ]");
        formErrors.country = coutryValid ? '' : "Country must start with a capital letter![2-25]";

        let cityValid = form.city.length < 25 && form.city.match("[А-ЯA-ZЇІ][А-Яа-яA-Za-z' -іїІЇ]");
        formErrors.city = cityValid ? '' : "City must start with a capital letter![2-25]";

        let addressValid = form.address.length > 2;
        formErrors.address = addressValid ? '' : "Fill address form!";

        setFormErrors(formErrors)
    }

    const checkErrors = () =>{
        for(let key in formErrors){
            if(formErrors[key]){
                return formErrors[key]
            }
        }
        return ''
    }

    const submitForm = async (event) => {
        event.preventDefault()
        validateField()
        // Check fill all inputs
        for(var key in form){
            if(!form[key]){
                alert(`The ${key} is not completed!`)
                return
            }
        }
        const error = checkErrors()
        if(error){
            alert(error)
            return
        }
        dispatch(addUserAction({...form}))
        history.push(`/${urlParams.id}/info`)
    }

    useEffect(()=>{
        validateField()
    },[form])

    return (
            <div className='container'>
                <div className="title">Ordering Form</div>
                <form className="order-form">
                    {/*Full Name*/}
                    <Form name='name'
                          changeFormElement={changeFormElement}
                          label='Full Name'
                          isError={formErrors.name}
                          placeholder='Sherlock Holms'/>

                    {/*Email*/}
                    <Form name='email'
                          changeFormElement={changeFormElement}
                          label='Email'
                          isError={formErrors.email}
                          placeholder='name@mail.com'/>
                    {/*Country*/}
                    <Form name='country'
                          changeFormElement={changeFormElement}
                          label='Country'
                          isError={formErrors.country}
                          placeholder='Great Britain'/>
                    {/*City*/}
                    <Form name='city'
                          changeFormElement={changeFormElement}
                          label='City'
                          isError={formErrors.city}
                          placeholder='London'/>

                    {/*Address*/}
                    <Form name='address'
                          changeFormElement={changeFormElement}
                          label='Address'
                          isError={formErrors.address}
                          placeholder='221b, Baker Street, London'/>


                          {/*Submit*/}
                    <div className="form-row">
                        <input onClick={submitForm} type="submit" className="form-row__submit" value='Save'/>
                    </div>
                </form>
            </div>
    );
};

export default Order;