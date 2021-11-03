import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListUserComponent from "./components/ListUserComponent";
import CreateUserComponent from "./components/CreateUserComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />

        <Switch>
          http://localhost:3000/add-user
          <Route path="/" component={ListUserComponent}></Route>
          <Route path="/users" component={ListUserComponent}></Route>
          <Route path="/add-user" component={CreateUserComponent}></Route>
        </Switch>

        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
