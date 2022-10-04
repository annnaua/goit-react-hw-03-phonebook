import PropTypes from 'prop-types';

import { List, ContactListItem, ContactListButton } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id}>
            <span>{name} :</span>
            <span>{number}</span>
            <ContactListButton
              type="button"
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete
            </ContactListButton>
          </ContactListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
