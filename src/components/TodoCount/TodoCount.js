const TodoCount = (props) => {

  // filter erstellt uns hier ein neues Array mit Objecten (also Todos)
  // die "completed:true" haben
  const completedTodos = props.todosProp.filter( todoObject => {
    return todoObject.completed === true;
  });

  return (
    <p>
      {completedTodos.length}/{props.todosProp.length} Todos erledigt
    </p>
  );
};

export default TodoCount;