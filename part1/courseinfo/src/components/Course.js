const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

//   const Part = (props) => {
//     console.log(props);
//     return (
//       <p>
//         {props.part} {props.exercises}
//       </p>
//     );
//   };

//   const Content = (props) => {
//     console.log(props);
//     return (
//       <div>
//         <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
//         <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
//         <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
//       </div>
//     );
//   };

//   const Total = (props) => {
//     console.log(props);
//     return (
//       <p>
//         Number of exercises{" "}
//         {props.parts[0].exercises +
//           props.parts[1].exercises +
//           props.parts[2].exercises}
//       </p>
//     );
//   };

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
    </div>
  );
};

export default Course;
