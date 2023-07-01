import personsService from "../services/persons";

const Delete = ({ id, persons, setPersons }) => {
  const handleClick = () => {
    personsService.remove(id);
    setPersons(persons.filter((person) => person.id !== id));
  };
  return (
    <>
      <button onClick={handleClick}>delete</button>
    </>
  );
};

export default Delete;
