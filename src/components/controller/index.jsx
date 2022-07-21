import React from "react";
import PropTypes from "prop-types";

import SearchPanel from "./search-panel";
import ShortTask from "./short-task";
import ViewControl from "./view-control";
import FilterTask from "./filter-task";

const Controller = ({
  term,
  handleSearch,
  toggleForm,
  handleShortTask,
  view,
  handleViewControl,
  handleClearSelected,
  handleClearCompleted,
  handleReset,
}) => {
  return (
    <div className='mb-3'>
      <SearchPanel
        term={term}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
      />
      <div className='d-flex justify-content-between'>
        <ShortTask handleShortTask={handleShortTask} />
        <ViewControl view={view} handleViewControl={handleViewControl} />
        <FilterTask
          handleClearSelected={handleClearSelected}
          handleClearCompleted={handleClearCompleted}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
};

Controller.propTypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  handleShortTask: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  handleViewControl: PropTypes.func.isRequired,
  handleClearCompleted: PropTypes.func.isRequired,
  handleClearSelected: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};
export default Controller;
