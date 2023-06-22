import { Box, Paper, Typography } from "@material-ui/core";
import React, { memo, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
const App = memo((props) => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };
  const handleToggleTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <Box
      style={{
        margin: "50px auto",
        width: "440px",
        height: "600px",
        background: "#ddffee",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        boxShadow: "1px 4px 3px 1px #bbccdd",
      }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        TODO LIST
      </Typography>
      <Paper
        component={TodoForm}
        onSubmit={handleAddTodo}
        marginBottom="16px"
      />
      <Paper
        component={TodoList}
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </Box>
  );
});

export default App;
