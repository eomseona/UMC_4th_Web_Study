import { Box, Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
    setText("");
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        "& .MuiTextField-root": { flexGrow: 1, marginRight: "16px" },
      }}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        value={text}
        onChange={(event) => setText(event.target.value)}
        label="New todo"
        variant="outlined"
        size="small"
        style={{ width: 300, background: "white", opacity: "0.8" }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginLeft: "10px" }}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoForm;
