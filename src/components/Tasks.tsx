interface Props {
  arrTasks: string[];
  delBtn: (task: string) => void;
  compBtn: (task: string) => void;
  arrComp: string[];
}

const Tasks = ({ arrTasks, delBtn, compBtn, arrComp }: Props) => {
  return (
    <div>
      <ul className="list-group mx-auto">
        {arrTasks.map((task) => (
          <div className="idv-task">
            <li className="list-group-item" key={task}>
              <div className="task">
                <input
                  className="compCheck"
                  id={"checkbox-${task}"}
                  type="checkbox"
                  value=""
                  checked={arrComp.includes(task) ? true : false}
                  onChange={() => compBtn(task)}
                ></input>

                {arrComp.includes(task) && (
                  <span
                    className="taskName"
                    style={{ textDecoration: "line-through" }}
                  >
                    {task}
                  </span>
                )}
                {!arrComp.includes(task) && (
                  <span className="taskName" style={{ textDecoration: "none" }}>
                    {task}
                  </span>
                )}
              </div>
              <text> </text>
              <text> </text>
              <button
                type="button"
                className="btn btn-light btn-sm btn-outline-dark delete-btn"
                onClick={() => delBtn(task)}
              >
                delete
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
