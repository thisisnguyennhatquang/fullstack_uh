import Delete from "./Delete";

const Name = ({ person }) => {
  return (
    <p>
      {person.name} {person.number} <Delete id={person.id} />
    </p>
  );
};

export default Name;
