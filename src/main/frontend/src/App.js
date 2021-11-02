import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListUserComponent from "./components/ListUserComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <ListUserComponent></ListUserComponent>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
