import React from "react";
import { Box, Checkbox, Typography, Button } from "@material-ui/core";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const { id, text, completed } = todo;
  return (
    <Box
      style={{
        width: "370px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "5px",
      }}
    >
      <Checkbox checked={completed} onChange={() => onToggle(id)} />
      <Typography
        variant="body1"
        sx={{
          flexGrow: 1,
          mr: "16px",
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </Typography>
      <Button
        variant="outlined"
        size="small"
        color="secondary"
        onClick={() => onDelete(id)}
      >
        clear
      </Button>
    </Box>
  );
};

export default TodoItem;
