// import "./App.css";
import PageRouter from "./routes/PageRouter";
import { dbService } from "./apis/firebase";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    console.log(dbService);
  });

  return (
    <div className="App">
      <PageRouter />
    </div>
  );
}

export default App;
