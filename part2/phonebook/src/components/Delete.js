import personsService from "../services/persons";

const Delete = ({ id, persons, setPersons }) => {
  const handleClick = () => {
    const result = window.confirm(
      `Delete ${persons.find((person) => person.id === id).name}?`
    );
    if (result === true) {
      personsService.remove(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };
  return (
    <>
      <button onClick={handleClick}>delete</button>
    </>
  );
};

export default Delete;
