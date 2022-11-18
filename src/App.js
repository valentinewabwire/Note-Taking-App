import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";

function App() {
  return (
    <div className="container">
      <Header />
      <NoteInput />
      <Content />
    </div>
  );
}

export default App;
