import { useState } from "react";

const Task = ({x, i, deleteTaxFunction}) => {
  const [color, setColor] = useState('black')

  const changeColor= () => setColor((prev) => prev !== 'green'? 'green': 'black')
  return <div>
  {" "}
  <h3 key={i} style={{color: `${color}`}}>
    {i}. {x.taskName}
  </h3>
  <button onClick={changeColor}>Complete</button>
  <button onClick={() => deleteTaxFunction(x.id)}>x</button>
</div>
}

export const Test = () => {
  const [todoList, settodoList] = useState([]);
  const [newTax, setnewTax] = useState("");

  const inputTax = (e) => setnewTax(() => e.target.value);

  const AddTodo = () => {
    const task = {
      id: todoList.length === 0? 1: todoList[todoList.length - 1].id + 1,
      taskName: newTax
    }
    settodoList((prev) => [...prev, task]);
  };

  const deleteTax = (taskName) => {
    settodoList((prev) => prev.filter((todo) => todo.id !== taskName))
  }

  return (
    <>
      <input type="text" onChange={inputTax} />
      <button onClick={AddTodo}>Add Tax</button>
      {todoList.map((x, i) => (
        <Task x={x} i={i} deleteTaxFunction= {deleteTax}/>
      ))}
      <p>{newTax}</p>
    </>
  );
};
