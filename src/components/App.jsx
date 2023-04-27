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
    contacts: [],
    name: '',
  };

  handleChange = event => this.setState({ name: event.target.value });
  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, {id: nanoid(), name: this.state.name }] };
    });
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>

        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={name}
          />
          <button>Add contact</button>
        </form>

        <ul className="contact-list">
          {!!contacts.length && contacts.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
    );
  }
}

export { App };
