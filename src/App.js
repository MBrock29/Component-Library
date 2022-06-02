import "./App.css";
import { Button } from "./atoms/button/Button";
import Fetch from "./pages/Fetch";
import Theme from "./styles/Theme";

function App() {
  return (
    <Theme>
      <div className="App">
        <Button />
        <Button variant="secondary" />
        <Fetch />
      </div>
    </Theme>
  );
}

export default App;
