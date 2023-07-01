import personsService from "../services/persons";

const Delete = ({ id }) => {
  const handleClick = () => {
    personsService.remove(id);
  };
  return (
    <>
      <button onClick={handleClick}>delete</button>
    </>
  );
};

export default Delete;
