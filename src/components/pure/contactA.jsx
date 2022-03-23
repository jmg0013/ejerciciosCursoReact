import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponentB from './contactB';


const ContactComponentA = ({contact}) => {
    return (
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
    );
};

ContactComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponentA;
