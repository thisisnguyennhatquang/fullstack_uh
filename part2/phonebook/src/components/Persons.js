const Persons = ({ personsToShow, Name, persons, setPersons }) => {
  return (
    <>
      {personsToShow.map((person) => (
        <Name
          key={person.id}
          person={person}
          persons={persons}
          setPersons={setPersons}
        />
      ))}
    </>
  );
};

export default Persons;
