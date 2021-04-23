import ToDoList from "./components/ToDoList";

function App() {
  // AlertButton({ messsage: "Вот ты и попался, сука", children: "Нажми меня" });
  return (
    <div className="App">
      <ToDoList title="Список учебных материалов" />
    </div>
  );
}

export default App;
