"use client";
import React from "react";
import CustomModal from "../../modal/CustomModal";
import FeebackForm from "./FeebackForm";

const Feeback = () => {
  const btn = (
    <>
      <p className="text-xs text-neutral-500 ml-1  font-light">
      Báo cáo lỗi{" "}
        <span className="text-blue-500 hover:underline text-xs font-normal break-words">
          tại đây
        </span>
      </p>
    </>
  );

  return (
    <div className="flex justify-center ml-2 mb-2">
      <CustomModal buttonElement={btn} data={<FeebackForm />} width={"1/2"} /> 
    </div>
  );
};

export default Feeback;
