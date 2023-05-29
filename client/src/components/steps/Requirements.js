import { useStepperContext } from "../../contexts/StepperContext";

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
          Expected Commitment (per week)
        </div>
        <div className="my-2 flex rounded-2xl border border-gray-200 bg-white p-1 align-top break-words">
          <select
            value={userData["Commitment"] || ""}
            name="Commitment"
            onChange={handleChange}
            className="text-base w-full p-2.5 text-gray-500 bg-white border rounded-2xl shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            <option> - Select - </option>
            <option> 0 - 2 Hours </option>
            <option> 2 - 4 Hours </option>
            <option> 4 - 6 Hours </option>
            <option> 6 - 8 Hours </option>
          </select>
        </div>

        <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
          Projected Duration of Project{" "}
        </div>
        <div className="my-2 flex rounded-2xl border border-gray-200 bg-white p-1 align-top break-words">
          <select
            value={userData["Duration"] || ""}
            name="Duration"
            onChange={handleChange}
            className="text-base w-full p-2.5 text-gray-500 bg-white border rounded-2xl shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            <option> - Select - </option>
            <option> 1 Month </option>
            <option> 3 Months </option>
            <option> 6 Months </option>
            <option> 1 Year </option>
          </select>
        </div>

        <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
          Required Skills{" "}
        </div>
      </div>
    </div>
  );
}
