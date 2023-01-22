import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../App";

function FormI(props) {
  const { data, setData } = useContext(AppContext);
  const inputs = [
    "Number_of_people_who_will_provide_maintenance",
    "loan_amount_taken",
    "Loan_History",
    "Purpose_of_taking_loan",
    "Guarantor_or_Debtor",
    "Marital_Status",
    "Age_of_the_applicant_in_Number_of_Years",
    "Working_abroad_or_not",
  ];

  const oneToTwo = (e) => {
    e.preventDefault();
    let errorFields = [];
    inputs.forEach((input) => {
      if (data[input] === 0 || data[input] === "") {
        errorFields = [...errorFields, input];
      }
    });
    if (errorFields.length === 0) {
      props.setFormNumber(2);
    } else {
      alert(`Fill the following fields properly.`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-4 gap-4 "
    >
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="Number_of_people_who_will_provide_maintenance"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Maintenance providers
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              Number_of_people_who_will_provide_maintenance: e.target.value,
            })
          }
          id="Number_of_people_who_will_provide_maintenance"
          name="Number_of_people_who_will_provide_maintenance"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Number_of_people_who_will_provide_maintenance"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="loan_amount_taken"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Loan Amount
        </label>
        <input
          onChange={(e) => {
            setData({ ...data, loan_amount_taken: e.target.value });
          }}
          id="loan_amount_taken"
          type="number"
          min="200"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Choose"
          value={data["loan_amount_taken"]}
        />
      </div>
      <div className="col-span-4">
        <label
          htmlFor="Loan_History"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Loan History
        </label>
        <select
          onChange={(e) => {
            setData({ ...data, Loan_History: e.target.value });
          }}
          id="Loan_History"
          name="Loan_History"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Loan_History"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="critical account/other loans existing (not at this bank)">
            Critical account/other loans existing (not at this bank)
          </option>
          <option value="existing loans paid back duly till now">
            Existing loans paid back duly till now
          </option>
          <option value="all loans at this bank paid back duly">
            All loans at this bank paid back duly
          </option>
          <option value="delay in paying off loans in the past">
            Delay in paying off loans in the past
          </option>
          <option value="no loans taken/all loans paid back duly">
            No loans taken/all loans paid back duly
          </option>
        </select>
      </div>
      <div className="col-span-4">
        <label
          htmlFor="Purpose_of_taking_loan"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Purpose of taking loan
        </label>
        <select
          onChange={(e) => {
            setData({ ...data, Purpose_of_taking_loan: e.target.value });
          }}
          id="Purpose_of_taking_loan"
          name="Purpose_of_taking_loan"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Purpose_of_taking_loan"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="New Car Purchase">New Car Purchase</option>
          <option value="Purchase of radio/television">
            Purchase of radio/television
          </option>
          <option value="Old Car Repair">Old Car Repair</option>
          <option value="Purchase of furniture/equipment">
            Purchase of furniture/equipment
          </option>
          <option value="Education Loan">Education Loan</option>
          <option value="Loan for business establishment">Business Loan</option>
          <option value="Loan for retraining">Loan for retraining</option>
          <option value="Purchase of domestic appliances">
            Purchase of domestic appliances
          </option>
          <option value="Other repairs">Other repairs</option>
        </select>
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="Guarantor_or_Debtor"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Guarantor or Debtor
        </label>
        <select
          onChange={(e) => {
            setData({ ...data, Guarantor_or_Debtor: e.target.value });
          }}
          name="Guarantor_or_Debtor"
          id="Guarantor_or_Debtor"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Guarantor_or_Debtor"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="none">None</option>
          <option value="gaurantor">Gaurantor</option>
          <option value="co-applicant">Co-applicant</option>
        </select>
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="Marital_Status"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Marital Status
        </label>
        <select
          onChange={(e) => {
            setData({ ...data, Marital_Status: e.target.value });
          }}
          name="Marital_Status"
          id="Marital_Status"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Marital_Status"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="female and divorced/seperated/married">
            Female and divorced/seperated/married
          </option>
          <option value="male and single">male and single</option>
          <option value="male and married/widowed">
            Male and married/widowed
          </option>
          <option value="male and divorced/seperated">
            Male and divorced/seperated
          </option>
        </select>
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="Age_of_the_applicant_in_Number_of_Years"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Age
        </label>
        <input
          name="Age_of_the_applicant_in_Number_of_Years"
          onChange={(e) => {
            setData({
              ...data,
              Age_of_the_applicant_in_Number_of_Years: e.target.value,
            });
          }}
          type="number"
          min="18"
          max="100"
          placeholder="Choose"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Age_of_the_applicant_in_Number_of_Years"]}
        />
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="Working_abroad_or_not"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Working abroad or not
        </label>
        <select
          onChange={(e) => {
            setData({ ...data, Working_abroad_or_not: e.target.value });
          }}
          id="Working_abroad_or_not"
          name="Working_abroad_or_not"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Working_abroad_or_not"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <button
        onClick={oneToTwo}
        className="py-3 col-start-2 col-end-4 text-blue-600 border-blue-600 border-[2px] rounded hover:bg-blue-600 hover:border-blue-600 hover:scale-105 hover:text-white transition-all duration-300"
      >
        Next
      </button>
    </motion.div>
  );
}

export default FormI;
