const Filter = ({ filterInputId, handleChange, filter}) => {
  return (
    <>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        type="tel"
        name="filter"
        id={filterInputId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={filter}
      />
    </>
  );
};

export {Filter}