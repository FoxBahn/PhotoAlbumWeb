import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListUserComponent from "./components/ListUserComponent";
import CreateUserComponent from "./components/CreateUserComponent";
import UpdateUserComponent from "./components/UpdateUserComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import UploadImageComponent from "./components/UploadImageComponent";
import ViewImageComponent from "./components/ViewImageComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={UploadImageComponent}></Route>
            <Route path="/users" component={ListUserComponent}></Route>
            <Route path="/add-users" component={CreateUserComponent}></Route>
            <Route
              path="/update-users/:id"
              component={UpdateUserComponent}
            ></Route>
            <Route path="/login" exact component={LoginComponent}></Route>
            <Route path="/register" exact component={RegisterComponent}></Route>
            <Route path="/photos" component={ViewImageComponent}></Route>
            <Route
              path="/upload_photos"
              exact
              component={UploadImageComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
