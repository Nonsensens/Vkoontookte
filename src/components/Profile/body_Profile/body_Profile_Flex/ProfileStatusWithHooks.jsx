import React, { useState } from "react";
import { useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(true);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(false);
  };
  const deactivateEditMode = () => {
    setEditMode(true);
    props.updateStatus(status);
  };
  function deactivateEditModeEnter(event) {
    if (event.keyCode === 13) {
      setEditMode(true);
      props.updateStatus(status);
    }
    return;
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
        </div>
      )}
      {!editMode && (
        <div>
          <input
            onKeyDown={deactivateEditModeEnter}
            value={status}
            autoFocus={true}
            onBlurCapture={deactivateEditMode}
            onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
