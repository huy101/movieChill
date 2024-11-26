"use client";
import React, { useEffect, useState } from "react";

const useFollowStatus = ({
  isFollowing,
  isAFollower,
}: {
  isFollowing: boolean;
  isAFollower: boolean;
}) => {
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (isFollowing && isAFollower) {
      setStatus("Bạn bè");
    } else if (isFollowing && !isAFollower) {
      setStatus("Đang theo dõi");
    } else if (!isFollowing && isAFollower) {
      setStatus("Theo dõi lại");
    } else {
      setStatus("Theo dõi");
    }
  }, [isFollowing, isAFollower]);

  return status;
};

export default useFollowStatus;
