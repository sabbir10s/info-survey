import React from 'react';
import Input from './Input';
import RadioButtons from './RadioButtons';
import CheckboxGroup from './CheckboxGroup';

function FormControl(props) {
    const { control, ...rest } = props;
    switch (control) {
        case 1:
            return <Input {...rest} />;
        case 2:
            return <RadioButtons {...rest} />;
        case 3:
            return <CheckboxGroup {...rest} />;
        default:
            return null;
    }
}

export default FormControl;