import React from "react";
import PropTypes from "prop-types";

import { InputGroup, Input, Label } from "reactstrap";

const ViewControl = ({ view, handleViewControl }) => {
  return (
    <div>
      <InputGroup className=' d-flex d-inline-block'>
        <Label htmlFor='list-view'>
          <Input
            className='mx-3'
            type='radio'
            id='list-view'
            name='view'
            value='list'
            onChange={(e) => handleViewControl(e.target.value)}
            checked={view === "list"}
          />
          List View
        </Label>
        <Label htmlFor='list-view'>
          <Input
            className='mx-3'
            type='radio'
            id='table-view'
            name='view'
            value='table'
            onChange={(e) => handleViewControl(e.target.value)}
            checked={view === "table"}
          />
          List View
        </Label>
      </InputGroup>
    </div>
  );
};

ViewControl.propTypes = {
  view: PropTypes.string.isRequired,
  handleViewControl: PropTypes.func.isRequired,
};

export default ViewControl;
