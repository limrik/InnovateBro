import { useStepperContext } from "../../contexts/StepperContext";

export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
          Problem Statement
        </div>
        <div className="my-2 flex rounded-2xl border border-gray-200 bg-white p-1 h-40 align-top break-words">
          <textarea
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            rows="4"
            placeholder="Problem Statement"
            onChange={handleChange}
            name="ProblemStatement"
            value={userData["ProblemStatement"] || ""}
          ></textarea>
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
          Motivation
        </div>
        <div className="my-2 flex rounded-2xl border border-gray-200 bg-white p-1 h-40 align-top break-words">
          <textarea
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            rows="4"
            placeholder="Motivation"
            onChange={handleChange}
            name="Motivation"
            value={userData["Motivation"] || ""}
          ></textarea>
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-base font-bold uppercase leading-8 text-gray-500">
          Vision
        </div>
        <div className="my-2 flex rounded-2xl border border-gray-200 bg-white p-1 h-40 align-top break-words">
          <textarea
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            rows="4"
            placeholder="Vision"
            onChange={handleChange}
            name="Vision"
            value={userData["Vision"] || ""}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
