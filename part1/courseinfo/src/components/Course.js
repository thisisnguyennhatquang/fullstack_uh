const Course = ({ props }) => {
  const { course } = props;
  return <li>{course.content}</li>;
};

export default Course;
