import './TodoItem.css';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li>
      <span className={todo.completed ? 'completed' : ''}>
        {todo.text}
      </span>
      <div className="todo-buttons">
        <button className="todo-button" onClick={() => toggleComplete(todo.id)}>
          ✅
        </button>
        <button className="todo-button" onClick={() => deleteTodo(todo.id)}>
          ❌
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
