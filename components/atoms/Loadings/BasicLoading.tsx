import React from "react";
import Image from "next/image";
import "./BasicLoading.scss";

const LoadingOverlay: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="overlay"></div>
      <Image
        src={require("@/assets/gif/loading.gif").default}
        alt={""}
        width="64"
        height="64"
      />
    </div>
  );
};

export default LoadingOverlay;
