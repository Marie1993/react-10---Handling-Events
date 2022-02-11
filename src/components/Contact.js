import React from 'react';

const onPressDelete = (name) => {
  alert(`Voulez vous supprimer ${name} de vos contacts ?`);
};

const Contact = (props) => {
  return (
    <div>
      <div>
        <h3>{props.name}</h3>
        <h4>{props.email}</h4>
        <h4>{props.phone}</h4>
      </div>
      {props.isDeletable ? (
        <button onClick={() => onPressDelete(props.name)}>Delete</button>
      ) : null}
    </div>
  );
};

export default Contact;
