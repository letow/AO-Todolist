import "./App.scss";
import TodoList from "./Components/TodoList/TodoList";
import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <TodoList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
