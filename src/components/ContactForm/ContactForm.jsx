import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const UserSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Maximum 30 letters!").required("Required"),
    number: Yup.string().required("Required"),
});

export default function ContactForm({ onAdd }) {
    const id = useId();
    const handleSubmit = (values, actions) => {
        onAdd({
            ...values,
            name: values.name.trim(),
        });
        actions.resetForm();
    }
    
    return (
        <Formik
        initialValues={{
            id: nanoid(),
            name: "",
            number: "",
        }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
        >
            <Form className={css.form} >
       <div className={css.formGroup}>
       <label htmlFor={`name-${id}`}>Name</label>
        <Field className={css.input} name="name" type="text" id={`name-${id}`}/>
        <ErrorMessage className={css.error} name="name" component="span"/>
       </div>
       <div className={css.formGroup}>
       <label htmlFor={`number-${id}`}>Number</label>
       <Field className={css.input} type="text" name="number" id={`number-${id}`}/>
       <ErrorMessage className={css.error} name="number" component="span"/>
       </div>
        <button type="submit">Add contact</button>  
            </Form>
        </Formik>
       
    )
}