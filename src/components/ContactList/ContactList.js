import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <p>
          {name}: <span>{number}</span>
        </p>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </Item>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
