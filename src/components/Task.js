//creating the task component
const Task = (props) => {
    return <div>
            <h1>{props.taskName}</h1>
            <button onClick={() => {
              props.deleteTask(props.id);
            }}>Delete</button>
            <div style={{
              backgroundColor:props.completed ? "green" : "white"
            }}>
            <button onClick= {() => {
              props.completeTask(props.id);
            }}>Complete</button>
            </div>
     </div>
}

export default Task;