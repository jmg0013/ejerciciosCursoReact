import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactlistComponent = () => {

    const contactDefault = new Contact('Joselu', 'Millan', 'jmg0013@alu.medac.es', true);

    return (
        <div>
            <div>
                <h1>TU CONTACTO:</h1>
            </div>
            <ContactComponent contact={contactDefault}></ContactComponent>
        </div>
    );
};


export default ContactlistComponent;
