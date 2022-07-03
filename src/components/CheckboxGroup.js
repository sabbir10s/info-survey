import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

function CheckboxGroup(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div className='mt-5'>
            <label className='block mb-1'>{label}</label>
            <Field name={name}>
                {({ field }) => {
                    return options.map(
                        (option) => {
                            return (
                                <React.Fragment key={option.key}>
                                    <div className='block'>
                                        <input
                                            type="checkbox"
                                            id={option.value}
                                            {...field}
                                            {...rest}
                                            value={option.value}
                                            checked={field.value.includes(option.value)}
                                        />
                                        <label htmlFor={option.value}> {option.key}</label>
                                    </div>
                                </React.Fragment>
                            );
                        }
                    );
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    );
}

export default CheckboxGroup;