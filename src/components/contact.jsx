import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contact.class';

const ContactInfo = ({ contacto }) => {

    const [state, setConection] = useState(contacto.connected);

    const changeState = () => {
        setConection(state ? false : true)
    }

    return (
        <div>
            <h2>
                Nombre: {  contacto.name  }
            </h2>
            <h2>
                Apellido: {  contacto.lastName  }
            </h2>
            <h2>
                Email: { contacto.email }
            </h2>
            <h2>
                Conectado: { state ? "Contacto En Línea" : "Contacto No Disponible" }
            </h2>
            <div>
                <button onClick={changeState}>
                    Cambiar Estado
                </button>
            </div>
        </div>
    );
};


ContactInfo.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactInfo;
