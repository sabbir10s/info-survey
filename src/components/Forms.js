import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import formData from '../data.json';
import FormControl from './FromControl';

const Forms = () => {

    const handleSubmit = async (value) => {
        const values = Object.entries(value);
        let result = [];

        values.map((val) => {
            result.push({
                questionId: val[0],
                answer: val[1].toString(),
            });
        });

        result.map(async (data) => {
            if (data.answer !== '') {
                const response = await fetch('api/submit', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                const content = await response.json();
                alert(content.data.tableRange)

            }
        });
    };

    let initialValues = {}
    let validations = {}
    let validationSchema = Yup.object().shape(

        {
            1: Yup.string().required('Required'),
            2: Yup.string().required('Required'),
            3: Yup.array().min(1, 'Required')
        }
    );

    formData.map((data) => {
        if (data.type === 1) {
            initialValues[data.id] = '';
            validations[data.id] = Yup.string().required('Required');
        }
        if (data.type === 2) {
            initialValues[data.id] = '';
            validations[data.id] = Yup.string().required('Required');
        }
        if (data.type === 3) {
            initialValues[data.id] = [];
            validations[data.id] = Yup.array().required('Required');
        }
    });

    const onSubmit = (values, { resetForm }) => {
        resetForm();
        handleSubmit(values);
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(formik) => (
                    <div className='flex justify-center mt-5'>

                        <Form className='w-full md:w-[50%] mx-2 border border-blue-500 p-8 rounded shadow-lg'>
                            <h1 className='text-3xl font-bold text-center text-blue-500'>Info Survey</h1>
                            {formData.map((data) => (
                                <FormControl
                                    key={data.id}
                                    control={data.type}
                                    label={data.title}
                                    name={data.id}
                                    options={data.values}
                                />
                            ))}
                            <button className='bg-blue-500 text-white uppercase text-xl p-2 w-full mt-5 rounded' type="submit">
                                Submit
                            </button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default Forms;