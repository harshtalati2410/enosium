import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../App";

function FormI(props) {
  const { data, setData } = useContext(AppContext);
  const inputs = [
    "Number of people who will provide maintenance",
    "loan amount taken",
    "Loan History",
    "Purpose of taking loan",
    "Guarantor or Debtor",
    "Marital Status",
    "Age of the applicant in Number of Years",
    "Working abroad or not",
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
          htmlFor="Number of people who will provide maintenance"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Maintenance providers
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              "Number of people who will provide maintenance": e.target.value,
            })
          }
          id="Number of people who will provide maintenance"
          name="Number of people who will provide maintenance"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Number of people who will provide maintenance"]}
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
          htmlFor="loan amount taken"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Loan Amount
        </label>
        <input
          onChange={(e) => {
            setData({ ...data, "loan amount taken": e.target.value });
          }}
          id="loan amount taken"
          type="number"
          min="200"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Choose"
          value={data["loan amount taken"]}
        />
      </div>
      <div className="col-span-4">
        <label
          htmlFor="Loan History"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Loan History
        </label>
        <select
          onChange={(e) => {
            setData({ ...data, "Loan History": e.target.value });
          }}
          id="Loan History"
          name="Loan History"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Loan History"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="critical account/other loans existing (not at this bank)">
            critical account/other loans existing (not at this bank)
          </option>
          <option value="existing loans paid back duly till now">
            existing loans paid back duly till now
          </option>
          <option value="all loans at this bank paid back duly">
            all loans at this bank paid back duly
          </option>
          <option value="delay in paying off loans in the past">
            delay in paying off loans in the past
          </option>
          <option value="no loans taken/all loans paid back duly">
            no loans taken/all loans paid back duly
          </option>
        </select>
      </div>
      <div className="col-span-4">
        <label
          htmlFor="Purpose of taking loan"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Purpose of taking loan
        </label>
        <select
          onChange={(e) => {
            setData({ ...data, "Purpose of taking loan": e.target.value });
          }}
          id="Purpose of taking loan"
          name="Purpose of taking loan"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Purpose of taking loan"]}
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
          htmlFor="Guarantor or Debtor"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Guarantor or Debtor
        </label>
        <select
          onChange={(e) => {
            setData({ ...data, "Guarantor or Debtor": e.target.value });
          }}
          name="Guarantor or Debtor"
          id="Guarantor or Debtor"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Guarantor or Debtor"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="none">none</option>
          <option value="gaurantor">gaurantor</option>
          <option value="co-applicant">co-applicant</option>
        </select>
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="Marital Status"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Marital Status
        </label>
        <select
          onChange={(e) => {
            setData({ ...data, "Marital Status": e.target.value });
          }}
          name="Marital Status"
          id="Marital Status"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Marital Status"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="female and divorced/seperated/married">
            female and divorced/seperated/married
          </option>
          <option value="male and single">male and single</option>
          <option value="male and married/widowed">
            male and married/widowed
          </option>
          <option value="male and divorced/seperated">
            male and divorced/seperated
          </option>
        </select>
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="Age of the applicant in Number of Years"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Age
        </label>
        <input
          name="Age of the applicant in Number of Years"
          onChange={(e) => {
            setData({
              ...data,
              "Age of the applicant in Number of Years": e.target.value,
            });
          }}
          type="number"
          min="18"
          max="100"
          placeholder="Choose"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Age of the applicant in Number of Years"]}
        />
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="Working abroad or not"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Working abroad or not
        </label>
        <select
          onChange={(e) => {
            setData({ ...data, "Working abroad or not": e.target.value });
          }}
          id="Working abroad or not"
          name="Working abroad or not"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Working abroad or not"]}
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
        className="py-3 col-start-2 col-end-4 border-black border-[2px] rounded"
      >
        Next
      </button>
    </motion.div>
  );
}

export default FormI;
