import React from "react";
import "./SearchButton.scss";

interface SearchButtonProps {
  text?: string;
  clickSubmit?: () => void;
  className?: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  text = "送信",
  clickSubmit,
}) => {
  return (
    <button onClick={clickSubmit} type="button">
      {text}
    </button>
  );
};

export default SearchButton;
