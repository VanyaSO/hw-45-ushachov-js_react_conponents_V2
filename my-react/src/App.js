import './App.css';
import Props from "./components/Props";

function App() {
  return (
      <div className="App">
        <Props title={"Заголовок"}/>
        <Props text={"Тут просто текст"}/>
        <Props title={"Заголовок"} text={"Тут просто текст"}/>
      </div>
  );
}

export default App;
