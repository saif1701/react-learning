import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const handleTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.floor(Math.random() * 100),
        title: input.trim(),
        status: false,
      },
    ]);
    setInput("");
  };

  const handleDelete = (id) => {
    console.log(id);
    setTodos((prevTodos) => prevTodos.filter((prev) => prev.id !== id));
  };

  const handleStatus = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prev) =>
        prev.id === id ? { ...prev, status: !prev.status } : prev,
      ),
    );
  };

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleSave = () => {
    setEditId(null);
  };

  const handleChange = (id, title) => {
    setTodos((prevTodos) =>
      prevTodos.map((prev) => (prev.id === id ? { ...prev, title } : prev)),
    );
  };
  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={handleTodo}>
        <input
          type="text"
          placeholder="Add TODO"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((item) => (
        <p key={item.id}>
          <input
            type="text"
            value={item.title}
            readOnly={editId !== item.id}
            onChange={(e) => handleChange(item.id, e.target.value)}
          />
          &nbsp;
          <span onClick={() => handleStatus(item.id)}>
            {item.status ? "complete" : "pending"}
          </span>
          &nbsp;
          <button onClick={() => handleDelete(item.id)}>delete</button>&nbsp;
          {editId === item.id ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={() => handleEdit(item.id)}>Edit</button>
          )}
        </p>
      ))}
    </>
  );
};

export default Todo;
