import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../App";

function FormII(props) {
  const { data, setData } = useContext(AppContext);
  const inputs = [
    "Number_of_years_of_employment",
    "Number_of_loans_taken_from_current_bank",
    "amount_in_current_account",
    "amount_in_savings_account",
    "of_income_paid_as_installment",
    "Other_loans_plans_taken",
  ];

  const twoToThree = (e) => {
    e.preventDefault();
    let errorFields = [];
    inputs.forEach((input) => {
      if (data[input] === 0 || data[input] === "") {
        errorFields = [...errorFields, input];
      }
    });
    if (errorFields.length === 0) {
      props.setFormNumber(3);
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
      <div className="col-span-4">
        <label
          htmlFor="Number_of_years_of_employment"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Number of years of employment
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              Number_of_years_of_employment: e.target.value,
            })
          }
          id="Number_of_years_of_employment"
          name="Number_of_years_of_employment"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Number_of_years_of_employment"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="between 1 and 4 years">Between 1 and 4 years</option>
          <option value="greater than 4 years">Greater than 4 years</option>
          <option value="less than a year">Less than a year</option>
          <option value="unemployed">Unemployed</option>
        </select>
      </div>
      <div className="col-span-4">
        <label
          htmlFor="Number_of_loans_taken_from_current_bank"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Number of loans taken from current bank
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              Number_of_loans_taken_from_current_bank: e.target.value,
            })
          }
          id="Number_of_loans_taken_from_current_bank"
          name="Number_of_loans_taken_from_current_bank"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Number_of_loans_taken_from_current_bank"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="amount_in_current_account"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          amount in current account
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              amount_in_current_account: e.target.value,
            })
          }
          id="amount_in_current_account"
          name="amount_in_current_account"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["amount_in_current_account"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="no current account">No current account</option>
          <option value="less than 0">Less than 0</option>
          <option value="between 0 and 200">Between 0 and 200</option>
          <option value="greater than 200">Greater than 200</option>
        </select>
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="amount_in_savings_account"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          amount in savings account
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              amount_in_savings_account: e.target.value,
            })
          }
          id="amount_in_savings_account"
          name="amount_in_savings_account"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["amount_in_savings_account"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="less than 100">Less than 100</option>
          <option value="no savings account">No savings account</option>
          <option value="between 500 and 1000">Between 500 and 1000</option>
          <option value="between 100 and 500">Between 100 and 500</option>
          <option value="greater than 1000">Greater than 1000</option>
        </select>
      </div>
      <div className="col-span-4">
        <label
          htmlFor="of_income_paid_as_installment"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          % of income paid as installment
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              of_income_paid_as_installment: e.target.value,
            })
          }
          id="of_income_paid_as_installment"
          name="of_income_paid_as_installment"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["of_income_paid_as_installment"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="Other_loans_plans_taken"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Other loans plans taken
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              Other_loans_plans_taken: e.target.value,
            })
          }
          id="Other_loans_plans_taken"
          name="Other_loans_plans_taken"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Other_loans_plans_taken"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="stores">Stores</option>
          <option value="bank">Bank</option>
          <option value="none">None</option>
        </select>
      </div>

      <button
        onClick={() => props.setFormNumber(1)}
        className="py-3 col-start-2 col-end-3 text-blue-600 border-blue-600 border-[2px] rounded hover:bg-blue-600 hover:border-blue-600 hover:scale-105 hover:text-white transition-all duration-300"
      >
        Prev
      </button>
      <button
        onClick={twoToThree}
        className="py-3 col-start-3 col-end-4 text-blue-600 border-blue-600 border-[2px] rounded hover:bg-blue-600 hover:border-blue-600 hover:scale-105 hover:text-white transition-all duration-300"
      >
        Next
      </button>
    </motion.div>
  );
}

export default FormII;
