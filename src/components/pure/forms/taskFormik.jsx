import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//MODELS
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const Taskformik = () => {

    let task = new Task();

    const initialValues ={
        name : '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(3, 'Name too short')
                .max(14, 'Name too long')
                .required('Name is required'),
            description: Yup.string()
                .min(4, 'Description too short')
                .max(30, 'Description too long')
                .required('Description is required'),
            level: Yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT], 'You must select a level: normal/blocking/urgent')
                .required('Role is required'), 
        }
    )

    const submit = (values)=>{
        alert('Task created');
    }

    return (
        <div>
            <h4>Task Formik</h4>
            <Formik
                initialValues={initialValues}
                //*** Yup validation schema ***
                validationSchema = {taskSchema}
                //*** onSubmit Event
                onSubmit={async (values) => {//cuando el formulario hace un submit ejecuta esta funcion/ values son valores por defecto que recibe del formulario
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }} 
            >
            {({ values, 
                touched, 
                errors, 
                isSubmitting, 
                handleChange, 
                handleBlur})=>(
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field id="name" type="text" name="name" placeholder="name of your task" />
                        {/*Name Errors */}
                        {
                            errors.name && touched.name && //si hay algun error en el campo name y si el usuario previamente a tocado el campo mostraremos los errores
                            (
                                <ErrorMessage name='name' component='div'></ErrorMessage> 
                            )
                        }

                        <label htmlFor="description">Description</label>
                        <Field id="description" type="text" name="description" placeholder="description from your task" />
                        {/*Name Errors */}
                        {
                            errors.description && touched.description && //si hay algun error en el campo description y si el usuario previamente a tocado el campo mostraremos los errores
                            (
                                <ErrorMessage name='description' component='div'></ErrorMessage> 
                            )
                        }

                        <label htmlFor="level">Levels</label>
                        <Field as="select" name="level">
                            <option value={LEVELS.NORMAL}>normal</option>
                            <option value={LEVELS.URGENT}>urgente</option>
                            <option value={LEVELS.BLOCKING}>blocking</option>
                        </Field>


                        <button type="submit">Task Created</button>
                        {isSubmitting ? (<p>Sending your task...</p>):null} {/*cuando se pulsa en el boton submit aparecera este texto */}

                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default Taskformik;
