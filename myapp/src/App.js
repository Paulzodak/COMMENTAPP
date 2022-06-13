import logo from "./logo.svg";
import Commentitem from "./components/commentitem/commentitem.js";
import Addcomment from "./components/addcomment/addcomment";
import Card from "./components/commentitem/card";

function App() {
  return (
    <div className="App">
      <Card>
        <Commentitem></Commentitem>
      </Card>
      <Card>
        <Commentitem></Commentitem>
      </Card>
      <Card>
        <Commentitem></Commentitem>
      </Card>
      <Card>
        <Addcomment></Addcomment>
      </Card>
    </div>
  );
}

export default App;
