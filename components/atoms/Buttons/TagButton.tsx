import React from "react";

interface TagButtonProps {
  text?: string | number;
  clickSubmit?: () => void;
}

const TagButton: React.FC<TagButtonProps> = ({
  text = "送信",
  clickSubmit,
}) => {
  return (
    <button onClick={clickSubmit} type="button">
      {text}
    </button>
  );
};

export default TagButton;
