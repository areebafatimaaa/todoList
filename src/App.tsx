import { useState } from "react";
import Heading from "./components/Heading";
import Tasks from "./components/Tasks";

const App = () => {
  const [val, setVal] = useState("");
  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  };

  const [arrT, setArrT] = useState<string[]>([]);
  const clickHandler = () => {
    if (val.trim() != "" && !arrT.includes(val)) {
      const newArr = [...arrT, val];
      setArrT(newArr);
    }
    setVal("");
  };

  const [compArr, setCompArr] = useState<string[]>([]);
  const delTasks = (task: string) => {
    const newArr = arrT.filter((n, _) => n != task);
    setArrT(newArr);
    const nArr = compArr.filter((n, _) => n != task);
    setCompArr(nArr);
  };

  const compTasks = (task: string) => {
    if (compArr.includes(task)) {
      const newArr = compArr.filter((n, _) => n != task);
      setCompArr(newArr);
    } else {
      const tempArr = [...compArr, task];
      setCompArr(tempArr);
    }
  };

  return (
    <div>
      <Heading />
      <div className="input-group mb-3 mx-auto">
        <input
          type="text"
          value={val}
          onChange={change}
          className="form-control input-bar"
          placeholder="Enter Task"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              clickHandler();
            }
          }}
        />
        <button className="btn addBtn" onClick={clickHandler}>
          Add Task
        </button>
      </div>
      <Tasks
        arrTasks={arrT}
        delBtn={delTasks}
        compBtn={compTasks}
        arrComp={compArr}
      />
    </div>
  );
};

export default App;
