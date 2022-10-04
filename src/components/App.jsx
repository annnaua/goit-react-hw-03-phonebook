import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],

    filter: '',
  };

  componentDidMount() {
    console.log('App componentDidMount');

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    const nextContacts = this.state.contacts;
    // console.log('nextContacts', nextContacts);
    const prevContacts = prevState.contacts;
    // console.log('prevContacts', prevContacts);

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;

    contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [newContact, ...prevState.contacts],
          };
        });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleSubmit = ({ name, number }, { resetForm }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.addContact(contact);

    resetForm();
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts } = this.state;

    const filtered = this.state.filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(filtered));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <div>
        <Section title={'Phonebook'}>
          <ContactForm onAddContact={this.handleSubmit} />
        </Section>

        <Section title={'Contacts'}>
          <Filter value={filter} onFilterContacts={this.changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
