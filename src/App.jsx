import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(() => [
    { id: Date.now(), text: "Sample todo — Try adding or discard entries" },
  ]);

  const [text, setText] = useState("");

  function handleAdd() {
    const trimmed = text.trim();
    if (!trimmed) return; 
    const newTodo = { id: Date.now(), text: trimmed };
    setTodos((prev) => [newTodo, ...prev]);
    setText("");
  }

  function handleDelete(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleAdd();
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-slate-700">Todo List</h1>
          <p className="text-sm text-slate-500 mt-1">Things to do</p>
        </header>

        <div className="flex gap-3 items-center mb-6">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Enter the todos..."
            className="flex-1 border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition"
          >
            Add
          </button>
        </div>

        <div>
          {todos.length === 0 ? (
            <div className="text-center text-slate-500 py-8">No todos yet-!</div>
          ) : (
            <ul className="space-y-3">
              {todos.map((t) => (
                <li
                  key={t.id}
                  className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-md p-3"
                >
                  <div className="text-slate-700">{t.text}</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
