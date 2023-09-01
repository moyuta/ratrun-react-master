"use client";
import React, { useState } from "react";
import { BasicInput } from "@/components/atoms/Inputs";
import { BasicButton } from "@/components/atoms/Buttons";
import { postRegistration } from "@/api/user";
import { useRouter } from "next/navigation";
import "./page.scss";

const Registration: React.FC = () => {
  const router = useRouter();
  const handleClickSubmit = async () => {
    try {
      await postRegistration(user);
      alert("新規登録に成功しました。画面を遷移します。");
      router.push("/login");
    } catch (error) {
      //
      alert("新規登録に失敗しました。");
    }
  };
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleInput = (data: { name: string; value: string }) => {
    setUser({ ...user, [data.name]: data.value });
  };
  return (
    <div className="registration">
      <p>新規登録</p>
      <form>
        <BasicInput
          type="email"
          name="email"
          value={user.email}
          inputValue={handleInput}
          className="basic-input"
        />
        <BasicInput
          type="password"
          name="password"
          value={user.password}
          inputValue={handleInput}
          className="basic-input"
        />
        <BasicButton clickSubmit={handleClickSubmit} />
      </form>
    </div>
  );
};

export default Registration;
