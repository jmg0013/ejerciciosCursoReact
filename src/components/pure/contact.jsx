import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';



const ContactComponent = ({contact}) => {
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
            <h5>
                Estado: { contact.completed ? 'Contacto En Línea':'Contacto No Disponible'} {/*? "true":"false" comprueba si esta completada o no */}
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
