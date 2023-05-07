import ContactItem from '../ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, handleDeleteContact }) => {
  return (
    <ul className="contact-list">
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            handleDeleteContact={handleDeleteContact}
          />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDeleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default ContactList;
