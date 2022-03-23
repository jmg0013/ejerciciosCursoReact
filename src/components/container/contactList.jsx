import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponentA from '../pure/contactA';

const ContactlistComponent = () => {
    const contactDefaultA = new Contact('Joselu', 'Millan', 'jmg0013@alu.medac.es', true);

    return (
        <div>
            <div>
                <h1>TU CONTACTO:</h1>
            </div>
            <ContactComponentA contact={contactDefaultA}></ContactComponentA>
        </div>
    );
};

export default ContactlistComponent;
