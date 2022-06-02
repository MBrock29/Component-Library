import "./App.css";
import { Button } from "./atoms/button/Button";
import Theme from "./styles/Theme";

function App() {
  return (
    <Theme>
      <div className="App">
        <Button />
        <Button variant="secondary" />
      </div>
    </Theme>
  );
}

export default App;
