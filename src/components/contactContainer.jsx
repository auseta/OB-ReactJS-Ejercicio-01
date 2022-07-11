import React from 'react';
import { Contacto } from '../models/contact.class';
import ContactInfo from './contact';


const ContactContainer = () => {

    const usuario = new Contacto("Augusto", "Seta", "augustoseta97@gmail.com", false)

    return (
        <div>
            <h1>Informacion del Contacto</h1>
            <ContactInfo contacto={usuario}/>
        </div>
    );
};


export default ContactContainer;
