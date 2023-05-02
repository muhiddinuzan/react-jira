import { useState } from "react";
import TaskCreate from "./TaskCreate";
function TaskWrite({ task, onDelete, onUpdate }) {
  const [edit, setEdit] = useState(false);
  const handleDelete = () => {
    onDelete(task.id);
  };
  const handleUpdate = () => {
    setEdit(!edit);
  };
  const handleEdit = (id, Updatetitle, Updatecontent) => {
    setEdit(false);
    onUpdate(id, Updatetitle, Updatecontent);
  };
  return (
    <div className="contentList">
      {edit ? (
        <TaskCreate task={task} taskformupdate={true} onUpdate={handleEdit} />
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.content}</p>
          <div>
            <button className="listDelete" onClick={handleDelete}>
              Delete
            </button>
            <button className="listUpdate" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskWrite;
