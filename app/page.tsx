"use client";
import React, { useState, useEffect } from "react";
import { BasicInput } from "@/components/atoms/Inputs";
import { SearchButton, TagButton } from "@/components/atoms/Buttons";
import { BasicCard } from "@/components/atoms/Cards";
import { BasicLoading } from "@/components/atoms/Loadings";
import {
  getTotalCount,
  getKeyword,
  getProgrammingLanguage,
  getPrefecture,
  getMatters,
} from "@/api/matters";
import Image from "next/image";
import { Languages, Keywords, Prefectures, Matters } from "@/types/matter";
import dayjs from "dayjs"; // import文を修正する
import "./page.scss";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const handleInput = (data: { name: string; value: string }) => {
    console.log(data);
  };
  const handleClickSubmit = async () => {
    console.log(searchText);
  };

  const [totalCount, setTotalCount] = useState(0);
  const [updatedDate, setUpdatedDate] = useState("");

  const [languages, setLanguages] = useState<Languages>({
    develops: [],
    frameworks: [],
    infrastructures: [],
    designs: [],
    others: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [prefectures, setPrefectures] = useState<Prefectures[]>([]);
  const [keywords, setKeywords] = useState<Keywords[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [matters, setMatters] = useState<Matters[]>([]);

  const getPrefecturesByArea = (area: string) => {
    return prefectures.filter((prefecture) => prefecture.area === area);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const countData = await getTotalCount();
        setTotalCount(countData.total_count);
        setUpdatedDate(dayjs(countData.date).format("YYYY/MM/DD")); // dayjs関数を呼び出す
        const programmingLanguageData = await getProgrammingLanguage();
        setLanguages({
          develops: programmingLanguageData.develops,
          frameworks: programmingLanguageData.frameworks,
          infrastructures: programmingLanguageData.infrastructures,
          designs: programmingLanguageData.designs,
          others: programmingLanguageData.others,
        });
        const fetchedPrefectures = await getPrefecture();
        setPrefectures(fetchedPrefectures);
        setAreas(
          Array.from(
            new Set<string>(
              fetchedPrefectures.map(
                (prefecture: Prefectures) => prefecture.area
              )
            )
          )
        );
        setKeywords(await getKeyword());
        setMatters(await getMatters());
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="top-page">
      {isLoading && <BasicLoading />}
      <div className="title-area">
        <div className="title-area-top">
          <Image
            src={require("@/assets/img/rocket.png").default}
            alt="rocket"
            width="100"
            height="100"
          />
          <h1>フリーランススタート</h1>
        </div>
        <p className="title-area-num">
          案件・求人数{totalCount}件 ({updatedDate}更新)
        </p>
        <p>フリーランスエンジニア専用のIT求人・案件検索サイトで仕事探し</p>
      </div>
      <div className="search-area">
        <h2>フリーワードで案件検索</h2>
        <div className="search-area-box">
          <BasicInput
            type="email"
            name="email"
            value={searchText}
            inputValue={handleInput}
            placeholder="キーワードを入れて探す"
          />
          <SearchButton text="案件を検索" clickSubmit={handleClickSubmit} />
        </div>
      </div>
      <div className="recommend-area">
        <h2>おすすめキーワードで探す</h2>
        <div className="recommend-area-key">
          <div className="buttons">
            {keywords.map((keyword, key) => (
              <TagButton key={key} text={keyword.name} />
            ))}
          </div>
        </div>
      </div>
      <div className="detail-area">
        <h2>開発言語・環境でフリーランス求人・案件を探す</h2>
        <div className="detail-area-language">
          <h3>開発言語</h3>
          <div className="buttons">
            {languages.develops.map((develop, key) => (
              <TagButton key={key} text={develop.name} />
            ))}
          </div>
          <h3>フレームワーク</h3>
          <div className="buttons">
            {languages.frameworks.map((framework, key) => (
              <TagButton key={key} text={framework.name} />
            ))}
          </div>
          <h3>インフラ</h3>
          <div className="buttons">
            {languages.infrastructures.map((infrastructure, key) => (
              <TagButton key={key} text={infrastructure.name} />
            ))}
          </div>
          <h3>デザイン</h3>
          <div className="buttons">
            {languages.designs.map((design, key) => (
              <TagButton key={key} text={design.name} />
            ))}
          </div>
          <h3>その他</h3>
          <div className="buttons">
            {languages.others.map((other, key) => (
              <TagButton key={key} text={other.name} />
            ))}
          </div>
        </div>
      </div>
      <div className="detail-area">
        <h2>勤務地でフリーランス求人・案件を探す</h2>
        <div className="detail-area-language">
          {areas.map((area) => (
            <React.Fragment key={area}>
              <h3>{area}</h3>
              <div className="buttons">
                {getPrefecturesByArea(area).map((prefecture) => (
                  <TagButton key={prefecture.name} text={prefecture.name} />
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="new-area">
        <h2>新着フリーランス求人・案件</h2>
        <div className="new-list">
          {matters.map((matter, key) => (
            <BasicCard
              key={key}
              title={matter.title}
              unit_price={matter.unit_price}
              contract={matter.contract}
              area={matter.area}
              language={matter.language}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
