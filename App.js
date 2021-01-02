import InstrumentPair from "./InstrumentPair";
import OrderBook from "./OrderBook";
import { Dropdown } from "react-bootstrap";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Bids</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Asks</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br></br>

      <InstrumentPair />
      <OrderBook />
      <TodoList />
    </div>
  );
}

export default App;
