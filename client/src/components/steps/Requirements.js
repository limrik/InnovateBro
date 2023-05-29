import { useStepperContext } from "../../contexts/StepperContext";

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setUserData({ ...userData, [name]: checked });
  };

  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
          Expected Commitment (per week)
        </div>
        <select
          value={userData["Commitment"] || ""}
          name="Commitment"
          onChange={handleChange}
          className="my-2 flex rounded-2xl border border-gray-200 bg-white p-1 text-base w-full p-2.5 text-gray-500 bg-white border rounded-2xl shadow-sm outline-none appearance-none focus:border-indigo-600"
        >
          <option> - Select - </option>
          <option> 0 - 2 Hours </option>
          <option> 2 - 4 Hours </option>
          <option> 4 - 6 Hours </option>
          <option> 6 - 8 Hours </option>
        </select>

        <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
          Projected Duration of Project{" "}
        </div>
        <select
          value={userData["Duration"] || ""}
          name="Duration"
          onChange={handleChange}
          className="my-2 flex rounded-2xl border border-gray-200 bg-white p-1 text-base w-full p-2.5 text-gray-500 bg-white border rounded-2xl shadow-sm outline-none appearance-none focus:border-indigo-600"
        >
          <option> - Select - </option>
          <option> 1 Month </option>
          <option> 3 Months </option>
          <option> 6 Months </option>
          <option> 1 Year </option>
        </select>

        <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
          Required Roles{" "}
        </div>
        <ul className="my-2 items-center p-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-2xl sm:flex">
          <li className="w-100 border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="px-4 flex items-center">
              <input
                id="vue-checkbox-list"
                type="checkbox"
                checked={userData["Role_analyst"] || false}
                name="Role_analyst"
                onChange={handleCheckbox}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                for="vue-checkbox-list"
                className="w-20 py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Business Analyst
              </label>
            </div>
          </li>
          <li className="w-100 border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="px-4 flex items-center">
              <input
                id="vue-checkbox-list"
                type="checkbox"
                checked={userData["Role_designer"] || false}
                name="Role_designer"
                onChange={handleCheckbox}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                for="vue-checkbox-list"
                className="w-20 py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Designer
              </label>
            </div>
          </li>
          <li className="w-100 border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="px-4 flex items-center">
              <input
                id="vue-checkbox-list"
                type="checkbox"
                checked={userData["Role_research"] || false}
                name="Role_research"
                onChange={handleCheckbox}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                for="vue-checkbox-list"
                className="w-20 py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Researcher
              </label>
            </div>
          </li>
        </ul>
        <ul className="my-2 items-center p-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-2xl sm:flex">
          <li className="w-100 border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="px-4 flex items-center">
              <input
                id="vue-checkbox-list"
                type="checkbox"
                checked={userData["Role_marketing"] || false}
                name="Role_marketing"
                onChange={handleCheckbox}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                for="vue-checkbox-list"
                className="w-20 py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Marketing Specialist
              </label>
            </div>
          </li>
          <li className="w-100 border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="px-4 flex items-center">
              <input
                id="vue-checkbox-list"
                type="checkbox"
                checked={userData["Role_product"] || false}
                name="Role_product"
                onChange={handleCheckbox}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                for="vue-checkbox-list"
                className="w-20 py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Product Manager
              </label>
            </div>
          </li>
          <li className="w-100 border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="px-4 flex items-center">
              <input
                id="vue-checkbox-list"
                type="checkbox"
                checked={userData["Role_finance"] || false}
                name="Role_finance"
                onChange={handleCheckbox}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                for="vue-checkbox-list"
                className="w-20 py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Finance Manager
              </label>
            </div>
          </li>
        </ul>
        <ul className="my-2 items-center p-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-2xl sm:flex">
          <li className="w-100 border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="px-4 flex items-center">
              <input
                id="vue-checkbox-list"
                type="checkbox"
                checked={userData["Role_software"] || false}
                name="Role_software"
                onChange={handleCheckbox}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                for="vue-checkbox-list"
                className="w-20 py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Software Developer
              </label>
            </div>
          </li>
          <li className="w-100 border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="px-4 flex items-center">
              <input
                id="vue-checkbox-list"
                type="checkbox"
                checked={userData["Role_accountant"] || false}
                name="Role_accountant"
                onChange={handleCheckbox}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                for="vue-checkbox-list"
                className="w-20 py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Accountant
              </label>
            </div>
          </li>
          <li className="w-100 border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="px-4 flex items-center">
              <input
                id="vue-checkbox-list"
                type="checkbox"
                checked={userData["Role_sales"] || false}
                name="Role_sales"
                onChange={handleCheckbox}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                for="vue-checkbox-list"
                className="w-20 py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Sales Representative
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
