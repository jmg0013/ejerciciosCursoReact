import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponentB from './contactB';


const ContactComponentA = ({contact, remove, complete}) => {

    function contactCompletedIcon() {
        if (contact.complete) {
            return (<i onClick={ () => complete(contact)} className='bi-toggle-on task-action' style={{color:'green'}}></i>)
        }              //el onclick lo ponemos como funcion anonima para que no se ejecute nada mas meternos
        else{
            return (<i onClick={ () => complete(contact)} className='bi-toggle-off task-action' style={{color:'grey'}}></i>)}
        }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'> { contact.name }</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'> { contact.apellido }</span>
            </td>
            <td className='align-middle'>
                <span className='ms-2'> { contact.email }</span>
            </td>
            <td className='align-middle'>
                {contactCompletedIcon()}
                <button className='bi-trash task-action' style={{color:'tomato'}} onClick={()=> remove(contact)}>Borrar</button>
            </td>
        </tr>


        /*
        <div>
            <h2>
                Nombre: { contact.name }
            </h2>
            <h3>
                Apellido: { contact.apellido }
            </h3>
            <h4>
                Email: { contact.email }
            </h4>
            <ContactComponentB conectado={true}></ContactComponentB>
        </div>
        */
    );
};

ContactComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponentA;
