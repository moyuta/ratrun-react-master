import { UserDataType } from "@/types/user";
import { Get, Post } from "./api";

export const postLogin = (userData: UserDataType) => {
  return Post(userData, "/AuthResource");
};

export const postRegistration = (userData: UserDataType) => {
  return Post(userData, "/registration");
};
