import React, { useState, useEffect } from "react";
import ProfileInput from "./inputComponents/ProfileInput";
import SelectInput from "./inputComponents/SelectInput";
import { GenreList } from "@/utils/genreData";
import { getUserDataTypes, EditProfileDataTypes } from "@/types/userTypes";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { Role } from "@/types/role";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userApis } from "@/app/userApi";
import { toast } from "react-hot-toast";
import SmallLoader from "../loader/SmallLoader";

interface ProfileEditProps extends getUserDataTypes {
  role: Role;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({
  _id,
  createdAt,
  email_verified,
  followers,
  following,
  fullName,
  genre,
  isFollowing,
  ownProfile,
  profilePic,
  username,
  password,
  email,
  facebook,
  github,
  instagram,
  twitter,
  bio,
  role,
}) => {
  const queryClient = useQueryClient(),
    [initialUser, setInitialUser] = useState<getUserDataTypes>({
      _id,
      createdAt,
      email_verified,
      followers,
      following,
      fullName,
      genre,
      isFollowing,
      ownProfile,
      profilePic,
      username,
      email,
      password,
      facebook,
      github,
      instagram,
      twitter,
      bio,
    }),
    [user, setuser] = useState<getUserDataTypes>({
      ...initialUser,
    }),
    [isEdit, setisEdit] = useState<boolean>(false),
    router = useRouter();

  function removeEmptyFields(obj: any) {
    const newobj = { ...obj };
    Object.keys(newobj).forEach((key) => {
      if (
        newobj[key] === undefined ||
        newobj[key] === null ||
        newobj[key] === ""
      ) {
        delete newobj[key];
      }
    });
    return newobj;
  }

  useEffect(() => {
    const cleanUser = removeEmptyFields(user);
    const cleanInitialUser = removeEmptyFields(initialUser);
    const hasChanged =
      JSON.stringify(cleanInitialUser) !== JSON.stringify(cleanUser);

    setisEdit(hasChanged);
  }, [user, initialUser]);

  const EditProfile = useMutation(
    (data: EditProfileDataTypes) => userApis.EditProfile(data),
    {
      onSuccess: (data) => {
        toast.success("Profile Updated");
        router.push(`/profile/${user.username}?tab=editprofile`);
        queryClient.invalidateQueries(["getUser", user.username]);
      },
      onError: (data: any) => {
        toast.error(data.response.data);

      },
    }
  );

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "username") {
      setuser({ ...user, [e.target.name]: e.target.value.trim() });
    }
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: any) => {
    setuser({ ...user, genre: e });
  };

  function isUsernameValid(username: string): boolean {
    const pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(username);
  }
  const handleSubmit = () => {
    const isValid = isUsernameValid(user.username);

    if (user.username.length > 15) {
      return toast.error("Tên người dùng không được dài quá 15 ký tự");
    }
    if (user.username.length <= 2) {
      return toast.error("Tên người dùng không được ngắn hơn 3 ký tự");
    }
    if (user.username === "admin") {
      return toast.error("Tên người dùng không thể là admin");
    }
    if (user.username === "Admin") {
      return toast.error("Tên người dùng không thể là Admin");
    }
    if (user.username === "ADMIN") {
      return toast.error("Tên người dùng không thể là ADMIN");
    }
    if (!isValid) {
      return toast.error("Tên người dùng không được chứa các ký tự đặc biệt");
    }
    const changedValues: any = {};
    for (const key in user) {
      if (
        user[key as keyof getUserDataTypes] !==
        initialUser[key as keyof getUserDataTypes]
      ) {
        changedValues[key as any] = user[key as keyof getUserDataTypes];
      }
    }

    EditProfile.mutate({ ...changedValues, _id: user._id });
  };
  const handleSubmit1 = () => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,16}$/;

    if (!regex.test(user.password)) {
      return toast.error("Mật khẩu phải từ 8 đến 16 ký tự, có ít nhất một chữ cái và số.");
    }
    const changedValues: any = {};
    for (const key in user) {
      if (
        user[key as keyof getUserDataTypes] !==
        initialUser[key as keyof getUserDataTypes]
      ) {
        changedValues[key as any] = user[key as keyof getUserDataTypes];
      }
    }

    EditProfile.mutate({ ...changedValues, _id: user._id });
  };
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="pl-5 max-md:pl-0">
      <div className="mt-16 pl-4">
        <h2 className="font-medium text-neutral-200 tracking-wide">
          {" "}
          THÔNG TIN CÁ NHÂN
        </h2>
        <form className="flex flex-col gap-5 mt-10">
          <ProfileInput
            type="text"
            name="fullName"
            label="Họ và tên"
            onChange={handleOnchange}
            required={true}
            value={user.fullName}
          />
        </form>

      </div>
      <div className="mt-16 pl-4">
        <h2 className="font-medium text-neutral-200 tracking-wide">
          {" "}
          THÔNG TIN TÀI KHOẢN
        </h2>
        <form className="flex flex-col gap-5 mt-10">
          <ProfileInput
            type="text"
            name="username"
            label="Tên đăng nhập"
            onChange={handleOnchange}
            required={true}
            value={user.username}
            disabled={role === Role.admin ? false : true}
          />
          <ProfileInput
            type="email"
            disabled={role === Role.admin ? false : true}
            name="email"
            label="Email"
            value={user.email!}
            onChange={(e) => {
              if (role === Role.admin) {
                handleOnchange(e);
              }
            }}
            required={true}
          />
          <ProfileInput
            type="text"
            name="password"
            label="Mật khẩu mới"
            onChange={handleOnchange}
            required={true}
            value={user.password}
            disabled={role === Role.admin ? false : true}
          />
        </form>
        <div className="mt-12 mb-4  flex justify-end mr-28 max-md:mr-10">
        <button
          onClick={handleSubmit1}
          className={clsx(
            " bg-_sidenav_active_color py-1 px-3 flex items-center rounded-md font-Helvetica font-normal text-neutral-200 tracking-wide",
            isEdit
              ? "opacity-100 pointer-events-auto"
              : "opacity-30 pointer-events-none",
            EditProfile.isLoading
              ? "opacity-30 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          )}
        >
          {EditProfile.isLoading ? (
            <>
              <span className="pr-2">Đang cập nhật...</span> <SmallLoader size={20} />
            </>
          ) : (
            "Đổi mật khẩu"
          )}
        </button>
      </div>
      </div>
      <div className="mt-16 pl-4">
        <h2 className="font-medium text-neutral-200 tracking-wide">
          {" "}
          MẠNG XÃ HỘI
        </h2>
        <form className="flex flex-col gap-5 mt-8">
          <ProfileInput
            type="text"
            name="twitter"
            label="X"
            onChange={handleOnchange}
            value={user.twitter!}
            required={false}
            placeholder="https://twitter.com/example"
          />
          <ProfileInput
            type="text"
            name="facebook"
            label="Facebook"
            onChange={handleOnchange}
            required={false}
            placeholder="https://facebook.com/example"
            value={user.facebook!}
          />
          <ProfileInput
            type="text"
            name="instagram"
            label="Instagram"
            onChange={handleOnchange}
            required={false}
            placeholder="https://instagram.com/example"
            value={user.instagram!}
          />
          <ProfileInput
            type="text"
            name="github"
            label="Github"
            onChange={handleOnchange}
            required={false}
            placeholder="https://github.com/example"
            value={user.github!}
          />
        </form>
      </div>
      <div className="mt-16 pl-4">
        <h2 className="font-medium text-neutral-200 tracking-wide">
          {" "}
          GIỚI THIỆU
        </h2>
        <form className="flex flex-col gap-5 mt-8">
          <div>
            <SelectInput
              label="Thể loại ưa thích"
              name="genre"
              options={GenreList}
              defaultValue={user.genre.map((item) => {
                return {
                  value: item,
                  label: item,
                };
              })}
              onChange={handleSelectChange}
              value={user.genre.map((item) => {
                return {
                  value: item,
                  label: item,
                };
              })}
            />
          </div>
          <div className="flex max-md:flex-col">
            <label
              htmlFor="username"
              className="text-base   w-full max-w-[280px]  flex items-center font-medium text-neutral-200 text-opacity-60"
            >
              Thông tin tiểu sử
            </label>

            <textarea
              name="bio"
              value={user.bio}
              rows={5}
              onChange={handleTextareaChange}
              placeholder={"Viết một mô tả ngắn về bản thân bạn"}
              className="bg-inherit w-2/3 placeholder:text-opacity-50 placeholder:text-_welcometext_lightblue placeholder:font-light max-md:mt-2 max-md:w-11/12 text-sm py-2 mr-6 max-md:mr-0 font-normal tracking-wide text-neutral-400 outline-none focus-within:border-opacity-75 duration-200 transition-all ease-linear focus-within:text-neutral-200 font-Inter border bg-opacity-40  border-_light_white border-opacity-30 rounded-md  px-2"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="mt-12 mb-4  flex justify-end mr-28 max-md:mr-10">
        <button
          onClick={handleSubmit}
          className={clsx(
            " bg-_sidenav_active_color py-1 px-3 flex items-center rounded-md font-Helvetica font-normal text-neutral-200 tracking-wide",
            isEdit
              ? "opacity-100 pointer-events-auto"
              : "opacity-30 pointer-events-none",
            EditProfile.isLoading
              ? "opacity-30 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          )}
        >
          {EditProfile.isLoading ? (
            <>
              <span className="pr-2">Đang cập nhật...</span> <SmallLoader size={20} />
            </>
          ) : (
            "Lưu thay đổi"
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfileEdit;
