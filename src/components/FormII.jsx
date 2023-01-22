import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../App";

function FormII(props) {
  const { data, setData } = useContext(AppContext);
  const inputs = [
    "Number of years of employment",
    "Number of loans taken from current bank",
    "amount in current account",
    "amount in savings account",
    "% of income paid as installment",
    "Other loans plans taken",
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
          htmlFor="Number of years of employment"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Number of years of employment
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              "Number of years of employment": e.target.value,
            })
          }
          id="Number of years of employment"
          name="Number of years of employment"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Number of years of employment"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="between 1 and 4 years">between 1 and 4 years</option>
          <option value="greater than 4 years">greater than 4 years</option>
          <option value="less than a year">less than a year</option>
          <option value="unemployed">unemployed</option>
        </select>
      </div>
      <div className="col-span-4">
        <label
          htmlFor="Number of loans taken from current bank"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Number of loans taken from current bank
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              "Number of loans taken from current bank": e.target.value,
            })
          }
          id="Number of loans taken from current bank"
          name="Number of loans taken from current bank"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Number of loans taken from current bank"]}
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
          htmlFor="amount in current account"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          amount in current account
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              "amount in current account": e.target.value,
            })
          }
          id="amount in current account"
          name="amount in current account"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["amount in current account"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="no current account">no current account</option>
          <option value="less than 0">less than 0</option>
          <option value="between 0 and 200">between 0 and 200</option>
          <option value="greater than 200">greater than 200</option>
        </select>
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="amount in savings account"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          amount in savings account
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              "amount in savings account": e.target.value,
            })
          }
          id="amount in savings account"
          name="amount in savings account"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["amount in savings account"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="less than 100">less than 100</option>
          <option value="no savings account">no savings account</option>
          <option value="between 500 and 1000">between 500 and 1000</option>
          <option value="between 100 and 500">between 100 and 500</option>
          <option value="greater than 1000">greater than 1000</option>
        </select>
      </div>
      <div className="col-span-4">
        <label
          htmlFor="% of income paid as installment"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          % of income paid as installment
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              "% of income paid as installment": e.target.value,
            })
          }
          id="% of income paid as installment"
          name="% of income paid as installment"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["% of income paid as installment"]}
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
          htmlFor="Other loans plans taken"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Other loans plans taken
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              "Other loans plans taken": e.target.value,
            })
          }
          id="Other loans plans taken"
          name="Other loans plans taken"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Other loans plans taken"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="stores">stores</option>
          <option value="bank">bank</option>
          <option value="none">none</option>
        </select>
      </div>

      <button
        onClick={() => props.setFormNumber(1)}
        className="py-3 col-start-2 col-end-3 border-black border-[2px] rounded"
      >
        Prev
      </button>
      <button
        onClick={twoToThree}
        className="py-3 col-start-3 col-end-4 border-black border-[2px] rounded"
      >
        Next
      </button>
    </motion.div>
  );
}

export default FormII;
