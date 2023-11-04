import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import DynamicStyling from "./DynamicStyling";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";

function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <JavaScript />
      <PathParameters />
      <DynamicStyling />
      <ConditionalOutput />
      <TodoItem />
      <TodoList />
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Assignment3;
