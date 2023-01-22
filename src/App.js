import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedComponents";
import { useState, createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

function App() {
  const [data, setData] = useState({
    Number_of_people_who_will_provide_maintenance: "",
    Loan_History: "",
    Purpose_of_taking_loan: "",
    loan_amount_taken: "",
    Guarantor_or_Debtor: "",
    Number_of_years_of_employment: "",
    Marital_Status: "",
    Number_of_loans_taken_from_current_bank: "",
    Age_of_the_applicant_in_Number_of_Years: "",
    amount_in_current_account: "",
    amount_in_savings_account: "",
    of_income_paid_as_installment: "",
    Other_loans_plans_taken: "",
    Working_abroad_or_not: "",
    Is_there_telephone_number_available: "Yes",
    time_duration_for_loan: "",
    Owned_property: "",
    Type_of_job_performed: "",
    Type_of_Housing: "",
    Number_of_years_of_stay_in_current_address: "",
  });

  const postData = async () => {
    await axios
      .post("https://lpdq42.deta.dev/model", data)
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AppContext.Provider value={{ data, setData, postData }}>
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
