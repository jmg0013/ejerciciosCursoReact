import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class.js';


const ContactForm = ({add}) => {

    const nameRef = useRef("");//creamos una referencia para el nombre del contacto
    const apellidoRef = useRef("");//creamos una referencia para el apellido del contacto
    const emailRef = useRef("");//creamos una referencia para el email del contacto

    function addTask(e) {
        e.preventDefault();
        const newContact = new Contact(//lo de abajo es lo que pide la clase para crear una tarea
            nameRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact)//llamar al padre para que añada la tarea
    }

    return(
        <form onSubmit={addTask} className="d-flex justify-content-center align-items-center mb-4">
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id="inputName" type="text" className='form-control form-control-lg' required autoFocus placeholder='Nombre'/>
                <input ref={apellidoRef} id="inputApellido" type="text" className='form-control form-control-lg' required placeholder='Apellidos'/>
                <input ref={emailRef} id="inputEmail" type="text" className='form-control form-control-lg' required placeholder='Email'/>

                <button type='submit' className='btn btn-success btn-lg ms-2'>Crear contacto</button>
            </div>
        </form>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};

export default ContactForm;