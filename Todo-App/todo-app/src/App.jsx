import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();

    if (!title || !description) return;

    const newTodo = {
      title,
      description,
    };

    setTodo([newTodo, ...todo]);

    setTitle("");
    setDescription("");
  };

  const editTodo = (index) => {
    const updatedVal = prompt("Enter updated title", todo[index].title);
    if (!updatedVal) return;

    const updatedTodos = [...todo];
    updatedTodos[index] = {
      ...updatedTodos[index],
      title: updatedVal,
    };

    setTodo(updatedTodos);
  };

  const deleteTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">

      <div className="w-full max-w-2xl">

        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8">
          ⚡ Todo Master
        </h1>

        {/* Form */}
        <form
          onSubmit={addTodo}
          className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10"
        >
          <input
            className="w-full p-3 mb-3 rounded-xl bg-white/10 outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="w-full p-3 mb-3 rounded-xl bg-white/10 outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition font-semibold"
          >
            Add Todo
          </button>
        </form>

        {/* Todo List */}
        <div className="mt-8 space-y-4">

          {todo.length === 0 ? (
            <p className="text-center text-gray-400">
              No todos yet 🚀
            </p>
          ) : (
            todo.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl flex justify-between items-center hover:scale-[1.02] transition"
              >
                <div>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => editTodo(index)}
                    className="px-4 py-2 rounded-xl bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/40"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTodo(index)}
                    className="px-4 py-2 rounded-xl bg-red-500/20 text-red-300 hover:bg-red-500/40"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
}

export default App;