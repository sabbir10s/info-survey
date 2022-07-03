import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

function Input(props) {
    const { label, name, ...rest } = props;
    return (
        <div className='mt-3'>
            <label htmlFor={name}>{label}</label>
            <Field className='border border-blue-500 rounded block mt-1 w-full' id={name} name={name} {...rest} />
            <ErrorMessage component={TextError} name={name} />
        </div>
    );
}

export default Input;