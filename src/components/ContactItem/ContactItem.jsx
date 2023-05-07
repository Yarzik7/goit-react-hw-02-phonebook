import PropTypes from 'prop-types';

const ContactItem = ({ name, number, handleDeleteContact }) => {
  return (
    <li>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button onClick={handleDeleteContact} data-name={name}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
