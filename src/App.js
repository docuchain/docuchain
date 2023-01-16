import "./App.scss";
import PageRouter from "./routes/PageRouter";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <PageRouter />
      </RecoilRoot>
    </div>
  );
}

export default App;
