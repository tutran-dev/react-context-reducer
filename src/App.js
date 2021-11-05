import logo from "./logo.svg";
import "./App.css";
import Reservation from "./components/Reservation";
import Table from "./components/Table";
import AppContextProvider from "./components/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <h1 style={{ textAlign: "center" }}>React Context + Reducer</h1>
      <div className="App">
        <Reservation />
        <Table />
      </div>
    </AppContextProvider>
  );
}

export default App;
