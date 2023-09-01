import React from "react";
import Image from "next/image";
import "./BasicCard.scss";

interface BasicCardProps {
  title: string;
  unit_price: string;
  contract: string;
  area: string;
  language: string;
}

const BasicCard: React.FC<BasicCardProps> = ({
  title,
  unit_price,
  contract,
  area,
  language,
}) => {
  return (
    <div className="basic-card">
      <p className="title">{title}</p>
      <div className="flex">
        <Image src={require("@/assets/svg/money.svg").default} alt="" />
        <p>
          <span className="emphasize">{unit_price}</span> 万円/月額
        </p>
      </div>
      <div className="flex">
        <Image src={require("@/assets/svg/document.svg").default} alt="" />
        <p>{contract}</p>
      </div>
      <div className="flex">
        <Image src={require("@/assets/svg/map.svg").default} alt="" />
        <p>{area}</p>
      </div>
      <div className="flex">
        <Image src={require("@/assets/svg/script.svg").default} alt="" />
        <p>{language}</p>
      </div>
    </div>
  );
};

export default BasicCard;
