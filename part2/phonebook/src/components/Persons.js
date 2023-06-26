const Persons = ({ personsToShow, Name }) => {
  return (
    <>
      {personsToShow.map((person) => (
        <Name key={person.id} person={person} />
      ))}
    </>
  );
};

export default Persons;
