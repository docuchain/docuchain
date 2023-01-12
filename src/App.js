import "./App.css";
import PageRouter from "./routes/PageRouter";
import { dbService } from "./apis/firebase";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { ThemeContext } from "./ThemeContext";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log(dbService);
  });

  return (
    <div className="App">
      <ThemeContext.Provider>
        <RecoilRoot>
          <PageRouter />
        </RecoilRoot>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
