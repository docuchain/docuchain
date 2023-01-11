import "./App.css";
import PageRouter from "./routes/PageRouter";
import { dbService } from "./apis/firebase";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
function App() {
  useEffect(() => {
    console.log(dbService);
  });

  return (
    <div className="App">
      <RecoilRoot>
        <PageRouter />
      </RecoilRoot>
    </div>
  );
}

export default App;
