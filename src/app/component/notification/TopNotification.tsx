"use client";
import React, { useState, useLayoutEffect } from "react";
import { MdClose } from "react-icons/md";

const TopNotification = () => {
  const [show, setShow] = useState(true);
  const [isMounted, setIsMounted] = useState<string>("correct");

  if (!show) return null;

  return (
    <div className="z-20 py-2 backdrop-blur-md flex items-center w-full px-5 max-md:px-1 bg-_dark">
      <div className="w-full">
      🚀🎉Hãy thử ứng dụng mới của chúng tôi! cho phép bạn xem video và nghe nhạc
      cùng bạn bè theo thời gian thực.
        <a
          href="https://mediasharing.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-semibold px-1"
        >
          Nhấn vào đây
        </a>{" "}
          để trải nghiệm xem video và nghe nhạc đồng bộ với
          bạn bè miễn phí!:{" "}
        <a
          href="https://mediasharing.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-semibold px-2"
        >
          MediaSharing
        </a>
      </div>

      <button
        onClick={() => {
          setShow(false);
        }}
        className="ml-2 w-fit  text-white"
        title="Close"
      >
        <MdClose />
      </button>
    </div>
  );
};

export default TopNotification;
