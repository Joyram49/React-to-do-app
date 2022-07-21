import React from "react";
import PropTypes from "prop-types";

import { ButtonGroup, Button } from "reactstrap";

const FilterTask = ({
  handleClearSelected,
  handleClearCompleted,
  handleReset,
}) => {
  return (
    <div>
      <ButtonGroup>
        <Button color='danger' onClick={handleClearSelected}>
          ClearSelected
        </Button>
        <Button color='danger' onClick={handleClearCompleted}>
          ClearCompleted
        </Button>
        <Button color='danger' onClick={handleReset}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

FilterTask.propTypes = {
  handleClearSelected: PropTypes.func.isRequired,
  handleClearCompleted: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};
export default FilterTask;
