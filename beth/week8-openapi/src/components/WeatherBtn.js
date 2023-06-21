import React from "react";
import { Button } from "@material-ui/core";

const WeatherBtn = ({ city }) => {
  return (
    <Button variant="outlined" color="primary" style={{ margin: "10px" }}>
      {city}
    </Button>
  );
};

export default WeatherBtn;
