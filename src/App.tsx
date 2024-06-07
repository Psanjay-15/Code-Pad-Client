import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import CodeEditor from "./pages/CodeEditor";
import LandingPage from "./components/Landing/LandingPage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/codeeditor/:roomId" element={<CodeEditor />} />
    </Routes>
  );
}

export default App;
