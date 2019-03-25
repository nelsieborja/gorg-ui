import React from 'react';
import { func, shape, string } from 'prop-types';

function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}

// Specifies the shape of the data that the component expects
// for self documenting and helps catch problems early
Task.propTypes = {
  task: shape({
    id: string.isRequired,
    title: string.isRequired,
    state: string.isRequired
  }),
  onArchiveTask: func,
  onPinTask: func
};

export default Task;
