import logo from "./logo.svg";
import "./App.css";
import Reservation from "./components/Reservation";
import Table from "./components/Table";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>React Context + Reducer</h1>
      <div className="App">
        <Reservation />
        <Table />
      </div>
    </>
  );
}

export default App;
