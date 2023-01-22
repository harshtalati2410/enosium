import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedComponents";
import { useState, createContext } from "react";


export const AppContext = createContext();

function App() {
  const [data, setData] = useState({
    "Number of people who will provide maintenance": "",
    "Loan History": "",
    "Purpose of taking loan": "",
    "loan amount taken": "",
    "Guarantor or Debtor": "",
    "Number of years of employment": "",
    "Marital Status": "",
    "Number of loans taken from current bank":"",
    "Age of the applicant in Number of Years": "",
    "amount in current account": "",
    "amount in savings account": "",
    "% of income paid as installment": "",
    "Other loans plans taken": "",
    "Working abroad or not": "",
    "Is there telephone number available": "Yes",
    "time duration for loan": "",
    "Owned property": "",
    "Type of job performed": "",
    "Type of Housing": "",
    "Number of years of stay in current address": "",
  });

  return (
    <AppContext.Provider value={{ data, setData }}>
      <div className="block w-full">
        <Router>
          <div className="sticky z-40 top-0 h-[70px] bg-white border-b-[2px] border-solid border-gray-300">
            <Navbar />
          </div>
          <AnimatedRoutes />
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
