import { useTodo } from "./TodoService";
import TodoTemplate from "./template/TodoTemplate";
import TodoHead from "./template/head/TodoHead";
import TodoList from "./template/list/TodoList";
import TodoCreate from "./template/create/TodoCreate";
import TodoFooter from "./template/footer/TodoFooter";
import { Fragment } from "react";

const TodoContainer = () => {
  const {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  } = useTodo();
  
  return (
    <Fragment>
      <TodoTemplate>
        <TodoHead />
        <TodoCreate
          nextId={nextIdState}
          createTodo={createTodo}
          incrementNextId={incrementNextId}
        />
        <TodoList
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          todos={todoState}
        />
        <TodoFooter todos={todoState} />
      </TodoTemplate>
    </Fragment>
  );
};

export default TodoContainer;
