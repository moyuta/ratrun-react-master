"use client";

import React from "react";
import "./BasicButton.scss";

interface BasicButtonProps {
  text?: string;
  clickSubmit?: () => void;
}

const BasicButton: React.FC<BasicButtonProps> = ({
  text = "送信",
  clickSubmit,
}) => {
  const handleClick = () => {
    console.log("hoge");
    if (clickSubmit) {
      clickSubmit();
    }
  };

  return (
    <button onClick={handleClick} type="button">
      {text}
    </button>
  );
};

export default BasicButton;
