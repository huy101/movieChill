"use client";
import React, { useLayoutEffect, useState } from "react";
import Checkbox from "./Checkbox";
import clsx from "clsx";
import toast from "react-hot-toast";
import { userApis } from "../userApi";
import { useMutation } from "@tanstack/react-query";

const SurveyForm = () => {
  const [show, setShow] = useState(false);
  const [surveryData, setSurveyData] = useState({
    name: "",
    // source: "",
    // otherSource: "",
    rating: "",
    feedback: "",
  });

  const { mutate, isLoading } = useMutation(
    (data: any) => userApis.survey(data),
    {
      onSuccess: () => {
        toast.success(
          "Cảm ơn bạn đã dành thời gian để cung cấp phản hồi",
          {
            duration: 5000,
          }
        );
        localStorage.setItem("survey", "true");
        setShow(false);
      },
      onError: () => {
        toast.error("Có lỗi");
      },
    }
  );

  useLayoutEffect(() => {
    const survey = localStorage.getItem("survey");
    if (survey) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!surveryData.rating) {
      toast.error("Vui lòng điền đầy đủ các trường bắt buộc");
      return;
    }
    mutate(surveryData);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSurveyData((prev) => ({
        ...prev,
        source: value,
      }));
    } else {
      setSurveyData((prev) => ({
        ...prev,
        source: "",
      }));
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 w-full h-full bg-_black_bg z-[500] grid place-content-center bg-opacity-50 backdrop-blur-sm  top-0">
      <section className="bg-_genre_chip_bg max-w-2xl w-full py-3 rounded-md">
        <form onSubmit={handleSubmit} className="survey-form">
          <div className="px-4">
            <h2 className="font-bold text-2xl">Khảo sát phản hồi</h2>
            <p className="text-neutral-400">
            Vui lòng dành chút thời gian để giúp chúng tôi cải thiện trải nghiệm trang web bằng cách
            cung cấp phản hồi cho chúng tôi.
            </p>
          </div>

          <div className="px-5 mt-4">
            <label htmlFor="rating" className="font-semibold">
              Đánh giá trải nghiệm trên trang web{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              value={surveryData.rating}
              onChange={(e) => {
                setSurveyData((prev) => ({
                  ...prev,
                  rating: e.target.value,
                }));
              }}
              id="rating"
              className="w-full p-2  mt-2 text-neutral-300 rounded-md"
            >
              <option value="">Xếp hạng</option>
              <option value="5">⭐️⭐️⭐️⭐️⭐️ - T1</option>
              <option value="4">⭐️⭐️⭐️⭐️ - Tốt</option>
              <option value="3">⭐️⭐️⭐️ - Phân vân</option>
              <option value="2">⭐️⭐️ - Tạm chấp nhận</option>
              <option value="1">⭐️ - Cần cải thiện</option>
            </select>
          </div>

          <div className="mt-5 px-5">
            <label htmlFor="name" className="font-semibold  mt-4">
              Tên bạn là gì?
            </label>
            <input
              type="text"
              value={surveryData.name}
              onChange={(e) => {
                setSurveyData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }));
              }}
              id="name"
              placeholder="Enter your name (optional)"
              className="w-full p-2 mt-2 text-neutral-300 rounded-md"
            />
          </div>

          <div className="px-5 mt-4">
            <label htmlFor="feedback" className="font-semibold  mt-4">
            Chúng tôi có thể làm gì để cải thiện trang web của mình?
            </label>
            <textarea
              value={surveryData.feedback}
              onChange={(e) => {
                setSurveyData((prev) => ({
                  ...prev,
                  feedback: e.target.value,
                }));
              }}
              id="feedback"
              rows={4}
              placeholder="Nhập phản hồi của bạn (tùy chọn)"
              className="w-full p-2 mt-2 resize-none text-neutral-300 rounded-md"
            />
          </div>

          <div className="w-full px-5">
            <button
              disabled={!surveryData.rating || isLoading}
              type="submit"
              className={clsx(
                "py-2 my-3 bg-blue-600 w-full  rounded-md",
                 !surveryData.rating
                  ? "bg-neutral-700 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500"
              )}
            >
              {isLoading ? "Đang gửi..." : "Gửi"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SurveyForm;
