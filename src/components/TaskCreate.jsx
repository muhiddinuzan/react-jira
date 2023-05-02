import { useState } from "react";
function TaskCreate({ onCreate, task, taskformupdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [content, setContent] = useState(task ? task.content : "");
  const changeHandle = (event) => {
    setTitle(event.target.value);
  };
  const changeContent = (event) => {
    setContent(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformupdate) {
      onUpdate(task.id, title, content);
    } else {
      onCreate(title, content);
    }
    setTitle("");
    setContent("");
  };
  return (
    <div>
      {taskformupdate ? (
        <div className="updateDiv">
          <form>
            <label>Task Title Edit</label>
            <input value={title} onChange={changeHandle} />
            <label>Task Content Edit</label>
            <textarea
              rows={5}
              value={content}
              onChange={changeContent}
            ></textarea>
            <button className="updateButton" onClick={handleSubmit}>
              Update
            </button>
          </form>
        </div>
      ) : (
        <div className="createDiv">
          <form>
            <label>Task Title</label>
            <input value={title} onChange={changeHandle} />
            <label>Task Content</label>
            <textarea
              rows={5}
              value={content}
              onChange={changeContent}
            ></textarea>
            <button className="createButton" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
