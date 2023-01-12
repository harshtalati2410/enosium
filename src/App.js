import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="flex overflow-hidden w-full h-[100vh] ">
      <div
        className="hidden lg:block h-full w-1/5 min-w-[250px] border-r-[1px] border-solid border-gray-700
      "
      >
        <div className="h-[70px] flex justify-center align-middle border-b-[1px] border-gray-700">
          logo
        </div>

        <div className="h-full">
          <Sidebar />
        </div>
      </div>
      <div className="w-full lg:w-4/5 block">
        <div className="h-[70px] border-b-[1px] border-solid border-gray-700">
          <Navbar />
        </div >
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
