const ContactItem = ({ name, number, handleDeleteContact }) => {
  return (
    <li>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button onClick={handleDeleteContact} data-name={name}>Delete</button>
    </li>
  );
};

export { ContactItem };
