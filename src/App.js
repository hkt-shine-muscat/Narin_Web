import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact={true} path={"/"} element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
