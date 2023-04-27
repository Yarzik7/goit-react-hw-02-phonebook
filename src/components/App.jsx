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

        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            type="text"
            name="name"
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={name}
          />

          <label htmlFor={this.numberInputId}>Number</label>
          <input
            type="tel"
            name="number"
            id={this.numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={number}
          />

          <button>Add contact</button>
        </form>

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
          {
            contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase())).map(({ id, name, number }) => (
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

export { App };
