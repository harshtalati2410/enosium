import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../App";

function FormIII(props) {
  const { data, setData, postData } = useContext(AppContext);
  const inputs = [
    "Is_there_telephone_number_available",
    "time_duration_for_loan",
    "Type_of_Housing",
    "Owned_property",
    "Type_of_job_performed",
    "Number_of_years_of_stay_in_current_address",
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
      console.log(data);
      postData("https://lpdq42.deta.dev/model", data).then((bahh) => {
        console.log("hello");
      });
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
          htmlFor="Is_there_telephone_number_available"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Is there telephone number available?
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              Is_there_telephone_number_available: e.target.value,
            })
          }
          id="Is_there_telephone_number_available"
          name="Is_there_telephone_number_available"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Is_there_telephone_number_available"]}
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
          htmlFor="time_duration_for_loan"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Time duration (in Months)
        </label>
        <input
          onChange={(e) =>
            setData({
              ...data,
              time_duration_for_loan: e.target.value,
            })
          }
          id="time_duration_for_loan"
          type="number"
          min="4"
          max="72"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Choose"
          value={data["time_duration_for_loan"]}
        />
      </div>
      <div className="md:col-span-2 col-span-4">
        <label
          htmlFor="Type_of_Housing"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Type of Housing
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              Type_of_Housing: e.target.value,
            })
          }
          name="Type_of_Housing"
          id="Type_of_Housing"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Type_of_Housing"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="own">Own</option>
          <option value="rent">Rent</option>
          <option value="for free">For free</option>
        </select>
      </div>
      <div className="col-span-4">
        <label
          htmlFor="Owned_property"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Owned property
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              Owned_property: e.target.value,
            })
          }
          id="Owned_property"
          name="Owned_property"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Owned_property"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="Real Estate">Real Estate</option>
          <option value="car or other property">Car or other property</option>
          <option value="No property">No property</option>
          <option value="building society savings agreement/life insurance">
            Building society savings agreement/life insurance
          </option>
        </select>
      </div>
      <div className="col-span-4">
        <label
          htmlFor="Type_of_job_performed"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Type of job performed
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              Type_of_job_performed: e.target.value,
            })
          }
          id="Type_of_job_performed"
          name="Type_of_job_performed"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Type_of_job_performed"]}
        >
          <option value="" disabled>
            Choose
          </option>
          <option value="skilled employee / official">
            Skilled employee / official
          </option>
          <option value="unskilled - resident">Unskilled - resident</option>
          <option value="management/ self-employed/highly qualified employee/ officer">
            Management/ self-employed/highly qualified employee/ officer
          </option>
          <option value="unemployed/ unskilled - non-resident">
            Unemployed/ unskilled - non-resident
          </option>
        </select>
      </div>
      <div className="col-span-4">
        <label
          htmlFor="Number_of_years_of_stay_in_current_address"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Number of years of stay in current address
        </label>
        <select
          onChange={(e) =>
            setData({
              ...data,
              Number_of_years_of_stay_in_current_address: e.target.value,
            })
          }
          name="Number_of_years_of_stay_in_current_address"
          id="Number_of_years_of_stay_in_current_address"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={data["Number_of_years_of_stay_in_current_address"]}
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
        className="py-3 col-start-2 col-end-3 text-blue-600 border-blue-600 border-[2px] rounded hover:bg-blue-600 hover:border-blue-600 hover:scale-105 hover:text-white transition-all duration-300"
      >
        Prev
      </button>
      <button
        className="py-3 col-start-3 col-end-4 text-blue-600 border-blue-600 border-[2px] rounded hover:bg-blue-600 hover:border-blue-600 hover:scale-105 hover:text-white transition-all duration-300"
        onClick={formSubmit}
      >
        Submit
      </button>
    </motion.div>
  );
}

export default FormIII;
