import { ContactItem } from 'components/ContactItem/ContactItem';

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

export { ContactList };
