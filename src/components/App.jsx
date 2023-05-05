import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();
  filterInputId = nanoid();

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (!!~this.getContactIndexByName(name)) {
      alert(`${name} is already in contact`);

      return;
    }

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name, number },
        ],
      };
    });
  };

  getContactIndexByName = (name) => {
    const { contacts } = this.state;
    return contacts.findIndex(({ name: contactName }) => contactName === name);
  };

  handleDeleteContact = ({target:{dataset:{name}}}) => this.setState(({contacts}) => ({contacts: contacts.filter(({name: contactName}) => contactName !== name)}));

  render() {
    const { contacts, name, number, filter } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          nameInputId={this.nameInputId}
          numberInputId={this.numberInputId}
          name={name}
          number={number}
        />

        <h2>Contacts:</h2>

        <Filter
          filterInputId={this.filterInputId}
          handleChange={this.handleChange}
          filter={filter}
        />

        <ContactList
          contacts={contacts}
          filter={filter}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export { App };
