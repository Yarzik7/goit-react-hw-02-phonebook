// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
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
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: this.state.name, number: this.state.number },
        ],
      };
    });
  };

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

        <label htmlFor={this.filterInputId}>Find contacts by name</label>
        <input
          type="tel"
          name="filter"
          id={this.filterInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          value={filter}
        />

        <ul className="contact-list">
          {contacts
            .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
            .map(({ id, name, number }) => (
              <li key={id}>
                <p>Name: {name}</p>
                <p>Number: {number}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export { App }