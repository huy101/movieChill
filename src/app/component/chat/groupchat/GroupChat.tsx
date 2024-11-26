"use client";
import React from "react";
import { userApis } from "@/app/userApi";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "@/redux/hooks";
import SingleGroupChatCard from "./SingleGroupChatCard";

const GroupChat = () => {
  const user = useAppSelector((state) => state.auth);
  const { data, isLoading } = useQuery(
    ["getAllGroupChats", user.isUserAuthenticated],
    () => userApis.getAllGroupChats(),
    { enabled: user.isUserAuthenticated }
  );

  if (isLoading) {
    return <div>Đang tải...</div>;
  }

  if (!data) {
    return <div>Không tìm thấy dữ liệu</div>;
  }

  return (
    <>
      {data.map((group) => (
        <SingleGroupChatCard key={group._id} {...group} />
      ))}
    </>
  );
};

export default GroupChat;
