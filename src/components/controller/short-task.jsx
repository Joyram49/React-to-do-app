import React from "react";
import PropTypes from "prop-types";

import { ButtonGroup, Button } from "reactstrap";

const ShortTask = ({ handleShortTask }) => {
  return (
    <div>
      <ButtonGroup>
        <Button onClick={() => handleShortTask("All")}>All</Button>
        <Button onClick={() => handleShortTask("Running")}>Running</Button>
        <Button onClick={() => handleShortTask("Completed")}>Completed</Button>
      </ButtonGroup>
    </div>
  );
};

ShortTask.propTypes = {
  handleShortTask: PropTypes.func.isRequired,
};
export default ShortTask;
