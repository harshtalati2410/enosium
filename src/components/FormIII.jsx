import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../App";

function FormIII(props) {
  const { data, setData } = useContext(AppContext);
  const inputs = [
    "Is there telephone number available",
    "time duration for loan",
    "Type of Housing",
    "Owned property",
    "Type of job performed",
    "Number of years of stay in current address",
  ];
  const formSubmit = (e) => {
    e.preventDefault();
    let errorFields = [];
    inputs.forEach((input) => {
      if (data[input] === 0 || data[input] === "") {
        errorFields = [...errorFields, input];
      }
    });
    if (errorFields.length === 0) {
        
      props.handleClose();
    } else {
      alert(`Fill the following fields properly.`);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-4 gap-4"
    >
      <div className="col-span-4">
        <label
          htmlFor="Is there telephone number available"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Is there telephone number available?
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              "Is there telephone number available": e.target.value,
            })
          }
          id="Is there telephone number available"
          name="Is there telephone number available"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Is there telephone number available"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="time duration for loan"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Time duration (in Months)
        </label>
        <input
          onChange={(e) =>
            setData({
              ...data,
              "time duration for loan": e.target.value,
            })
          }
          id="time duration for loan"
          type="number"
          min="4"
          max="72"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Choose"
          value={data["time duration for loan"]}
        />
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="Type of Housing"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Type of Housing
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              "Type of Housing": e.target.value,
            })
          }
          name="Type of Housing"
          id="Type of Housing"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Type of Housing"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="own">own</option>
          <option value="rent">rent</option>
          <option value="for free">for free</option>
        </select>
      </div>
      <div className="col-span-4">
        <label
          htmlFor="Owned property"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Owned property
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              "Owned property": e.target.value,
            })
          }
          id="Owned property"
          name="Owned property"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Owned property"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="Real Estate">Real Estate</option>
          <option value="car or other property">car or other property</option>
          <option value="No property">No property</option>
          <option value="building society savings agreement/life insurance">
            building society savings agreement/life insurance
          </option>
        </select>
      </div>
      <div className="col-span-4">
        <label
          htmlFor="Type of job performed"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Type of job performed
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              "Type of job performed": e.target.value,
            })
          }
          id="Type of job performed"
          name="Type of job performed"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Type of job performed"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="skilled employee / official">
            skilled employee / official
          </option>
          <option value="unskilled - resident">unskilled - resident</option>
          <option value="management/ self-employed/highly qualified employee/ officer">
            management/ self-employed/highly qualified employee/ officer
          </option>
          <option value="unemployed/ unskilled - non-resident">
            unemployed/ unskilled - non-resident
          </option>
        </select>
      </div>
      <div className="col-span-4">
        <label
          htmlFor="Number of years of stay in current address"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Number of years of stay in current address
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              "Number of years of stay in current address": e.target.value,
            })
          }
          name="Number of years of stay in current address"
          id="Number of years of stay in current address"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Number of years of stay in current address"]}
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
      <button
        onClick={() => props.setFormNumber(2)}
        className="py-3 col-start-2 col-end-3 border-black border-[2px] rounded"
      >
        Prev
      </button>
      <button
        className="py-3 col-start-3 col-end-4 border-black border-[2px] rounded"
        onClick={formSubmit}
      >
        Submit
      </button>
    </motion.div>
  );
}

export default FormIII;
