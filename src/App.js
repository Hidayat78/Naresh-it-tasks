// import { useState } from "react";
// import "./App.css";
// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleTask = () => {
//     if (newTask.trim() !== "") {
//       setTasks([...tasks, newTask]);
//       setNewTask("");
//     }
//   };
//   const handleDelete = (index) => {
//     const filterData = tasks.filter((item, i) => i !== index);
//     setTasks(filterData);
//   };
//   return (
//     <div className="App">
//       <h1>Hidaat Morning star' work</h1>
//       <input
//         type="text"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//         placeholder="Add task "
//       />
//       <button onClick={handleTask}>Add</button>

//       <ul>
//         {tasks.map((ele, index) => (
//           <li key={index}>
//             {ele}
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Inc</button>
//       {count}
//       <button onClick={() => setCount(count - 1)}>Dec</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const HandlTasl = () => {
//     if (newTask.trim() !== "") {
//       setTasks([...tasks, newTask]);
//       setNewTask("");
//     }
//   };
//   const handleDelete = (index) => {
//     const filterData = tasks.filter((item, i) => i !== index);
//     setTasks(filterData);
//   };
//   return (
//     <div>
//       <h1>Add task</h1>
//       <input
//         value={newTask}
//         type="text"
//         onChange={(e) => setNewTask(e.target.value)}
//         placeholder="Enter a task"
//       />
//       <button onClick={HandlTasl}>Add</button>
//       <ul>
//         {tasks.map((item, index) => (
//           <li key={index}>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

const App = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(editClick){
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false)
      setInputs({
        name: "",
        email: "",
      });
    }else{
      setTableData([...tableData, inputs]);
    setInputs({
      name: "",
      email: "",
    });
    }
  };
  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];
    setInputs({
      name: tempData.name,
      email: tempData.email,
    });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <button>{editClick ? "Update" : "Add"}</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => handleEdit(i)}>Edit</button>
                  <button onClick={() => handleDelete(i)}>Delte</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
