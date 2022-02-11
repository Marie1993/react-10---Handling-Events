import React from 'react';
import Contact from './components/Contact';

import './style.css';

const contactInfo = [
  {
    name: 'Emmanuel',
    email: 'emmanuel@email.com',
    phone: '23423434',
    isDeletable: true
  },
  {
    name: 'Johana',
    email: 'johana@email.com',
    phone: '123123',
    isDeletable: true
  },
  {
    name: 'Lucas',
    email: 'lucas@emal.com',
    phone: '6764563456',
    isDeletable: true
  },
  {
    name: 'Marie',
    email: 'marie@rm.com',
    phone: '12125465',
    isDeletable: true
  },
  {
    name: 'Pedro',
    email: 'pedro@rn.com',
    phone: '34634571234',
    isDeletable: true
  }
];

export default function App() {
  return (
    <div>
      <h1>My contacts list 📱</h1>

      <div>
        {contactInfo.map(contact => (
          <Contact
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            isDeletable={contact.isDeletable}
          />
        ))}
      </div>
    </div>
  );
}
