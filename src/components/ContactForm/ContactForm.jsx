import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleSubmit = (event) => {
    event.preventDefault();
    const { handleSubmit } = this.props;
    handleSubmit(this.state);
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  render() {
    const { nameInputId, numberInputId } = this.props;
    const { name, number } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          value={name}
        />

        <label htmlFor={numberInputId}>Number</label>
        <input
          type="tel"
          name="number"
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          value={number}
        />

        <button>Add contact</button>
      </form>
    );
  }
}

export { ContactForm };
