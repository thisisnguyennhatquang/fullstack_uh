import Delete from "./Delete";

const Name = ({ person, persons, setPersons }) => {
  return (
    <p>
      {person.name} {person.number}
      <Delete id={person.id} persons={persons} setPersons={setPersons} />
    </p>
  );
};

export default Name;
