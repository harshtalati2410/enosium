import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedComponents";

function App() {
  return (
    <div className="block w-full">
      <Router>
        <div className="sticky z-40 top-0 h-[70px] bg-white border-b-[2px] border-solid border-gray-300">
          <Navbar />
        </div>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
