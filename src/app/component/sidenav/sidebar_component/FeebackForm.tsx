import { userApis } from "@/app/userApi";
import { useSocket } from "@/context/SocketProvider";
import { useAppSelector } from "@/redux/hooks";
import { Role } from "@/types/role";
import { feedbackDataTypes } from "@/types/userTypes";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import SmallLoader from "../../loader/SmallLoader";

const FeebackForm = () => {
  const [name, setname] = useState("");
  const [message, setmessage] = useState("");
  const [saveNotificatoinchecked, setSaveNotificationChecked] = useState(false);
  const [sealTimeNotificationChecked, setRealTimeNotificationChecked] =
    useState(false);
  const user = useAppSelector((state) => state.auth);
  const { notificationSocket } = useSocket();

  const modelClose = () => {
    document.getElementById("modalclosebtn")?.click();
  };

  const Feedback = useMutation(
    (data: feedbackDataTypes) => userApis.SendFeeback(data),
    {
      onSuccess: (data) => {
        modelClose();
        toast.success(data);
      },
      onError: (error) => {
        console.log(error);
        toast.error("Có lỗi");
      },
    }
  );
  const NOtifications = useMutation(
    (data: any) => userApis.AddNotification(data),
    {
      onSuccess: (data) => {
        modelClose();
        toast.success(data);
      },
      onError: (error) => {
        console.log(error);
        toast.error("Có lỗi");
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.length < 10) {
      toast.error("Văn bản không ngắn hơn 10 ký tự" + message.length);
      return;
    }
    if (message.length > 1000) {
      toast.error("Văn bản không dài hơn 1000 ký tự");
      return;
    }
    if (user.role === Role.admin) {
      if (saveNotificatoinchecked) {
        const notifications = {
          notification: message,
        };
        NOtifications.mutate(notifications);
      }

      if (sealTimeNotificationChecked && notificationSocket) {
        notificationSocket.emit("NewNotification", {
          message,
        });
      }
    } else {
      Feedback.mutate({ name, message });
    }
  };

  const handleSaveCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSaveNotificationChecked(event.target.checked);
  };

  const handleRealtimeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRealTimeNotificationChecked(event.target.checked);
  };

  return (
    <>
      <section className="text-gray-600 body-font relative bg-neutral-800 p-14">
        <form onSubmit={handleSubmit}>
          <div className="rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 ">
            <h2 className="text-white text-xl mb-1 font-medium ">Báo cáo lỗi hoặc Ý kiến </h2>
            {user && user.role === Role.admin && (
              <div className="my-4">
                <div className="flex items-center">
                  <label
                    htmlFor="savenotification"
                    className="text-neutral-200 font-light text-sm"
                  >
                    Lưu thông báo
                  </label>
                  <input
                    type="checkbox"
                    checked={saveNotificatoinchecked}
                    onChange={handleSaveCheckbox}
                    className="ml-2"
                  />
                </div>
                {/* <div className="flex items-center mt-2">
                  <label
                    htmlFor="savenotification"
                    className="text-neutral-200 font-light text-sm"
                  >
                    Gửi thông báo
                  </label>
                  <input
                    type="checkbox"
                    checked={sealTimeNotificationChecked}
                    onChange={handleRealtimeCheckbox}
                    className="ml-2"
                  />
                </div> */}
              </div>
            )}

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-neutral-200 mb-1"
              >
                Tên{" "}
              </label>
              <input
                type="text"
                id="email"
                value={name}
                onChange={(e) => setname(e.target.value)}
                name="email"
                placeholder="Nhập tên của bạn (tùy chọn)"
                className="w-full placeholder:text-sm bg-neutal-600 text-neutral-100 rounded border border-gray-600 focus:border-gray-300 focus:ring-2 focus:ring-gray-300 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-neutral-200 mb-1"
              >
                Nội dung
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                required
                placeholder="Nhập nội dung của bạn"
                className="w-full bg-neutral-700 rounded border border-neutral-600 focus:border-neutral-200  h-32 text-sm font-light outline-none text-neutral-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              className={clsx(
                "text-white active:bg-opacity-60 active:text-neutral-100 bg-_blue border-0 py-2 px-6 focus:outline-none hover:bg-_sidenav_active_color rounded text-lg",
                Feedback.isLoading &&
                  "cursor-not-allowed pointer-events-none bg-opacity-50"
              )}
            >
              {Feedback.isLoading ? <SmallLoader size={20} /> : "Gửi"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FeebackForm;
