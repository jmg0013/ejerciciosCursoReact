import React, {useState}from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponentA from '../pure/contactA';
import ContactForm from '../pure/forms/contactForm';


const ContactlistComponent = () => {
    const contactDefaultA1 = new Contact('Joselu', 'Millan', 'jmg0013@alu.medac.es', true);
    const contactDefaultA2 = new Contact('Pepe', 'Gomez', 'pepegomez@gmail.es', false);
    const contactDefaultA3 = new Contact('Ana', 'Fernandez', 'anafernandez@gmail.es', true);

    const [contactos, setcontactos] = useState([contactDefaultA1, contactDefaultA2, contactDefaultA3]);

    function addContact(contact) {
        console.log("Añade este contacto:", contact); //para pasar esta funcion al hijo la pasaremos a traves de props
        const tempContacts = [...contactos];//variable temporal donde estan todos los contactos
        tempContacts.push(contact);
        setcontactos(tempContacts);
    }

    function borrarContact(contact) {
        console.log("Elimina este contacto:", contact); //para pasar esta funcion al hijo la pasaremos a traves de props
        const index = contactos.indexOf(contact)//permite sacar el indice del contacto por parametros
        const tempContacts = [...contactos];//variable temporal donde estan todos los contactos
        tempContacts.splice(index,1)//splice - elimina elementos / index - indice desde el que parte la eliminacion / 1 - elementos a borrar
        setcontactos(tempContacts);//hacer actualizacion de los contactos
    }

    function completedContact(contact) { //recibe la tarea
        console.log("Complete this task:", contact); //para pasar esta funcion al hijo la pasaremos a traves de props
        const index = contactos.indexOf(contact)//permite sacar el indice de la tarea por parametros
        const tempContacts = [...contactos];//variable temporal donde estan todas las tareas
        tempContacts[index].completed = !tempContacts[index].completed;
        //Actualizamos el estado del componente con la nueva lista y 
        //actualiza la iteracion de las task en orden y se muestra actualizada
        setcontactos(tempContacts);//metodo del estado creado. le pasamos la lista actualizada
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h1>TU CONTACTO:</h1>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position:'relative', height: '400px'} }>
                    <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Apellido</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contactos.map((contact, index) =>{ //bucle como un foreach
                                    return (// este return se va a realizar tantos contactos tenga la lista de contactos
                                        <ContactComponentA 
                                            key={index} //para que react sepa cuando cada una de ellas a sido modificada y poder modificarla a gusto sin liarse
                                            contact={contact}
                                            remove={borrarContact}
                                            complete={completedContact}
                                        >
                                        </ContactComponentA>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <ContactComponentA contact={contactDefaultA}></ContactComponentA> */}
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
};

export default ContactlistComponent;
