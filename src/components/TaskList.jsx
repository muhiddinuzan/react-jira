import TaskWrite from "./TaskWrite";

function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="tasksList">
      {tasks.map((task, index) => {
        return (
          <TaskWrite
            key={index}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
