import { Get, Post } from "./api";

export const getTotalCount = () => {
  return Get(null, "/mattersTotalCount");
};

export const getKeyword = () => {
  return Get(null, "/mattersKeyword");
};

export const getProgrammingLanguage = () => {
  return Get(null, "/mattersProgrammingLanguage");
};

export const getPrefecture = () => {
  return Get(null, "/mattersPrefecture");
};

export const getMatters = () => {
  return Get(null, "/matters");
};
