import "./App.css";
import Footer from "./pages/common/components/Footer";
import Header from "./pages/common/components/Header";
import PageRouter from "./routes/PageRouter";
function App() {
  return (
    <div className="App">
      <Header />
      <PageRouter />
      <Footer />
    </div>
  );
}

export default App;
