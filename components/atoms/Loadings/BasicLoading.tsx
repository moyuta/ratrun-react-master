import React from "react";
import Image from "next/image";
import "./BasicLoading.scss";

const LoadingOverlay: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="overlay"></div>
      <Image
        src={require("@/assets/gif/loading.gif").default}
        className="loading-image"
        alt={""}
        width="100"
        height="500"
      />
    </div>
  );
};

export default LoadingOverlay;
