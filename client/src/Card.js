import React from "react";
import { Button } from "react-bootstrap";

function Card({ props }) {
  return (
    <div className="flex items-center justify-center m-5">
      <div className="mx-auto md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.Title}</div>
          <p className="text-gray-700 text-base">{props.Motivation}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.Commitment} Per Week
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Timeline of {props.Duration}
          </span>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.Role_accountant ? " Accounting | " : ""}{" "}
            {props.Role_analyst ? " Analysis | " : ""}{" "}
            {props.Role_designer ? " Design | " : ""}{" "}
            {props.Role_finance ? " Finance | " : ""}{" "}
            {props.Role_marketing ? " Marketing | " : ""}{" "}
            {props.Role_product ? " Product Management | " : ""}{" "}
            {props.Role_research ? " Research | " : ""}{" "}
            {props.Role_sales ? " Sales | " : ""}{" "}
            {props.Role_software ? " Software | " : ""}{" "}
          </span>
        </div>
        <div className="px-6 pt-4 pb-4">
          <Button className="">JOIN</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
